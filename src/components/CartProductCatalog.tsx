import Image from "next/image";
import { IoHeartOutline, IoTrashOutline } from "react-icons/io5";

type Props = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  color: string;
  size: string;
  quantity: string;
  mrp: string;
};

const CartProductCatalog = ({
  imgSrc,
  imgAlt,
  name,
  color,
  size,
  quantity,
  mrp,
}: Props) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={150}
        height={150}
        className="rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{color}</p>
            <div className="mt-2 space-y-1 flex sm:gap-3 sm:items-center flex-col sm:flex-row">
              <p className="text-sm">Size: {size}</p>
              <p className="text-sm">Quantity: {quantity}</p>
            </div>
          </div>
          <p className="font-medium mt-5 md:mt-0">MRP: {mrp}</p>
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
  );
};

export default CartProductCatalog;
