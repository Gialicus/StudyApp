import { Fragment, useEffect, useState } from "react";
import moment from 'moment'
import buildCalendar from "./utils/buildCalendar";
import styles from '../styles/Calendar.module.scss'
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';

const Calendar = (props) => {

    const [value, setValue] = useState(moment());
    const [calendar, setCalendar] = useState([]);
    const [visible, setVisible] = useState(false);
    const [basetime, setBaseTime] = useState(8);
    const [extratime, setExtratime] = useState(0);
    const [dayoff, setDayoff] = useState(0);
    const [permission, setPermission] = useState(0);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

/**
 * Utils Function
 */
    const isSelected = day => {
        return value.isSame(day, 'day')
    }
    const isToday = day => {
        return day.isSame(new Date(), 'day')
    }
    const notInCurrentMonth = day => {
        return !value.isSame(day, 'month')
    }
    const isWeekend = day => {
        if (day.day() === 0) return true
        if (day.day() === 6) return true
        return false
    }
    const buildDayStyle = (day) => {
        if (isToday(day)) return styles.today;
        if (isSelected(day)) return styles.select;
        if (notInCurrentMonth(day)) return styles.notcurrent;
        if (isWeekend(day)) return styles.weekend;
        return styles.daystyle;
    }
    const getMonthName = () => value.format('MMM')
    const getYearInNumber = () => value.format('YYYY')
    const addMonth = () => setValue(value.add(1,'month').clone())
    const subMonth = () => setValue(value.subtract(1,'month').clone())

    const createEvent = () => {
        const dailyReport = {
            date: value,
            basetime,
            extratime,
            dayoff,
            permission
        }
        setEvents([...events, dailyReport])
        props.createEvent(dailyReport)
    }
/**
 * Template Const
 */
    const header = (
        <div className={`p-grid ${styles.header}`}>
            <div className="p-col p-m-2"><Button icon="pi pi-chevron-left" onClick={()=>subMonth()} /></div>
            <div className={`p-col p-m-2 ${styles.selectedmonth}`}>{getMonthName()} {getYearInNumber()}</div>
            <div className="p-col p-m-2 p-text-right"><Button icon="pi pi-chevron-right" onClick={()=>addMonth()} /></div>
        </div>
    )

    const dayTemplate = (
        <div className={`p-grid p-text-center ${styles.dayhead}`}>
            <div className="p-col p-m-2">Sunday</div>
            <div className="p-col p-m-2">Monday</div>
            <div className="p-col p-m-2">Tuesday</div>
            <div className="p-col p-m-2">Wednesday</div>
            <div className="p-col p-m-2">Thursday</div>
            <div className="p-col p-m-2">Friday</div>
            <div className="p-col p-m-2">Saturday</div>
        </div>
    )

    return (
        <Fragment>
            {header}
            {dayTemplate}
            {calendar.map((week, index) => {
                return (
                    <div
                        className="p-grid p-justify-between"
                        style={{ margin: '2px' }}
                        key={index}
                    >
                        {week.map((day, i) => {
                            return (
                                <div
                                    className={`p-col ${buildDayStyle(day)}`}
                                    key={i}
                                    onClick={() => {
                                        setVisible(true)
                                        setValue(day)
                                    }}
                                >
                                    {day.format('D').toString()}
                                    <div>
                                        {events.map( (event,index) => {
                                            return day.isSame(event.date, 'day') ? <Button icon="pi pi-times" className="p-button-rounded p-button-primary" /> : null
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <Dialog header="Header" visible={visible} onHide={() => setVisible(false)}>
                <div className="p-grid p-fluid p-formgrid">
                    <div className="p-col p-field">
                        <label htmlFor="basetime">Base Time</label>
                        <InputNumber id="basetime" value={basetime} onValueChange={(e) => setBaseTime(e.value)} />
                    </div>
                    <div className="p-col p-field">
                        <label htmlFor="extratime">Extra Time</label>
                        <InputNumber id="extratime" value={extratime} onValueChange={(e) => setExtratime(e.value)} />
                    </div>
                    <div className="p-col p-field">
                        <label htmlFor="dayoff">Dayoff</label>
                        <InputNumber id="dayoff" value={dayoff} onValueChange={(e) => setDayoff(e.value)} />
                    </div>
                    <div className="p-col p-field">
                        <label htmlFor="permission">Permission</label>
                        <InputNumber id="permission" value={permission} onValueChange={(e) => setPermission(e.value)} />
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Button label="send" onClick={createEvent} />
                    </div>
                </div>
            </Dialog>
        </Fragment>
    )
}

export default Calendar;