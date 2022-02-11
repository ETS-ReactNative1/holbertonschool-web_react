import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe('<Footer /> Test', () => {

  test("Component renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('Components render the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.text()).toContain('Copyright')
  })
})