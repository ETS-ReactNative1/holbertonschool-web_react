import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {

  test("App renders wtesthout crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  test("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  test("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  test("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  test("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  test("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  test('CourseList is not displayed', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  })

  describe('isLoggedIn checks when true', () => {
    test('Login is not displayed', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      wrapper.update();
      expect(wrapper.find("Login")).toHaveLength(0);
    })


    test('CourseList is displayed', () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      wrapper.update();
      expect(wrapper.find("CourseList")).toHaveLength(1);
    })
  })

});
