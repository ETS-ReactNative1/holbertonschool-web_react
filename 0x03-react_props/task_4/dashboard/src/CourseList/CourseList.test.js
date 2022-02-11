import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('<CourseList /> Test', () => {

  test("Renders component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  })
  test('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5)
  })
})