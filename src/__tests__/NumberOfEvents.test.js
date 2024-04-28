import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";

describe ('<Event /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
    })

    test('contains element with the role textbox', () => {
        expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
    });

    test('renders the default value of the input field as 32', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
    });

    test('value of the components textbox changes accordingly when a user types it in', async () => {
        const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEvents, '{backspace}{backspace}10');
        expect(numberOfEvents).toHaveValue('10');
    });

});