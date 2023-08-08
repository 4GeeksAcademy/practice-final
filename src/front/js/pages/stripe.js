{/*import React, { useState, useEffect } from "react";
import "../../styles/stripe.css";
import iconImageUrl from "../../img/icon.png";

export const Stripe = () => (
  <section>
    <div className="product">
      <img
        src={iconImageUrl}
        alt="A dog icon"
      />
      <div className="description">
      <h3>Book a WE-Time session</h3>
      <h5>€5.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("You have made the payment! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Payment canceled -- continue browsing the dogs and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}
*/}