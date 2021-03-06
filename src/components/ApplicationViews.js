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
import { AppointmentForm } from "./appointment/AppointmentForm.js"
import { Home } from "./home/Home.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <BarberProvider>
                <WaitlistProvider>
                <ServiceProvider>
                        <AppointmentProvider>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/waitlist">
                                <BarberList />
                            </Route>
                            <Route exact path="/barbers">
                                <BarberList />
                            </Route>
                            <Route exact path="/appointment">
                                <MyCalendar />
                            <AppointmentForm />
                            </Route>
                        </AppointmentProvider>
                        <Route exact path="/waitlist/services/:barberId">
                            <ServiceList />
                        </Route>
                        <Route exact path="/services">
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