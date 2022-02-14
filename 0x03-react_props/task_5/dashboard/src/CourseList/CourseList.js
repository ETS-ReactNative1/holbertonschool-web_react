import React from 'react'
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow'
import { CourseShape } from './CourseShape'
import './CourseList.css'

const CourseList = ({ listCourses = [] }) => {

  return (
    <div className='course-list'>
      <table id='CourseList'>
        <thead>
          <CourseListRow textFirstCell="Available courses" and isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {
            listCourses.length > 0
              ? listCourses.map(course =>
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                />)
              : <CourseListRow
                textFirstCell="No course available yet"
              />
          }

        </tbody>
      </table>
    </div>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList