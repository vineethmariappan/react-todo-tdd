import Todo from "./Todo";
import {render} from "@testing-library/react";
import React from 'react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom';
configure({ adapter: new Adapter() });
describe("Testing the HTML element rendering",()=>{
    it("should render checkbox",()=>{
        const {getByTestId} = render(<Todo/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const checkbox = getByTestId("checkbox");
        expect(checkbox).toBeVisible();
    });
    it("should render edit button",()=>{
        const {getByTestId} = render(<Todo/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const edit = getByTestId("edit");
        expect(edit).toBeVisible();
    });
    it("should render delete button",()=>{
        const {getByTestId} = render(<Todo/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const deleteButton = getByTestId("delete");
        expect(deleteButton).toBeVisible();
    });
});
