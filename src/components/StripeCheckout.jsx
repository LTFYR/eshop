import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/price";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const StripeCheckout = () => {
  const { cart, fee, cartItems, totalAmount, clearBasket } = useCartContext();
  const { logedUser } = useUserContext();
  const navigate = useNavigate();

  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState("");
  const [disable, setDisable] = useState(true);
  const [clientKey, setClientKey] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const myStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial,sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        ".netlify/functions/payment",
        JSON.stringify({ cart, fee, totalAmount })
      );
      setClientKey(data.clentSecret);
    } catch (error) {
      return {
        error: error.response,
      };
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const paymentProcess = await stripe.confirmCardPayment(clientKey, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (paymentProcess.error) {
      setError(paymentProcess.error.message);
      setLoading(false);
    } else {
      setError(null);
      setLoading(false);
      setSucces(true);
      setTimeout(() => {
        clearBasket();
        navigate("/");
      }, 10000);
    }
  };

  return (
    <div>
      {succes ? (
        <article>
          <h4>Thank you!</h4>
          <h4>Your payment is done</h4>
          <h4>You're redirecting to home page now</h4>
        </article>
      ) : (
        <article>
          <h4>Hello,{logedUser && logedUser.name}</h4>
          <p>Your order total is {formatPrice(fee + totalAmount)}</p>
          <p>Your test card number : 4242 4242 4242 4242</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          options={myStyle}
          id="card-element"
          onChange={handleChange}
        />
        <button disabled={loading || disable || succes} id="submit">
          <span id="button-text">
            {loading ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <p className={succes ? "result-message" : "result-message hidden"}>
          Payment is done,check your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard
          </a>
          Refresh page to pay again
        </p>
      </form>
    </div>
  );
};

export default StripeCheckout;
