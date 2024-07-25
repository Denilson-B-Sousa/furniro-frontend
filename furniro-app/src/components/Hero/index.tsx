import { Button } from "@components/Button";

export function Hero() {
  return (
    <div className='relative bg-hero-pattern w-[100%] h-[40rem] bg-cover bg-center bg-no-repeat px-10 py-10 laptop:h-[44rem] laptop:w-full laptop:px-0 laptop:py-0 '>
      <div className='absolute w-[22rem] rounded-xl bg-light-peach-100 p-11 text-center m-auto tablet:right-36 tablet-lg:right-48 laptop:right-20 laptop:top-48 laptop:m-0 laptop:w-[40rem] laptop:text-left'>
        <span className='font-poppins font-semibold tracking-widest text-dark-gray-900'>
          New Arrival
        </span>
        <h1 className='font-poppins text-3xl font-bold text-light-peach-900 laptop:text-[3rem] leading-tight pt-1'>
          Discover Our<br/>
          New Collection
        </h1>
        <p className='pb-12 pt-4 font-medium text-[1.25rem] text-dark-gray-900'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>

        <div className="hidden laptop:flex">
          <Button variant='primary' size='md'>
            Buy Now
          </Button>
        </div>

        <div className='flex justify-center laptop:hidden'>
          <Button variant='primary' size='md'>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}