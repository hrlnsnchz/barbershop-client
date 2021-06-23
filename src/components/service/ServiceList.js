import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { ServiceContext } from "./ServiceProvider.js"
import { CartProvider, useCart } from "react-use-cart";
import { createWaitlist, WaitlistContext } from "../waitlist/WaitlistProvider"



export const ServiceList = (props) => {
    const { services, getServices } = useContext(ServiceContext)
    const { createWaitlists} = useContext(WaitlistContext)
    const history = useHistory()
    const barberId = useParams()
    console.log('barberId: ', parseInt(barberId.barberId));
    const { addItem, emptyCart } = useCart();

    useEffect(() => {
        getServices()
    }, [])

    // npm package below this point
    function Page() {
      
        return (
          <div>
            {services.map((s) => (
              <div key={s.id}>
                <button onClick={() => addItem(s)}>{s.label} {' $'} {s.price}</button>
              </div>
            ))}
          </div>
        );
      }
      
      function Cart() {
        const {
          isEmpty,
          totalUniqueItems,
          items,
          updateItemQuantity,
          removeItem,
        } = useCart();
        let waitlist_services = items.map(ws => {
            return ws.id
        })
        
        
        
        if (isEmpty) return <p>Select a Service</p>;
      
        return (
          <>
            <h1>Selected Services ({totalUniqueItems})</h1>
      
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.quantity} x {item.label} &mdash;
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button onClick={() => removeItem(item.id)}>&times;</button>
                </li>
              ))}
            </ul>
            <button type="submit" className="btn btn-primary waitlist"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const waitlist = {
                        barber: parseInt(barberId.barberId),
                        waitlist_services: waitlist_services,
                        is_served: false
                    }
                    console.log("waitlist:", waitlist)

                    // Send POST request to your API
                    createWaitlists(waitlist)
                        .then(() => emptyCart())
                        .then(() => history.push("/confirmation"))
                }}
                >Join Waitlist</button>
          </>
        );
      }

    return (
        <>
            <article className="services">
                <header className="services__header">
                    <h1>Available Services</h1>
                </header>
                {/* {
                    Array.isArray(services) ? services.map(service => {
                        return <section key={service.label} className="registration">
                            <button className="registration__game" onClick={() => {
                    history.push("/services")
                    }}>{service.label} {' $'}
                            {service.price}</button>
                        </section>
                    }): ''
                } */}
            </article >
            <CartProvider>
                <Page />
                <Cart />
            </CartProvider>
        </>
    )
}