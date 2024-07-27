import address from '@assets/icons/address.svg';
import clock from '@assets/icons/clock.svg';
import phone from '@assets/icons/phone.svg';
import { Banner } from '@components/Banner';
import { Brand } from '@components/Brand';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

export function Contact() {
  return (
    <main>
      <Banner title='Contact'  link='Contact' uri='/contact' />

      <section className='m-auto flex w-[36rem] flex-col justify-center py-24 text-center'>
        <h1 className='py-2 font-poppins text-4xl font-semibold text-black'>
          Get In Touch With Us
        </h1>
        <p className='text-dark-gray-300'>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </section>

      <section className='grid grid-cols-1 justify-items-center laptop:grid-cols-2'>
        <div className='flex flex-col gap-10 py-8 laptop:w-56'>
          <div className='flex items-start gap-2'>
            <img src={address} alt='' width={20} height={20} />
            <div>
              <h3 className='font-poppins text-2xl font-medium text-black'>
                Address
              </h3>
              <address className='font-poppins text-[16px]'>
                236 5th SE Avenue, New York NY10000, United States
              </address>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <img src={phone} alt='' width={24} height={24} />
            <div>
              <h3 className='font-poppins text-2xl font-medium text-black'>
                Phone
              </h3>
              <span>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</span>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <img src={clock} alt='' width={20} height={20} />
            <div>
              <h3 className='font-poppins text-2xl font-medium text-black'>
                Working Time
              </h3>
              <span>
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </span>
            </div>
          </div>
        </div>

        <div>
          <form>
            <fieldset className='flex flex-col gap-5'>
              <label htmlFor='' className='font-poppins font-medium text-black'>
                Your name
              </label>
              <Input placeholder='Abc' />
              <label htmlFor='' className='font-poppins font-medium text-black'>
                Email address
              </label>
              <Input placeholder='Abc@def.com' />
              <label htmlFor='' className='font-poppins font-medium text-black'>
                Subject
              </label>
              <Input placeholder='This is an optional' />
              <label htmlFor='' className='font-poppins font-medium text-black'>
                Message
              </label>
              <textarea
                name=''
                id=''
                placeholder='Hi! i’d like to ask about'
                className='w-[32rem] rounded-xl border-2 border-dark-gray-300 p-8'
              ></textarea>
            </fieldset>

            <div className='py-12'>
              <Button variant='primary' size='form'>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Brand />
    </main>
  );
}
