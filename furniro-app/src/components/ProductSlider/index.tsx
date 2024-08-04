import { useState } from "react";
import { Image } from "store/single-product-slice";

export function ProductSlider({mainImage, gallery} : Image) {

  const [selectedImage, setSelectedImage] = useState<number>(0);
  
  const hasGalleryImages =
    gallery && gallery.length > 0;
  const currentImageUrl = hasGalleryImages
    ? gallery[selectedImage] || mainImage
    : mainImage;
      
  function handleImageSelected(index : number) {
     if (index >= 0 && index < gallery.length) {
       setSelectedImage(index);
     }
  }

  return (
    <section className='mx-auto grid  grid-cols-2 gap-10 laptop:grid-cols-1'>
      <div className='flex gap-8'>
        
        <ul className='flex flex-col gap-8'>
          {hasGalleryImages &&
            gallery.map((imageUrl, index) => (
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
          width={400}
          height={500}
          className=''
        />
      </div>
    </section>
  );
}