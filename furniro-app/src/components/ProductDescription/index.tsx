
export function ProductDescription() {

  return (
    <section>
      <div className='my-10 flex justify-center gap-64'>
        <button className='font-poppins text-xl text-black'>Description</button>
        <button className='font-poppins text-xl text-black'>
          Additional Information
        </button>
      </div>

      <div className='m-auto flex w-[64rem] flex-col gap-4 text-[#9F9F9F]'>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="flex justify-center gap-4 my-10">
        <img src='#' alt='Image 1' />
        <img src='#' alt='Image 2' />
      </div>
    </section>
  );
}