import React, { useState } from "react"

export const CustomerContext = React.createContext()

export const CustomerProvider = (props) => {
    const [ customers, setCustomers ] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8000/customers", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setCustomers)
    }


    return (
        <CustomerContext.Provider value={{ customers, getCustomers }} >
            { props.children }
        </CustomerContext.Provider>
    )
}