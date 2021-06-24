import React, { useState } from "react"

export const AppointmentContext = React.createContext()

export const AppointmentProvider = (props) => {
    const [ appointments, setAppointments ] = useState([])

    const getAppointments = () => {
        return fetch("http://localhost:8000/appointments", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setAppointments)
    }


    // For getting Appointments by users and provide a ticket #
    const getAppointmentsByUser = () => {
        return fetch("http://127.0.0.1:8000/appointments?customer=1", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setAppointments)
    }

    const createAppointment = (appointment) => {
        return fetch("http://localhost:8000/appointments", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
         })
            .then(getAppointments)
    }

    return (
        <AppointmentContext.Provider value={{ appointments, getAppointments, createAppointment }} >
            { props.children }
        </AppointmentContext.Provider>
    )
}