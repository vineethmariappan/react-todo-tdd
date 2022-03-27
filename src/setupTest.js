import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
import pkg from 'jest-watcher';
const { PatternPrompt, printPatternCaret, printRestoredPatternCaret } = pkg;
configure({ adapter: new Adapter() });
