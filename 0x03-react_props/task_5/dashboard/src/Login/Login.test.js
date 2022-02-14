import React from "react";
import { shallow } from 'enzyme'
import Login from "./Login";

describe('<Login /> Test', () => {

  test("Component renders without crashing", () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.exists()).toEqual(true);
  });

  test('Components render two inputs and two label', () => {
    const wrapper = shallow(<Login />)
    wrapper.update();
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  })
})