import { useProductData } from 'hooks/product/useProductData';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const { data } = useProductData(); 

  const pageCount = Math.ceil((data?.length || 0) / itemsPerPage);

  function handlePageClick(event: { selected: number }) {
    const selectedPage = event.selected;
    onPageChange(selectedPage);
  }

  return (
    <div className='m-auto flex w-[32rem] justify-center py-12'>
      <ReactPaginate
        breakLabel='...'
        nextLabel='Next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName='flex gap-4'
        pageLinkClassName='py-4 px-6 bg-[#F9F1E7] rounded-lg hover:bg-light-peach-900 transition-colors'
        previousLinkClassName='hidden'
        nextLinkClassName='py-4 px-6 bg-[#F9F1E7] rounded-lg hover:bg-light-peach-900 transition-colors'
        breakClassName='py-4 px-6 bg-[rgb(249,241,231)] rounded-lg'
        breakLinkClassName='py-4 px-6 bg-[#F9F1E7] rounded-lg'
        activeClassName='bg-light-peach-900 text-white'
        disabledClassName='opacity-50 cursor-not-allowed'
        forcePage={currentPage}
      />
    </div>
  );
}
