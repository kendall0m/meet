import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
    });

    test('contains element with the role textbox', () => {
        const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
        expect(numberInput).toBeInTheDocument();
        expect(numberInput).toHaveClass('numberOfEvents');
    });

    test('renders the default value of the input field as 32', () => {
        const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
        expect(numberInput.value).toBe('32');
    });

    test('value of the components textbox changes accordingly when a user types it in', async () => {
        const numberInput = NumberOfEventsComponent.queryByRole('spinbutton');
        const user = userEvent.setup();
        await user.type(numberInput, '{backspace}{backspace}10');
        expect(numberInput.value).toBe('10');
    });
});