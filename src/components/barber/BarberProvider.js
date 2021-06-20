import React, { useState } from "react"

export const BarberContext = React.createContext()

export const BarberProvider = (props) => {
    const [ barbers, setBarbers ] = useState([])

    const getBarbers = () => {
        return fetch("http://localhost:8000/barbers", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setBarbers)
    }


    return (
        <BarberContext.Provider value={{ barbers, getBarbers }} >
            { props.children }
        </BarberContext.Provider>
    )
}