import { Banner } from "@components/Banner";
import { BillingDetails } from "@components/BillingDetails";
import { Brand } from "@components/Brand";
import { PaymentSummary } from "@components/PaymentSummary";

export function Checkout() {
  return (
    <>
      <Banner title='Checkout' link='Checkout' uri='/checkout' />
      <main className='grid grid-cols-2 items-start'>
        <BillingDetails />
        <PaymentSummary />
      </main>
      <Brand />
    </>
  );
}