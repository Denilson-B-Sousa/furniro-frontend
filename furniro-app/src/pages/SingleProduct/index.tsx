import { ProductDetails } from "@components/ProductDetails";
import { useParams } from "react-router-dom";
import { useProductSelector } from "store/hooks";

export function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  const productItems = useProductSelector((state) => state.product.items);

  const product = productItems.find((item) => item.id === id);

  

  return <ProductDetails product={product!} />;
}
