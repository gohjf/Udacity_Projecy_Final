import ErrorPage from '../components/ErrorPage';
import { render } from '@testing-library/react';
import * as React from "react";
import '@testing-library/jest-dom'

describe("ErrorPage", () => {
    it("will match snapshot", () => {
        var Component = render(<ErrorPage />);
        expect(Component).toMatchSnapshot();
    });
})

describe('ErrorPage', () => {
    it('will have all expected fields', () => {
        var Component = render(<ErrorPage />);

        var pageNotFound = Component.getByText("Page Not Found");

        expect(pageNotFound).toBeInTheDocument();;
    })
}) 