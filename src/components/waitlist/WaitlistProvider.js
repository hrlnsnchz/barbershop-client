import React, { useState } from "react"

export const WaitlistContext = React.createContext()

export const WaitlistProvider = (props) => {
    const [ waitlists, setWaitlists ] = useState([])

    const getWaitlists = () => {
        return fetch("http://localhost:8000/waitlists", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setWaitlists)
    }

    const createWaitlists = (waitlist) => {
        return fetch("http://localhost:8000/waitlists", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(waitlist)
         })
            .then(getWaitlists)
    }

    return (
        <WaitlistContext.Provider value={{ waitlists, getWaitlists, createWaitlists }} >
            { props.children }
        </WaitlistContext.Provider>
    )
}