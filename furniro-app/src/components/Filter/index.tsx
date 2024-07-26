import icone from '@assets/icons/exchange.svg';
import filter from '@assets/icons/filter.svg';
import grid from '@assets/icons/grid-big-round.svg';

export function Filter() {
  return (
    <section className='flex justify-around bg-light-peach-200 py-8'>
      <div className='inline-flex gap-4 items-center'>
        <div>
          <button className='inline-flex gap-2'>
            <img src={filter} alt='Filtrar Produto' />
            Filter
          </button>
        </div>
        <div>
          <button>
            <img src={grid} alt='Filtro' />
          </button>
          <button>
            <img src={icone} alt='' />
          </button>
        </div>
        <div className='border-r-4 border-dark-gray-700'></div>
        Showing 1-16 of 32 results
      </div>

      <div className='flex'>
        <div>
          <span>Show</span>
          <input type='number' />
        </div>
        <div>
          <span>Short By</span>
          <input type='text' />
        </div>
      </div>
    </section>
  );
}
