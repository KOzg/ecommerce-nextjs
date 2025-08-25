import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  // this needs try-catch
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 px-8 sm:px-16 max-w-6xl">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome To My Bad T-shirt store!
            </h2>
            <p className="text-neutral-600">
              Discover the latest terrible shirts at worst prices
            </p>
            <Button
              asChild
              variant="default"
              size="lg"
              className="rounded-full bg-black !text-white hover:bg-black/90"
            >
              <Link href="/products">Check out our shirts!</Link>
            </Button>
          </div>
          <Image
            className="rounded"
            alt="Product Hero Image"
            width={450}
            height={450}
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
