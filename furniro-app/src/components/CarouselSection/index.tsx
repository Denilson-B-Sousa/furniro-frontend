import { Button } from "@components/Button";
import { Carousel } from "@components/Carousel";

export function CarouselSection() {
  return (
    <section className="grid grid-cols-1 laptop:grid-cols-2 items-center bg-light-peach-50 w-[90vw] m-auto">
      <div className="flex content-center flex-col py-8 px-6 max-w-sm text-center gap-8 tablet:max-w-lg tablet-lg:max-w-2xl laptop:text-left laptop:max-w-xl">
        <h2 className="font-poppins font-bold text-dark-gray-800 text-4xl tablet:text-5xl">50+ Beautiful rooms inspiration</h2>
        <p className="font-poppins font-medium text-dark-gray-500 text-xl py-2">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <div className="py-2 flex justify-center laptop:justify-start">
          <Button variant="primary" size="md">Explore More</Button>
        </div>
      </div>

      <div className="pt-20 pr-40">
        <Carousel />
      </div>
    </section>
  );
}