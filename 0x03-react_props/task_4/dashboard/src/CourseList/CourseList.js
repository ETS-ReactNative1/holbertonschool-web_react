import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'

const CourseList = () => {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" and isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" and isHeader={true} />
      </thead>
      <body>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" and isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" and isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" and isHeader={false} />
      </body>
    </table>
  )
}

export default CourseList