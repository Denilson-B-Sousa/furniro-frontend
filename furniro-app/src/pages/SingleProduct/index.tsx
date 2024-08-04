import { Button } from "@components/Button";
import { ProductDetails } from "@components/ProductDetails";
import { ProductNavigation } from "@components/ProductNavigation";
import { useParams } from "react-router-dom";
import { useProductSelector } from "store/hooks";

export function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const productItems = useProductSelector((state) => state.product.items);

  const product = productItems.find((item) => item.id === id);

  

  return (
    <>
      {product && (
        <>
          <ProductNavigation title={product.title} />
          <ProductDetails product={product} />
          <div className="flex justify-center mb-20 mt-10">
            <Button size='xl' variant='outlined'>
              Show More
            </Button>
          </div>
        </>
      )}
    </>
  );
}
