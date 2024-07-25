type CardGalleryProps = {
  title: string;
  imageUrl: string;
};

export function CardGallery({title, imageUrl} : CardGalleryProps) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt='' className='rounded-xl' />
      </div>
      <h3 className='py-8 text-center font-poppins text-xl font-semibold text-dark-gray-900'>
        {title}
      </h3>
    </div>
  );
}
