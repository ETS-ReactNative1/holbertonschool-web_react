import React from 'react'
import propTypes from 'prop-types'

const NotificationItem = ({ type = 'default', value, html }) => {
  return (
    value
      ? <li data-notification-type={type}>{value}</li>
      : <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  )
}

NotificationItem.propTypes = {
  html: propTypes.shape({
    __html: propTypes.string
  }),
  type: propTypes.string,
  value: propTypes.string
}

export default NotificationItem