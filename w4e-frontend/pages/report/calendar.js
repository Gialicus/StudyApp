import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Button } from 'primereact/button';


const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    const myEventsList = [
        {
            title: 'ciao',
            start: new Date(),
            end: new Date(),
        },
        {
            title: 'hello',
            start: new Date(2021,1,14),
            end: new Date(2021,1,16),
        },
    ]
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
            <Button label="add day of"></Button>
        </div>
    )
}

export default MyCalendar;