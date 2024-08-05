import * as Tabs from '@radix-ui/react-tabs';

type ProductDescriptionProps = {
  description: string;
  gallery: string[];
}
export function ProductDescription({description, gallery} : ProductDescriptionProps) {
  return (
    <section>
      <div className='my-10 flex justify-center gap-64'>
        <Tabs.Root defaultValue='tab1'>
          <Tabs.List className='flex justify-center gap-32'>
            <Tabs.Trigger
              value='tab1'
              className='data-[state=active] cursor-pointer font-poppins text-2xl text-dark-gray-300 outline-none data-[state=active]:text-2xl data-[state=active]:font-medium data-[state=active]:text-black'
            >
              Description
            </Tabs.Trigger>
            <Tabs.Trigger
              value='tab2'
              className='data-[state=active] cursor-pointer font-poppins text-2xl text-dark-gray-300 outline-none data-[state=active]:text-2xl data-[state=active]:font-medium data-[state=active]:text-black'
            >
              Additional Information
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            value='tab1'
            className='m-auto flex w-[64rem] flex-col gap-4 py-8 text-[#9F9F9F]'
          >
            <p>
              {description}
            </p>
          </Tabs.Content>
          <Tabs.Content
            value='tab2'
            className='m-auto flex w-[64rem] flex-col gap-4 text-[#9F9F9F]'
          >
            <p>
              {description}
            </p>

            <div className='my-10 flex justify-center gap-4'>
              <ul className='flex gap-8'>
                {gallery.map((imageUrl, index) => (
                <li
                  key={index}
                  className='cursor-pointer'
                >
                  <img
                    key={index}
                    src={imageUrl}
                    onClick={() => window.open(imageUrl, '_blank')}
                    alt=''
                    className='h-200 w-200 rounded-lg'
                  />
                </li>
              ))}
              </ul>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <div className='m-auto flex w-[64rem] flex-col gap-4 text-[#9F9F9F]'></div>
    </section>
  );
}
