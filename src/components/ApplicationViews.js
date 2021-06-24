import React from "react"
import { Route } from "react-router-dom"
import { BarberProvider } from "./barber/BarberProvider.js"
import { BarberList } from "./barber/BarberList.js"
import { ServiceProvider } from "./service/ServiceProvider.js"
import { ServiceList } from "./service/ServiceList.js"
import { WaitlistProvider } from "./waitlist/WaitlistProvider.js"
import { ConfirmationWaitlist } from "./confirmation/ConfirmationWaitlist.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { MyCalendar } from "./calendar/Calendar.js"
import { AppointmentProvider } from "./appointment/AppointmentProvider.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <BarberProvider>
                <WaitlistProvider>
                <Route exact path="/waitlist">
                    <BarberList />
                </Route>
                <AppointmentProvider>
                    <Route exact path="/appointment/new">
                        <MyCalendar />
                    </Route>
                </AppointmentProvider>
                <ServiceProvider>
                    <Route exact path="/services/:barberId">
                        <ServiceList />
                    </Route>
                    <CustomerProvider>
                    <Route exact path="/confirmation">
                        <ConfirmationWaitlist />
                    </Route>
                    </CustomerProvider>
                </ServiceProvider>
                </WaitlistProvider>
            </BarberProvider>
        </main>
    </>
}