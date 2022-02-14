import { shallow } from "enzyme";
import React from "react";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";

describe('<Notifications />', () => {
  test('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

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

  test('Notifications renders without crashing with empty array', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('component renders it correctly and with the right number of NotificationItem', () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3)
  });

  test('Notifications renders  if you dont pass the listNotifications property', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('verify text message when listNotifactions is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });
});
