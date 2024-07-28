import { Input } from '@components/Input';
import { Label } from '@components/Label';

export function BillingDetails() {
  return (
    <section className='flex justify-between px-36 py-24'>
      <form>
        <h2 className='pb-12 font-poppins text-4xl font-semibold text-black'>
          Billing details
        </h2>

        <fieldset className='flex w-10 flex-col'>
          <div className='flex gap-8'>
            <div>
              <Label className='block'>First Name</Label>
              <Input type='text' className='w-12' />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input type='text' className='w-12' />
            </div>
          </div>

          <Label>Company Name (Optional)</Label>
          <Input type='text' className='w-10' />

          <Label>ZIP code</Label>
          <Input type='text' />

          <Label>Country / Region</Label>
          <Input type='text' />

          <Label>Street address</Label>
          <Input type='text' />

          <Label>Town / City</Label>
          <Input type='text' />

          <Label>Province</Label>
          <Input type='text' />

          <Label>Add-on address</Label>
          <Input type='text' />

          <Label>Email address</Label>
          <Input type='text' />

          <Label/>
          <Input type='text' placeholder='Additional information' />
        </fieldset>
      </form>
    </section>
  );
}
