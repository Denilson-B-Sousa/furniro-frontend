import { Banner } from "@components/Banner";
import { Brand } from "@components/Brand";
import { CartDetails } from "@components/CartDetails";


export function Cart() {
  return(
    <>
      <Banner title="Cart" link="Cart" uri="/cart"/>
      <CartDetails/>
      <Brand/>
    </>
  )
}