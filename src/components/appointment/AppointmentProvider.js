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