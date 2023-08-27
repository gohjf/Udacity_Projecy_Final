import App from '../components/App';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store.js";
import * as React from "react";
import '@testing-library/jest-dom'  

describe('App', () => {
    it('will match snapshot', () => {
        var Component = render(
            <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>);
    
    expect(Component).toMatchSnapshot();
    })
}) 

describe('App', () => {
    it('will have all expected fields', () => {
        var Component = render(
            <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>);
    
    var Login = Component.findByText('Login');

    expect("/Login").toBeTruthy();
    })
}) 
