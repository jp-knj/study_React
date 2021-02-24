import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

// Setup react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the App component.
 * @function setup
 * @return {ShallowWrapper}
 * */

const setup = () => shallow(<App />);

/**
 * Factory function to find a data-test attrude for the App component.
 * @function findByTestAttr
 * @return {appComponent}
 * */

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increament-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("countenr starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe(0);
});

test("clicking on button incremeants counter display", () => {

});
