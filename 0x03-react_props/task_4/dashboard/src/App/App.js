import React from "react";
import PropTypes from 'prop-types'
import "./App.css";
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn = false }) {

  return (
    <>
      <div className="app-header">
        <Header />
        <div className="root-notifications">
          <Notifications />
        </div>
      </div>
      {
        !isLoggedIn
          ? <Login />
          : <CourseList />
      }
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
