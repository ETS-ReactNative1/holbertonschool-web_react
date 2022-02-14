import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";

describe('<Notifications />', () => {
  test('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('The first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const listItems = wrapper.find("NotificationItem");
    expect(listItems).toBeDefined();
    expect(listItems.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  })

  test('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  test('Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  test('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.update();
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  test('Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.update();
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });
});
