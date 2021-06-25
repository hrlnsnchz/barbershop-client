import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { BarberContext } from "../barber/BarberProvider.js"
import { ServiceContext } from "../service/ServiceProvider.js"
import { AppointmentContext } from "./AppointmentProvider.js"
import { Button } from "react-bootstrap"


export const AppointmentForm = () => {
    const history = useHistory()
    const { getBarbers, barbers } = useContext(BarberContext)
    const { getServices, services } = useContext(ServiceContext)
    const { createAppointment } = useContext(AppointmentContext)

    const [currentAppointment, setCurrentAppointment] = useState({
        // description: "",
        barber: 0,
        start: 0,
        // end: 0,
        appointment_services: []
    })

    useEffect(() => {
        getBarbers()
        .then(getServices())
    }, [])

    const changeAppointmentBarberState = (event) => {
        const newAppointmentState = { ...currentAppointment }
        newAppointmentState.barber = event.target.value
        setCurrentAppointment(newAppointmentState)
    }

    const changeAppointmentServiceState = (event) => {
        const newAppointmentState = { ...currentAppointment }
        newAppointmentState.appointment_services = event.target.value
        setCurrentAppointment(newAppointmentState)
    }

    // const changeAppointmentDescriptionState = (event) => {
    //     const newAppointmentState = { ...currentAppointment }
    //     newAppointmentState.description = event.target.value
    //     setCurrentAppointment(newAppointmentState)
    // }

    const changeAppointmentStartState = (event) => {
        const newAppointmentState = { ...currentAppointment }
        newAppointmentState.start = event.target.value
        setCurrentAppointment(newAppointmentState)
    }

    // const changeAppointmentTimeState = (event) => {
    //     const newAppointmentState = { ...currentAppointment }
    //     newAppointmentState.time = event.target.value
    //     setCurrentAppointment(newAppointmentState)
    // }


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="barber">Barber: </label>
                    <select name="barber" className="form-control"
                        value={ currentAppointment.barber }
                        onChange={ changeAppointmentBarberState }>
                        <option value="0">Select a barber...</option>
                        {
                            barbers?.map(b => (
                            <option key={b.id} value={b.id}>
                                {b.user.first_name}
                            </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="appointment_services">Service: </label>
                    <select name="appointment_services" className="form-control"
                        value={ currentAppointment.appointment_services }
                        onChange={ changeAppointmentServiceState }>
                        <option value="0">Select a service...</option>
                        {
                            services?.map(s => (
                            <option key={s.id} value={s.id}>
                                {s.label} {" $"} {s.price}
                            </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="start_date">Start Date: </label>
                    <input type="datetime-local" name="startDate" required className="form-control"
                        value={currentAppointment.start}
                        onChange={changeAppointmentStartState}
                    />
                </div>
            </fieldset>


            <Button variant="light" type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const appointment = {
                        barber: parseInt(currentAppointment.barber),
                        // title: currentAppointment.title,
                        start: currentAppointment.start,
                        end: currentAppointment.start,
                        appointment_services: currentAppointment.appointment_services
                    }
                    console.log('appointment: ', appointment);

                    // Send POST request to your API
                    createAppointment(appointment)
                        .then(() => history.push("/appointments"))
                }}
                className="btn btn-primary">Confirm Appointment</Button>
        </form>
    )
}