/*const { default: Stripe } = require("stripe")(process.env.STRIPE_KEY);
//('sk_test_51LxmfVEDwm0WNe7EQXs5bYBWw5TXtvfo0ZP4jx1RTG5jQXsox7qnBJPXayNHqKVWvbtfrh5OkJTOELAIo1x2lU8K00o7u0j2GK')

const router = require("express").Router();

router.post("/payment", (req, res) => {
  Stripe.ChargesResource.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "gbp",
    },
    (StripeErr, StripeRes) => {
      if (stripeErr) {
        res.status(500).json(StripeErr);
      } else {
        res.status(200).json(StripeRes);
      }
    }
  );
});

module.exports = router;*/
const stripe = require("stripe")(
  "sk_test_51LxmfVEDwm0WNe7EQXs5bYBWw5TXtvfo0ZP4jx1RTG5jQXsox7qnBJPXayNHqKVWvbtfrh5OkJTOELAIo1x2lU8K00o7u0j2GK"
);
const router = require("express").Router();

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "gbp",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
