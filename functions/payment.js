require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET);

exports.handler = async function (e, c) {
  if (e.body) {
    const { cart, fee, totalAmount } = JSON.parse(e.body);

    const calculateCheckout = () => {
      return fee + totalAmount;
    };
    try {
      const pyment = await stripe.paymentIntents.create({
        amount: calculateCheckout(),
        currency: "usd",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          clentSecret: pyment.client_secret,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "success",
  };
};
