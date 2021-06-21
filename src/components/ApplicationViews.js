import React from "react"
import { Route } from "react-router-dom"
import { BarberProvider } from "./barber/BarberProvider.js"
import { BarberList } from "./barber/BarberList.js"
import { ServiceProvider } from "./service/ServiceProvider.js"
import { ServiceList } from "./service/ServiceList.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <BarberProvider>
                <Route exact path="/waitlist">
                    <BarberList />
                </Route>
                <Route exact path="/appointment/new">
                    <BarberList />
                </Route>
            </BarberProvider>
            <ServiceProvider>
                <Route exact path="/services">
                    <ServiceList />
                </Route>
            </ServiceProvider>
        </main>
    </>
}