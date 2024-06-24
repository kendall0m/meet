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
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).toBeInTheDocument();
            });
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).not.toBeInTheDocument();
            });
            EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });

        });
        when('displaying the list of events', () => {
        });
         then('the details are hidden by default', () => {
            expect(EventListDOM.querySelector('.eventDetails')).not.toBeInTheDocument();
        });
    });

   
    test('Event is expanded to view details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the user is viewing the events', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).toBeInTheDocument();
            });
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).not.toBeInTheDocument();
            });
            EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        });

        when('the user clicks on an event', async () => {
            const user = userEvent.setup();
            await user.click(within(EventListDOM.firstChild).queryByText('show details'));
        });

        then('the details of the event will be displayed', () => {
            expect(EventListDOM.firstChild.querySelector('.eventDetails')).toBeInTheDocument();
        });
    });

    
    test('Event is collapsed to hide details', ({ given, and, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the app is open', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).toBeInTheDocument();
            });
            await waitFor(() => {
                expect(AppDOM.querySelector('.loader')).not.toBeInTheDocument();
            });
            EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        });

        and('one event has been expanded', async () => {
            const user = userEvent.setup();
            await user.click(within(EventListDOM.firstChild).queryByText('show details'));
            expect(EventListDOM.firstChild.querySelector('.eventDetails')).toBeInTheDocument();
        });

        when('the user clicks on the event', async () => {
            const user = userEvent.setup();
            await user.click(within(EventListDOM.firstChild).queryByText('hide details'));
        });

        then('the details will be hidden again', () => {
            expect(EventListDOM.firstChild.querySelector('.eventDetails')).not.toBeInTheDocument();
        });
    });
});