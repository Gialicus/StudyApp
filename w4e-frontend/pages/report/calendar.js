import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import { Calendar as PrimeCalendar } from 'primereact/calendar';
import moment from 'moment'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';


const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    const defaultStartTime = new Date(year, month, day, 8, 0, 0);

    const [visible, setVisible] = useState(false);
    const [start, setStart] = useState(defaultStartTime);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [events, setEvents] = useState([])
    console.log(localizer)


    const createNewEvent = (type, color) => {
        const dateOfEvent = new Date(currentEvent.start);
        const hourOfStartEvent = start.getHours();
        const minutesOfStartEvent = start.getMinutes();
        const event = {
            title: type,
            start: dateOfEvent,
            end: dateOfEvent,
            resources: {
                time: {
                    hour: hourOfStartEvent,
                    minutes: minutesOfStartEvent
                },
                color: color
            }
        }
        setEvents([...events, event])
    }


    return (
        <div className="p-m-2">
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col">
                    <Button label="Send Report" />
                </div>
                <div className="p-field p-col">
                    <Button label="Generate Default Report" />
                </div>
            </div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={[Views.MONTH, Views.DAY]}
                selectable={true}
                onSelectSlot={(slotInfo) => {
                    setCurrentEvent(slotInfo)
                    setVisible(true)
                }}
                style={{ height: 500 }}
                dayPropGetter={day => {
                    if (day.getDay() === 0 || day.getDay() === 6) {
                        return {
                            style: {
                                backgroundColor: '#1f2d40'
                            }
                        }
                    }
                }}
                eventPropGetter={event => {
                    return {
                        style: {
                            backgroundColor: event.resources.color,
                        }
                    }
                }}
            />
            <Dialog header="Create new Event" visible={visible} style={{ width: '70vw' }} onHide={() => setVisible(false)}>
                {currentEvent ? <h3 style={{ textAlign: 'center' }}>{currentEvent.start.toLocaleDateString()}</h3> : null}
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col">
                        <p style={{ textAlign: 'center' }}>Number Of Hours</p>
                        <PrimeCalendar inline timeOnly showTime hourFormat="24" value={start} onChange={(e) => setStart(e.value)} />
                    </div>
                </div>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col">
                        <Button label="base time" onClick={() => createNewEvent('Base Time', '#FFD54F')} />
                    </div>
                    <div className="p-field p-col">
                        <Button label="extra time" onClick={() => createNewEvent('Extra Time', 'green')} />
                    </div>
                    <div className="p-field p-col">
                        <Button label="day off" onClick={() => createNewEvent('Day off', 'red')} />
                    </div>
                    <div className="p-field p-col">
                        <Button label="permission" onClick={() => createNewEvent('Permission', 'blu')} />
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default MyCalendar;