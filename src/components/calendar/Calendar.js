import React, { useContext, useEffect } from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { AppointmentContext } from "../appointment/AppointmentProvider"
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment)

export const MyCalendar = props => {
    const { appointments, getAppointments } = useContext(AppointmentContext)

    const events = appointments.map(a => {
        a.start = new Date(a.start)
        a.end = new Date(a.end)
        return a
    })

    useEffect(() => {
        getAppointments()
    }, [])
    
    return(
        <>
            <div>
                <Calendar
                events={events}
                startAccessor="start"
                endAccessor="end"
                localizer={localizer}
                style={{ height: 500 }}
                />
            </div>
        </>
    )
}