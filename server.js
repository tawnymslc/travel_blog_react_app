const stripe = require('stripe')('sk_test_51N7udjKM0Vmt4Z7qDQgUvjyoDzJs0UcBxuGTTApWQqmEdU4DTVOAppRo2X61gvS2AnKWNh7IFfu2v4JeoyDx52QZ00auGXb1JT');
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res, next) => {
  const {amount, id} = req.body;
  const intent = stripe.paymentIntents.create({
    amount,
    currency: "usd",
    description: "Domain Purchase",
    payment_method: id,
    confirm: true
  })
  .then(payment => {
    console.log("Payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
      client_secret: intent.client_secret
    });
  })
  .catch(err => next(err));
});

app.listen(4243, () => console.log('Running on port 4243'));