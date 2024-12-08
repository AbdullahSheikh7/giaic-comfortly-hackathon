import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-lg">
              <Image
                src="/products/product-3.jpeg"
                alt="Orange Library Stool Chair"
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Library Stool Chair</h3>
                    <p className="text-sm text-muted-foreground">
                      Ashen Slate/Cobalt Bliss
                    </p>
                    <div className="mt-2 space-y-1 flex gap-3 items-center">
                      <p className="text-sm">Size: L</p>
                      <p className="text-sm">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">MRP: $99</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button>
                    <IoHeartOutline />
                  </button>
                  <button>
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-lg">
              <Image
                src="/products/product-5.jpeg"
                alt="Gray Library Stool Chair"
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Library Stool Chair</h3>
                    <p className="text-sm text-muted-foreground">
                      Ashen Slate/Cobalt Bliss
                    </p>
                    <div className="mt-2 space-y-1 flex gap-3 items-center">
                      <p className="text-sm">Size: L</p>
                      <p className="text-sm">Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium">MRP: $99</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button>
                    <IoHeartOutline />
                  </button>
                  <button>
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            </div>
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
