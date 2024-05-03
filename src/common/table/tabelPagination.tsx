import { FaAngleLeft } from "react-icons/fa6"
import { FaAngleRight } from "react-icons/fa6"
interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  onPageChange: (page: number) => void
  currentPage: number
  setRowsPerPage: (limit: number) => void
  itemsLength: number
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
  setRowsPerPage,
  itemsLength,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1
      handlePageChange(nextPage)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1
      handlePageChange(prevPage)
    }
  }

  const renderDots = () => {
    const dots = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        dots.push(
          <li
            key={i}
            className='flex items-center justify-center border border-bordercolor rounded-full w-[30px] h-[30px] text-sm'
          >
            <button
              onClick={() => handlePageChange(i)}
              className={`${
                i === currentPage
                  ? "bg-blue-500 text-white text-sm"
                  : "bg-white"
              } w-full h-full rounded-full text-sm`}
            >
              {i}
            </button>
          </li>,
        )
      }
    } else {
      const startPage = Math.max(1, currentPage - 2)
      const endPage = Math.min(totalPages, currentPage + 2)

      if (startPage > 1) {
        dots.push(
          <li key='start'>
            <button
              onClick={() => handlePageChange(1)}
              className='px-3 py-1 mx-1'
            >
              1
            </button>
          </li>,
        )
        if (startPage > 2) {
          dots.push(
            <li key='ellipsis-start'>
              <span className='px-3 py-1 mx-1'>...</span>
            </li>,
          )
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        dots.push(
          <li key={i}>
            <button
              onClick={() => handlePageChange(i)}
              className={`${
                i === currentPage ? "bg-blue-500 text-white" : "bg-white"
              } px-3 py-1 rounded-full mx-1`}
            >
              {i}
            </button>
          </li>,
        )
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          dots.push(
            <li key='ellipsis-end'>
              <span className='px-3 py-1 mx-1'>...</span>
            </li>,
          )
        }
        dots.push(
          <li key='end'>
            <button
              onClick={() => handlePageChange(totalPages)}
              className='px-3 py-1 mx-1'
            >
              {totalPages}
            </button>
          </li>,
        )
      }
    }

    return dots
  }

  return (
    <div className='pagination flex items-center justify-between mt-10 common-inputs'>
      <div>
        <p className='text-[13px] text-black'>
          Showing{" "}
          <span className='font-medium'>
            {currentPage * itemsPerPage - itemsPerPage + 1}
          </span>{" "}
          to <span className='font-medium'>{currentPage * itemsLength}</span> of{" "}
          <span className='font-medium'>{totalItems}</span> results
        </p>
      </div>
      <div className='flex items-center gap-5'>
        <select
          value={itemsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          {[10, 25, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <ul className='flex gap-2 '>
          <li className='flex items-center justify-center border border-bordercolor rounded-full w-[30px] h-[30px] text-sm'>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`rounded-[10px] w-full h-full flex items-center justify-center ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600"
                  : "bg-Primary text-white"
              }`}
            >
              <FaAngleLeft />
            </button>
          </li>
          {renderDots()}
          <li className='flex items-center justify-center border border-bordercolor rounded-full w-[30px] h-[30px] text-sm'>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`rounded-full w-full h-full flex items-center justify-center   ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600"
                  : "bg-Primary text-white"
              }`}
            >
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pagination
