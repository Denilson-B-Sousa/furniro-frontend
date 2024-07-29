import { Banner } from "@components/Banner";
import { BillingDetails } from "@components/BillingDetails";
import { Brand } from "@components/Brand";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { PaymentSummary } from "@components/PaymentSummary";

export function Checkout() {
  return (
    <>
    <Header/>
      <Banner title='Checkout' link='Checkout' uri='/checkout' />
      <main className='grid grid-cols-2 items-start'>
        <BillingDetails />
        <PaymentSummary />
      </main>
      <Brand />
    <Footer/>
    </>
  );
}