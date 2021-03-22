import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    screen.getByText('Checkout Form')
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const fnInput = screen.getByLabelText('First Name:')
    const lnInput = screen.getByLabelText('Last Name:')
    const addrInput = screen.getByLabelText('Address:')
    const cityInput = screen.getByLabelText('City:')
    const stateInput = screen.getByLabelText('State:')
    const zipInput = screen.getByLabelText('Zip:')
    const subBtn = screen.getByText('Checkout')
    userEvent.type(fnInput, 'Billy')
    userEvent.type(lnInput, 'Bob')
    userEvent.type(addrInput, '123 House Street')
    userEvent.type(cityInput, 'This City')
    userEvent.type(stateInput, 'State')
    userEvent.type(zipInput, '99999')
    userEvent.click(subBtn)
    const successMsg = screen.getByTestId('successMessage')
    expect(successMsg).toBeVisible()
});
