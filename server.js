const stripe = require('stripe')('sk_test_51N7udjKM0Vmt4Z7qDQgUvjyoDzJs0UcBxuGTTApWQqmEdU4DTVOAppRo2X61gvS2AnKWNh7IFfu2v4JeoyDx52QZ00auGXb1JT');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4243';
app
.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1NCb4zKM0Vmt4Z7qU8gV7JGT',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4243, () => console.log('Running on port 4243'));