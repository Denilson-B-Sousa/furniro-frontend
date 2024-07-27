import { Banner } from "@components/Banner";
import { Brand } from "@components/Brand";


export function Cart() {
  return(
    <>
      <Banner title="Cart" link="Cart" uri="/cart"/>
      <Brand/>
    </>
  )
}