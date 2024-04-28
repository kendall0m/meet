import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import mockData from '../mock-data';
import Event from '../components/Event';

describe ('<Event /> component', () => {
    let EventComponent;
    let allEvents;
    const event = mockData[0].items[0];

    beforeEach(() => {
        EventComponent = render(<render event={allEvents[0]} />);
    })

    test('renders the event title', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });

    test('renders the event start time', () => {
        expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('by default, events details section should be hidden', () => {
        const details = EventComponent.container.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test('shows the details section when the user clicks on the "show details" button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);
        const details = EventComponent.container.querySelector('.details');
        expect(details).toBeInTheDocument(); 
    });

    test('hides the details section when the user clicks on the "hide details" button', async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        const details = EventComponent.container.querySelector('.details')
        await user.click(button, 'Hide Details');
        expect(details).not.toBeInTheDocument();
    });
})