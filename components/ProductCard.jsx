import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const formatPrice = (price) => {
  const formattedPrice = parseInt(price).toLocaleString("en-US");
  return formattedPrice.replace(/,/g, ".");
};

const ProductCard = ({ data: { attributes: p, id } }) => {
  const formattedPrice = formatPrice(p.price); // Format the price with separators for thousands

  return (
<Link href={`/product/${p.slug}`}

      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    
            <a>Some text</a>

      <Image
        width={500}
        height={500}
        src={p.thumbnail.data?.attributes.url}
        alt={p.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-tektur">{p.name}</h2>
        <div className="flex flex-col">
          <p className="text-base font-tektur text-black">
            {formattedPrice}₫
          </p>

          {p.original_price && (
            <p className="text-sm font-tektur line-through text-gray-500">
              {formatPrice(p.original_price)}₫
            </p>
          )}
        </div>

        {p.original_price && (
          <p className="mt-2 text-sm font-tektur text-green-500">
            {getDiscountedPricePercentage(p.original_price, p.price)}% off
          </p>
        )}
      </div>
        
    </Link>
  );
};

export default ProductCard;
