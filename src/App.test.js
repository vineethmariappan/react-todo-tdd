/* eslint-disable testing-library/prefer-screen-queries */
import App from "./App";
import {render} from "@testing-library/react";
import React from 'react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom';
configure({ adapter: new Adapter() });
const TEST_DATA = [
    { id: "todo-0", name: "Test To-do", completed: true },
  ];
describe("Testing the HTML element rendering",()=>{
    it("Should have app title",()=>{
        const {getByTestId} = render(<App tasks={TEST_DATA}/>);
        const title = getByTestId("Heading");
        expect(title).toHaveTextContent("TodoMatic");
    });
  
});