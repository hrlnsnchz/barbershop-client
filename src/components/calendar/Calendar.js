import React, { useContext, useEffect } from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { AppointmentContext } from "../appointment/AppointmentProvider"
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./events";


const localizer = momentLocalizer(moment)

export const MyCalendar = props => {
    const { appointments, getAppointments } = useContext(AppointmentContext)
    console.log('appointments: ', appointments)

    useEffect(() => {
        getAppointments()
    }, [])
    return(
        <>
            <div>
                <Calendar
                localizer={localizer}
                events={appointments}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100vh" }}
                />
            </div>
        </>
    )
}