import cup from '@assets/brand/cup.svg';
import protection from '@assets/brand/customer-support.svg';
import support from '@assets/brand/guarantee.svg';
import shipping from '@assets/brand/shipping.svg';

export function Brand() {
  const BrandContent = [
    {
      id: 1,
      title: 'High Quality',
      description: 'crafted from top materials',
      imageUrl: cup,
    },
    {
      id: 2,
      title: 'Warranty Protection',
      description: 'Over 2 years',
      imageUrl: protection,
    },
    {
      id: 3,
      title: 'Free Shipping',
      description: 'Order over 150 $',
      imageUrl: shipping,
    },
    {
      id: 4,
      title: '24 / 7 Support',
      description: 'Dedicated support',
      imageUrl: support,
    },
  ];

  return (
    <section
      data-testid='brand-section'
      className='m-auto grid grid-cols-1 justify-center justify-items-center bg-[#FAF3EA] text-left tablet:grid-cols-2 laptop-lg:grid-cols-4'
    >
      {BrandContent.map(({ id, description, title, imageUrl }) => (
        <div className='flex gap-2' key={id}>
          <img src={imageUrl} alt='' />
          <div className='justify-left flex flex-col items-center py-20'>
            <div>
              <h4 className='font-poppins text-xl font-semibold'>{title}</h4>
              <span className='text-dark-gray-800'>{description}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
