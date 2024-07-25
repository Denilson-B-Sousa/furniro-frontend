import { Button } from "@components/Button";
import { Carousel } from "@components/Carousel";

export function CarouselSection() {
  return (
    <section className="grid grid-cols-1 laptop:grid-cols-2 items-center bg-light-peach-50 w-[90vw] m-auto">
      <div className="flex content-center flex-col pl-8 w-[42rem]">
        <h2 className="font-poppins font-bold text-dark-gray-800 text-5xl">50+ Beautiful rooms inspiration</h2>
        <p className="font-poppins font-medium text-dark-gray-500 text-xl py-2">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <div className="py-8">
          <Button variant="primary" size="md">Explore More</Button>
        </div>
      </div>

      <div className="pt-20 pr-40">
        <Carousel />
      </div>
    </section>
  );
}