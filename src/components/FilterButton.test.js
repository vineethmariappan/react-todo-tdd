import FilterButton from "./FilterButton";
import {render} from "@testing-library/react";
import React from 'react';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom';
configure({ adapter: new Adapter() });
describe("Testing the HTML element rendering",()=>{
    it("should render filter button",()=>{
        const {getByTestId} = render(<FilterButton name="All" isPressed={false} />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const filterButton = getByTestId("filterButton");
        expect(filterButton).toBeVisible();
    });
    it("should render span elements",()=>{
        const {getAllByTestId} = render(<FilterButton name="All" isPressed={false} />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const filterSpan = getAllByTestId("filterSpan");
        expect(filterSpan).toHaveLength(3);
    });
});