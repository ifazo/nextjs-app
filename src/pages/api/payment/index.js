import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { products } = req.body;

  const line_items = products.map((product) => ({
    price_data: {
      currency: 'usd', // Set your currency here
      product_data: {
        name: product.name,
      },
      unit_amount: Math.round(parseFloat(product.price) * 100), // Stripe expects amount in cents
    },
    quantity: 1, // Adjust the quantity as needed
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
