import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;
        let eventList;
        given('the user has opened the app', () => {
            AppComponent = render(<App />);
        });

        
        when('viewing the events section', async () => {

			const AppDOM = AppComponent.container.firstChild;
			await waitFor(() => {
				eventList = within(AppDOM).queryAllByRole('listitem');
				expect(eventList[0]).toBeTruthy();
			});
		});

		then('32 events are shown', () => {
			expect(eventList.length).toEqual(32);
		});
    });

    test('The user can specify the number of events', ({ given, when, then }) => {
        let AppComponent;
        given('a user has input a number of events', async () => {
            const user = userEvent.setup();
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
            await user.type(numberOfEventsInput, '{backspace}{backspace}10');
        });

        when('the user views the events', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            expect(EventListDOM).toBeInTheDocument();
        });

        then('the app will display the number specified by the user', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toEqual(10);
        });
    });
});