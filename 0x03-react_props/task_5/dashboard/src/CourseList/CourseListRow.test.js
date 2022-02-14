import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('<CourseListRow /> Test', () => {

  test("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell='test' />);
    expect(wrapper.exists()).toEqual(true);

    expect(wrapper.find('th')).toHaveLength(1)
    expect(wrapper.find('th').prop('colSpan')).toBe(2)
  });

  test("renders two cells when textSecondCell is present", () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell='test' textSecondCell='test2' />);
    expect(wrapper.find('th')).toHaveLength(2)
  });

})