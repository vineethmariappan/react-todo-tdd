import Form from "./Form";
import {render} from "@testing-library/react";
import React from 'react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom';
configure({ adapter: new Adapter() });
describe("Testing the HTML element rendering",()=>{
    it("Should have Todo input form",()=>{
        const {getByTestId} = render(<Form />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const todoForm = getByTestId("TodoInputForm");
        expect(todoForm).toBeVisible();
    });
    it("Should have input field",()=>{
        const {getByTestId} = render(<Form />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const todoInput = getByTestId("todoInputField");
        expect(todoInput).toBeVisible();
    });
    it("Should have input label ",()=>{
        const {getByTestId} = render(<Form />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const inputLabel = getByTestId("inputLabel");
        expect(inputLabel).toHaveTextContent("What needs to be done?");
    });
    it("Should have add Button ",()=>{
        const {getByTestId} = render(<Form />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const addButton = getByTestId("addButton");
        expect(addButton).toBeVisible();
    });

});


