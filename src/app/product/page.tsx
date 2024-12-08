import Catalog from "@/components/Catalog";
import Link from "next/link";

const page = () => {
  return (
    <section className="container px-5 py-24 mx-auto max-w-screen-xl">
      <h1 className="text-[32px] mb-4 font-semibold">Our Products</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <Catalog
          tag="New"
          name="Library Stool Chair"
          imageUrl="/products/product-1.jpeg"
          price="$20"
          tagColor="bg-green-500"
        />

        <Link href="/product/library-stool-chair">
          <Catalog
            tag="Sales"
            tagColor="bg-orange-500"
            name="Library Stool Chair"
            imageUrl="/products/product-2.jpeg"
            price="$20"
            oldPrice="$30"
          />
        </Link>

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-3.jpeg"
          price="$20"
        />

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-4.jpeg"
          price="$20"
        />

        <Catalog
          tag="New"
          name="Library Stool Chair"
          imageUrl="/products/product-5.jpeg"
          price="$20"
          tagColor="bg-green-500"
        />

        <Catalog
          tag="Sales"
          tagColor="bg-orange-500"
          name="Library Stool Chair"
          imageUrl="/products/product-6.jpeg"
          price="$20"
          oldPrice="$30"
        />

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-7.jpeg"
          price="$20"
        />

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-8.jpeg"
          price="$20"
        />

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-9.jpeg"
          price="$20"
        />

        <Link href="/product/library-stool-chair">
          <Catalog
            name="Library Stool Chair"
            imageUrl="/products/product-10.jpeg"
            price="$20"
          />
        </Link>

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-11.jpeg"
          price="$20"
        />

        <Catalog
          name="Library Stool Chair"
          imageUrl="/products/product-12.jpeg"
          price="$20"
        />
      </div>
    </section>
  );
};

export default page;
