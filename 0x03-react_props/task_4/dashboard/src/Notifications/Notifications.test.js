import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";

describe('<Notifications />', () => {
  test('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  test('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  test('Notifications renders the text "Here is the list of notifications"', () => {
    const text = 'Here is the list of notifications';
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find('.Notifications p').text()).toEqual(text);
  });

  test('The first NotificationItem element renders the right html', () => {
    const wrapper = shallow(<Notifications />)
    wrapper.update()
    expect(wrapper.find('NotificationItem').first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>')
  })
});
