import React from 'react'
import Calendar from '../../components/Calendar'



const Timesheet = props => {
  
  return (
    <React.Fragment>
      <Calendar createEvent={console.log}></Calendar>
    </React.Fragment>
  )
}

export default Timesheet