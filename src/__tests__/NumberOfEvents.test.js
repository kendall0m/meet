import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents";
import {extractLocations, getEvents } from '../api';
import App from "../App";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents 
            setCurrentNOE={() => { }} 
            setErrorAlert={() => { }} 
            setInfoAlert={() => { }}
            />);
    });

    test('contains element with the role textbox', () => {
        const numberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfEventsInput).toBeInTheDocument();
        expect(numberOfEventsInput).toHaveClass('numberOfEvents');
    });

    test('renders the default value of the input field as 32', () => {
        const numberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberOfEventsInput.value).toHaveValue('32');
    });

    test('value of the components textbox changes accordingly when a user types it in', async () => {
        const numberOfEventsInput = NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEventsInput, '{backspace}{backspace}10');
        expect(numberOfEventsInput.value).toHaveValue('10');
    });
});
