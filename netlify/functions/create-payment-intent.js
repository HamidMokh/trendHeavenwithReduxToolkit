require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY); // Check if the key is loaded
    const { amount } = JSON.parse(event.body);

    if (!amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Amount is required" }),
      };
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.error("Payment Intent Error:", error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
