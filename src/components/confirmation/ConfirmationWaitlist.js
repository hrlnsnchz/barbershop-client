import React, {useContext, useEffect} from "react"
import { CustomerContext } from "../customer/CustomerProvider"



export const ConfirmationWaitlist = (props) => {
    const { customers, getCustomers } = useContext(CustomerContext)

        useEffect(() => {
            getCustomers()
        }, [])
    return (
        <>
            <article className="confirmation">
                <header className="confirmation__header">
                    <h1>Thank You, {customers.user?.first_name}</h1>
                </header>
                <div>We have successfully added you to our waitlist.</div>
            </article >
        </>
    )
}