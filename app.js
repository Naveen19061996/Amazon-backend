const express = require("express");
const app = express();
const cors = require('cors');
const stripe = require("stripe")("place your scecret key here");

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello it works yeahhhh'))
app.get('/aju', (req, res) => res.status(200).send('اه شتةع'))
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment request recieved yeeee', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    })
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
}
)

module.exports = app;
