import { PriceFormatter } from "utils/Formatter";

type CardProductProps = {
  title: string;
  shortDescription: string;
  price: number;
  salesPrice: number;
  imageUrl: string;
}
export function CardProduct({title, shortDescription, price, salesPrice, imageUrl} : CardProductProps) {

  return (
    <div className='flex  w-[285px] flex-col'>
      <div className="w-[285px] h-[350px]">
        <img src={imageUrl} alt='' />
      </div>
      <div className='bg-light-peach-200 p-4'>
        <h3 className='font-poppins text-2xl font-semibold text-dark-gray-800'>
          {title}
        </h3>
        <span className='font-poppins text-dark-gray-700'>
          {shortDescription}
        </span>
        <div className='inline-flex items-center gap-2 font-poppins font-semibold py-4'>
          <span className='font-poppins font-semibold text-dark-gray-800'>
            {PriceFormatter.format(price)}
          </span>
          <span className='text-dark-gray-300 line-through text-sm'>
            {PriceFormatter.format(salesPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}