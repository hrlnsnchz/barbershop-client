import React from "react"
import { Route } from "react-router-dom"
import { BarberProvider } from "./barber/BarberProvider.js"
import { BarberList } from "./barber/BarberList.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <BarberProvider>
                <Route path="/">
                    <BarberList />
                </Route>
            </BarberProvider>
        </main>
    </>
}