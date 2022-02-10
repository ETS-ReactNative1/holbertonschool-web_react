import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe('<Header /> Test', () => {

  test("Component renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('Components render img and h1 tag', () => {
    const wrapper = shallow(<Header />)
    wrapper.update()
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("h1")).toHaveLength(1);
  })

})