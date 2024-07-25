import { CardGallery } from '@components/CardGallery';
import { Spinner } from '@phosphor-icons/react';
import { useGalleryData } from 'hooks/gallery/useGalleryData';

export function Gallery() {
  const { data, isLoading} = useGalleryData();

  return (
    <section>
      <div className='py-12 text-center'>
        <h2 className='font-poppins text-3xl font-bold text-dark-gray-900'>
          Browse The Range
        </h2>
        <p className='font-poppins text-xl font-normal text-dark-gray-300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {!isLoading && (
        <div className='grid  grid-cols-1 place-items-center gap-2 laptop:grid-cols-3 laptop:px-36'>
          {data?.map((gallery) => (
            <CardGallery
              key={gallery.id}
              title={gallery.title}
              imageUrl={gallery.imageUrl}
            />
          ))}
        </div>
      )}

      {isLoading && (
        <span className='middle-[50%] transform: absolute left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Spinner
            className='animate-spin-slow transition-all duration-200'
            width={48}
            height={48}
          />
        </span>
      )}
    </section>
  );
}
