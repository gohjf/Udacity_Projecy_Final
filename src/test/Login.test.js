import Login from '../components/Login';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store.js";
import * as React from "react";
import '@testing-library/jest-dom'

describe('Login', () => {
    it('will match snapshot', () => {
        var Component = render(
            <Provider store={store}>
            <Router>
              <Login />
            </Router>
          </Provider>);
    
    expect(Component).toMatchSnapshot();
    })
}) 

describe('Login', () => {
    it('will have all expected fields', () => {
        var Component = render(
            <Provider store={store}>
            <Router>
              <Login />
            </Router>
          </Provider>);

        var loginInput = Component.getByTestId('username_login');
        var passwordInput = Component.getByTestId('Password_login');
        var SubmitButton = Component.getByTestId('Button_login');

        expect(loginInput).toBeInTheDocument();;
        expect(passwordInput).toBeInTheDocument();
        expect(SubmitButton).toBeInTheDocument();
    })
}) 