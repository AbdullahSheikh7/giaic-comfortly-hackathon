import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

type Props = {
  name: string;
  tag?: string;
  imageUrl: string;
  oldPrice?: string;
  price: string;
  tagColor?: string;
};

const Catalog = ({ name, tag, imageUrl, oldPrice, price, tagColor }: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden cursor-pointer">
      {tag && (
        <span
          className={`absolute top-2 left-2 px-2 py-1 rounded ${tagColor} text-white`}
        >
          {tag}
        </span>
      )}
      <Image
        alt="ecommerce"
        className="object-cover object-center rounded-lg"
        src={imageUrl}
        height={280}
        width={280}
      />
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] text-primary">{name}</h2>
          <div>
            <p className={`flex text-primary ${oldPrice ? "gap-2" : ""}`}>
              <span className="font-bold">{price}</span>
              {oldPrice && (
                <span className="text-gray-500 line-through text-[14px] text-gray">
                  {oldPrice}
                </span>
              )}
            </p>
          </div>
        </div>
        <button className="w-[50px] h-[50px] p-2 hover:bg-secondary rounded-md hover:text-white text-2xl grid place-items-center">
          <span>
            <IoCartOutline />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Catalog;
