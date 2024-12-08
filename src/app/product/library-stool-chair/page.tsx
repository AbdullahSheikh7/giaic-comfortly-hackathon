import FeaturedCatalog from "@/components/FeaturedCatalog";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="text-gray-600 body-font overflow-hidden max-w-screen-xl m-auto md:px-20 px-2">
      <div className="max-md:flex-col max-md:items-center py-24 mx-auto flex justify-between gap-8">
        <Image
          alt="ecommerce"
          width={600}
          height={600}
          className="object-cover object-center rounded-lg md:w-1/2"
          src="/products/product-2.jpeg"
        />
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-gray-900 text-[60px] title-font font-bold mb-1 text-primary">
            Library Stool Chair
          </h1>

          <span className="text-[14px] p-2 bg-secondary mr-auto text-white rounded-full title-font font-medium text-gray-900">
            $20.00 USD
          </span>

          <hr />

          <p className="leading-relaxed text-[16px] text-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, dolores. Libero unde cum, dignissimos dolorum aliquid
            eaque accusantium quaerat sed?
          </p>

          <button className="flex items-center gap-2 mr-auto text-white bg-secondary border-0 py-4 px-8 text-[16px] focus:outline-none rounded-lg">
            <span>
              <IoCartOutline />
            </span>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-[28px] mb-4 font-bold">Featured Products</h1>
          <p className="underline text-[18px] font-bold">View all</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <FeaturedCatalog
            name="Library Stool Chair"
            imageUrl="/products/product-7.jpeg"
            price="$20"
          />

          <FeaturedCatalog
            name="Library Stool Chair"
            imageUrl="/products/product-8.jpeg"
            price="$20"
          />

          <FeaturedCatalog
            name="Library Stool Chair"
            imageUrl="/products/product-9.jpeg"
            price="$20"
          />

          <FeaturedCatalog
            name="Library Stool Chair"
            imageUrl="/products/product-5.jpeg"
            price="$20"
          />

          <FeaturedCatalog
            name="Library Stool Chair"
            imageUrl="/products/product-3.jpeg"
            price="$20"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
