import CartProductCatalog from "@/components/CartProductCatalog";
import Image from "next/image";

const page = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>
          <div className="space-y-6">
            <CartProductCatalog
              color="Ashen Slate/Cobal Bliss"
              imgAlt="Orange Library Stool Chair"
              imgSrc="/products/product-3.jpeg"
              mrp="$99"
              name="Library Stool Chair"
              quantity="1"
              size="L"
            />
            <CartProductCatalog
              color="Ashen Slate/Cobal Bliss"
              imgAlt="Gray Library Stool Chair"
              imgSrc="/products/product-5.jpeg"
              mrp="$99"
              name="Library Stool Chair"
              quantity="1"
              size="L"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-6">Summary</h2>
          <div className="border rounded-lg p-6 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Delivery & Handling</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>$198.00</span>
            </div>
            <button className="w-full text-white rounded-full bg-secondary p-5">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
