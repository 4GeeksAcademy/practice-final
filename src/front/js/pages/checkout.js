import React, { useState, useEffect } from "react";
// import "./App.css";

export const ProductDisplay = () => (
  <div className="container">
    <section className="d-flex">
    <div className="product">
      <img
        src="https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhbmslMjB5b3UlMjBkb2d8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        width="300"  height="400" alt="dog image"
      />
      
    </div>
    <div className="p-5">
      <div className="description">
        <h3>WE-Time Session</h3>
        <h5>€ 5.00</h5>
      </div>
      <form action={process.env.BACKEND_URL+'/api/create-checkout-session'}  method="POST">
        <button type="submit" className="btn btn-primary">
          Donate
        </button>
      </form>
    </div>
  </section>
  </div>
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
      setMessage("Payment successful! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Payment declined -- please try again."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}

