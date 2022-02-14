import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('<CourseList /> Test', () => {

  test("Renders component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  })

  test("Renders component with empty array", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toEqual(true);
  })

  test("Component renders correctly when you pass a list of courses", () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(2 + listCourses.length);

    const row = wrapper.find('CourseListRow')

    expect(row.at(2).prop("textFirstCell")).toEqual("ES6");
    expect(row.at(2).prop("textSecondCell")).toEqual(60);

    expect(row.at(3).prop("textFirstCell")).toEqual("Webpack");
    expect(row.at(3).prop("textSecondCell")).toEqual(20);

    expect(row.at(4).prop("textFirstCell")).toEqual("React");
    expect(row.at(4).prop("textSecondCell")).toEqual(40);

  })
})