import { useProductData } from "hooks/product/useProductData";
import { useState } from "react"

type CardProductProps = {
  title: string;
  shortDescription: string;
  price: number;
  salesPrice: number;
  imageUrl: string;
};

export function ListProduct() {

  const { data  } = useProductData();

  return(
    <section>

      {data.map((product) => (
        <div>
          <div>
            <img src={product.} alt="" />

          </div>
        </div>
      ))}

    </section>
  )
}