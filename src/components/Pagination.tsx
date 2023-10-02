import { FC } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
    className?: string
    handlePageClick?: () => void
    data?: Object[]
    totalPage?: number
}

const Pagination: FC<PaginationProps> = ({ className, handlePageClick, data = [], totalPage = 1 }) => {
    return <nav className='my-2.5 mx-auto'>
        <ReactPaginate
            pageCount={Math.ceil(data.length / totalPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            previousLabel={<BsChevronLeft />}
            nextLabel={<BsChevronRight />}
            className='flex items-center justify-center gap-2 pagination-custom'
            pageClassName={'page-item'}
            disabledClassName='page-item disable'
            breakClassName='page-item'
            previousClassName='page-item'
            nextClassName='page-item'
            activeClassName='active'
        />
    </nav>
}
export default Pagination