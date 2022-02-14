import React from "react";
import PropTypes from 'prop-types'
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import closeIcon from "../assets/close-icon.png";
import { NotificationItemShape } from "./NotificationItemShape";

const Notifications = ({ displayDrawer = false, listNotifications = [] }) => {
  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      {
        displayDrawer &&
        <div className="Notifications">
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: 20,
            }}
            aria-label="close"
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {
              listNotifications.length > 0
                ? listNotifications.map(notification =>
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                  />)
                : <NotificationItem value="No new notification for now" />
            }
          </ul>
        </div>
      }

    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;
