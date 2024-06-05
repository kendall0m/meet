import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('Details are collapsed by default', ({ given, when, then }) => {
        let AppComponent;
        given('the app is open', () => {
            AppComponent = render(<App />);
        });

        when('displaying the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM  = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('the details are hidden by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

   
    test('Event is expanded to view details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the user is viewing the events', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when('the user clicks on an event', async () => {
            const showDetails = EventComponent.queryByText('show details');
            const user = userEvent.setup();
            await user.click(showDetails);
        });

        then('the details of the event will be displayed', () => {
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
        })
    });

    
    test('Event is collapsed to hide details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('the details of an event are displayed', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const user = userEvent.setup();
            await user.click(EventComponent.queryByText('show details'));
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
        });

        when('the user clicks on the event', async () => {
            const hideDetails = EventComponent.queryByText('hide details');
            const user = userEvent.setup();
            await user.click(hideDetails);
        });

        then('the details will be hidden again', () => {
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
        });
    });
});