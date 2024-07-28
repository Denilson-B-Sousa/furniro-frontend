import { useProductData } from "hooks/product/useProductData"
import { useState } from "react";

export function ProductSlider() {

  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const { data } = useProductData();

  if (!data || data.length === 0) {
    return <div>No products available</div>;
  }

  const product = data[0];
  
  const hasGalleryImages =
    product.images.gallery && product.images.gallery.length > 0;
  const currentImageUrl = hasGalleryImages
    ? product.images.gallery[selectedImage] || product.images.mainImage
    : product.images.mainImage;
      
  function handleImageSelected(index : number) {
     if (index >= 0 && index < product.images.gallery.length) {
       setSelectedImage(index);
     }
  }

  return (
    <section className='mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-1'>
      <div className='flex gap-8'>
        
        <ul className='flex flex-col gap-8'>
          {hasGalleryImages &&
            product.images.gallery.map((imageUrl, index) => (
              <li
                key={index}
                onClick={() => handleImageSelected(index)}
                className='cursor-pointer'
              >
                <img
                  key={index}
                  src={imageUrl}
                  alt=''
                  className='h-20 w-20 rounded-lg'
                />
              </li>
            ))}
        </ul>

        <img
          src={currentImageUrl}
          alt={product.title}
          width={500}
          height={500}
          className=''
        />
      </div>
    </section>
  );
}