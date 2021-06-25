import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom"
import { ServiceContext } from "./ServiceProvider.js"
import { CartProvider, useCart } from "react-use-cart";
import { WaitlistContext } from "../waitlist/WaitlistProvider"
import { Button } from "react-bootstrap"


export const ServiceList = (props) => {
    const { services, getServices } = useContext(ServiceContext)
    const { createWaitlists} = useContext(WaitlistContext)
    const history = useHistory()
    const barberId = useParams()


    const { addItem, emptyCart } = useCart();

    useEffect(() => {
        getServices()
    }, [])

    // npm package below this point
    function Page() {
      const { addItem } = useCart();

        return (
          <div>
            {services.map((s) => (
              <div key={s.id}>
                <Button className="btn btn-primary addItem" variant="light" onClick={() => addItem(s, 1)}>{s.label} {' $'} {s.price}</Button>
              </div>
            ))}
          </div>
        );
      }
      
      function Cart() {
        const {
          isEmpty,
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
            <h2>Selected Services</h2>
      
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.quantity} x {item.label} &mdash;
                  <Button variant="light"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <Button variant="light"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button variant="light" onClick={() => removeItem(item.id)}>&times;</Button>
                </li>
              ))}
            </ul>
            <Button type="submit" variant="light" className="btn btn-primary waitlist"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const waitlist = {
                        barber: parseInt(barberId.barberId),
                        waitlist_services: waitlist_services,
                        is_served: false
                    }

                    // Send POST request to your API
                    createWaitlists(waitlist)
                        .then(() => emptyCart())
                        .then(() => history.push("/confirmation"))
                }}
                >Join Waitlist</Button>
          </>
        );
      }

    return (
        <>
            <article className="services">
                <header className="services__header">
                    <h1>Available Services</h1>
                </header>

            </article >
            <CartProvider>
                <Page />
                <Cart />
            </CartProvider>
        </>
    )
}