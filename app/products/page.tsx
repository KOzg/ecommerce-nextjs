import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  return <div>Products page</div>;
}
