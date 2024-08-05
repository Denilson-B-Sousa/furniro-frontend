import { Input } from '@components/Input';
import { Label } from '@components/Label';
import { User } from 'firebase/auth';
import { auth } from 'firebase-config';
import { useEffect, useState } from 'react';

export function BillingDetails() {
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user?.email ?? 'no-email');
      setUserDetails(user);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
          <Input
            type='text'
            value={userDetails?.email ?? 'no-email'}
            readOnly
          />

          <Label />
          <Input type='text' placeholder='Additional information' />
        </fieldset>
      </form>
    </section>
  );
}
