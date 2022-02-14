import React from "react";
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from "../CourseList/CourseList";
import Notifications from '../Notifications/Notifications'
import { getLatestNotification } from "../utils/utils";
import "./App.css";


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

function App({ isLoggedIn = false }) {

  return (
    <>
      <div className="app-header">
        <Header />
        <div className="root-notifications">
          <Notifications listNotifications={listNotifications} />
        </div>
      </div>
      {
        !isLoggedIn
          ? <Login />
          : <CourseList listCourses={listCourses} />
      }
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
