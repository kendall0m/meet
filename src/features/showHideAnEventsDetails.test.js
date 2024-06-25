import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Details are collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the app is open', async () => {
            AppComponent = render(<App />);

        });
        when('displaying the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

         then('the details are hidden by default', () => {
            // expect(EventListDOM.querySelector('.eventDetails')).not.toBeInTheDocument();
            const eventList = AppComponent.container.querySelector('#event-list');
			const eventElements = within(eventList).queryAllByRole('listitem');
			eventElements.forEach((eventElement) => {
				const details = within(eventElement).queryByTestId('details-section');
				expect(details).not.toBeInTheDocument();
            });
        });
    });

   
    test('Show event details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the user is viewing the events', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

			await waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems.length).toBe(32);
			});
        });
        let expandedEventElement;
        when('the user clicks on Show Details button', async () => {
			const eventList = AppComponent.container.querySelector('#event-list');
			const eventElements = within(eventList).queryAllByRole('listitem');
			const expandButton = within(eventElements[0]).queryByTestId('expand-button');
			userEvent.click(expandButton);
			expandedEventElement = eventElements[0];
        });

        then('the details of the event will be displayed', () => {
            const details = within(expandedEventElement).queryByTestId('details-section');
			expect(details).toBeDefined();
        });
    });

    
    test('Details are collapsed', ({ given, and, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let expandedEventElement;
        given('one event has details expanded', async () => {
			AppComponent = render(<App />);
			const AppDOM = AppComponent.container.firstChild;
			const EventListDOM = AppDOM.querySelector('#event-list');

			return waitFor(() => {
				const EventListItems = within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems.length).toBe(32);
			}).then(() => {
				const eventList = AppComponent.container.querySelector('#event-list');
				const eventElements = within(eventList).queryAllByRole('listitem');
				const expandButton = within(eventElements[0]).queryByTestId('expand-button');
				userEvent.click(expandButton);
				expandedEventElement = eventElements[0];
            });
        });

        when('the user clicks Hide Details button', async () => {
			if (!expandedEventElement) {
				throw new Error('Expanded event element is not defined');
			}

			const hideDetailsButton = within(expandedEventElement).queryByTestId('hide-details-button');
			userEvent.click(hideDetailsButton);
        });

        then('the details will be hidden again', () => {
            if (!expandedEventElement) {
				throw new Error('Expanded event element is not defined');
			}

			const details = within(expandedEventElement).queryByTestId('details-section');
			expect(details).not.toBeInTheDocument();
        });
    });
});