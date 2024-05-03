import * as React from "react"
import Image from "next/image"
import { defaultUrl } from "@/src/service/common"
import Pagination from "./tabelPagination"
import Button from "../button"
import { BiPlus } from "react-icons/bi"
import TableAction from "./tableAction"
import { BsThreeDotsVertical } from "react-icons/bs"

export interface Column {
  id: string
  label: string
  minWidth?: number
  align?: "right"
  format?: (value: number) => string
  type?: string
  style?: any
  className?: any
  onClick?: any
}

export interface CustomeCheckboxAction {
  label: string
  icon: React.FC<any>
  iconDirection: string
  onClick: any
  variant?: "text" | "outlined" | "contained"
  color?:
    | "inherit"
    | "Primary"
    | "Secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
  style?: any
  className?: string
  intent?: any
}

interface CustomeTabelProps {
  columns: readonly Column[]
  rows: any[]
  page: number
  setPage: (value: number) => void
  rowsPerPage: number
  setRowsPerPage: (value: number) => void
  showIndex?: boolean
  indexColumn?: Column
  search: string
  setSearch: (value: string) => void
  checkabel?: boolean
  checkabelAction?: CustomeCheckboxAction[] | undefined
  action?: CustomeCheckboxAction[]
  totalRecord: number
  customeAction?: CustomeCheckboxAction
  isDeletedFlag?: boolean
  setDeletedFlag?: any
  tableActionOption?: any
}

const CustomeTabel: React.FC<CustomeTabelProps> = (props) => {
  const {
    columns,
    rows,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
    showIndex = false,
    indexColumn,
    search,
    setSearch,
    checkabel,
    checkabelAction,
    action,
    totalRecord,
    customeAction,
    isDeletedFlag = false,
    setDeletedFlag,
    tableActionOption,
  } = props
  const [selectedRows, setSelectedRows] = React.useState<any[]>([])
  const [tableActionIndex, setTableAcionIndex] = React.useState<number | null>(
    null,
  )

  React.useEffect(() => {
    if (isDeletedFlag && isDeletedFlag === true) {
      setSelectedRows([])
    }
  }, [isDeletedFlag])

  const handleChangePage = (newPage: number) => {
    console.log(newPage)
    setPage(newPage)
  }

  const handleSelect = (value: any) => {
    setDeletedFlag && setDeletedFlag(false)
    const updatedArray = [...selectedRows]
    const index = selectedRows?.findIndex((f) => f.id === value.id)
    if (index === -1) {
      updatedArray.push(value)
    } else {
      updatedArray.splice(index, 1)
    }
    setSelectedRows(updatedArray)
  }

  const handleSelectAll = () => {
    setDeletedFlag && setDeletedFlag(false)

    const updatedArray = [...selectedRows]
    if (selectedRows.length !== rows.length) {
      rows.map((r) => {
        const index = updatedArray.findIndex((f) => f.id === r.id)
        if (index === -1) {
          updatedArray.push(r)
        }
      })
      setSelectedRows(updatedArray)
    } else {
      setSelectedRows([])
    }
  }

  const getCellContent = (value: any, column: Column, row: any) => {
    if (column.type === "chip") {
      return (
        <button
          onClick={() => column.onClick(row)}
          className={`inline-flex items-center px-3 py-1 rounded-[5px] text-[12px] font-medium bg-gray-100 text-gray-800 ${column.className(value)}`}
        >
          {value}
        </button>
      )
    } else if (column.format && typeof value === "number") {
      return column.format(value)
    } else if (column.type === "image") {
      return (
        <Image
          src={`${defaultUrl}/${value}`}
          alt='themeImage'
          height={50}
          width={50}
          quality={80}
          className='rounded-full w-[50px] h-[50px] object-contain border-2 border-Primary shadow-md'
        />
      )
    } else if (column.type === "link") {
      return (
        <a
          href={`${value}`}
          className='no-underline text-Primary hover:underline'
          target='blank'
        >
          {value}
        </a>
      )
    } else {
      return value
    }
  }

  const toggleMenu = (index: number | null) => {
    setTableAcionIndex(index)
  }

  return (
    <>
      <div className='w-full flex justify-end sm:items-center items-end flex-col sm:flex-row gap-2 mb-3 common-inputs'>
        <div className='flex justify-end items-center gap-2'>
          {customeAction && (
            <button
              type='button'
              onClick={() => customeAction.onClick(selectedRows)}
              color={customeAction.color || "Primary"}
              style={customeAction.style}
              className='inline-flex items-center gap-1 px-3 py-2 border h-[45px] border-Secondary text-sm sm-text-md sm-px-5 font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary'
            >
              {customeAction.iconDirection === "left" && (
                <BiPlus className='text-[17px]' />
              )}
              {customeAction.label}
              {customeAction.iconDirection === "right" && (
                <BiPlus className='text-[17px]' />
              )}
            </button>
          )}
          {checkabelAction &&
            checkabelAction.map((action: CustomeCheckboxAction, index) => (
              <button
                type='button'
                onClick={() => action.onClick(selectedRows)}
                color={action.color || "Primary"}
                style={action.style}
                disabled={selectedRows.length === 0}
                key={index}
                className='inline-flex items-center gap-1 px-4 py-2 h-[45px] border border-Secondary text-sm sm-text-md font-semibold text-black rounded-md shadow-sm bg-Secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Secondary disabled:bg-[#aba9a9] disabled:text-black'
              >
                {action.iconDirection === "left" && (
                  <action.icon style={{ marginRight: "5px" }} />
                )}
                {action.label}
                {action.iconDirection === "right" && <action.icon />}
              </button>
            ))}
        </div>
        <input
          id='search'
          className='min-w-[60%] sm:w-[40%] sm:min-w-[40%] md:w-[30%] md:min-w-[30%] shadow-sm focus:ring-indigo-500 p-4 border border-black  focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='search'
          name='search'
          // style={{ width: "30%" }}
          value={search}
          onChange={(e: { target: { value: string } }) =>
            setSearch(e.target.value)
          }
        />
      </div>
      <div className='flex flex-col'>
        <div className='xxl:overflow-x-visible xl:overflow-x-auto overflow-x-auto'>
          <div className='inline-block min-w-full py-2 align-middle rounded-[10px]'>
            <div className='relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'></div>

            <table className='min-w-full table-fixed rounded-[10px]'>
              <thead className='bg-black'>
                <tr>
                  {checkabel && (
                    <th
                      scope='col'
                      className='py-3.5 pl-2 pr-3 text-left text-sm font-semibold text-white sm:pl-3'
                    >
                      <input
                        type='checkbox'
                        className=' left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6'
                        onChange={handleSelectAll}
                        checked={
                          rows.length === selectedRows.length && rows.length > 0
                        }
                      />
                    </th>
                  )}
                  {showIndex && indexColumn && (
                    <th
                      scope='col'
                      className='py-3.5 pl-2 pr-3 text-left text-sm font-semibold text-white sm:pl-3'
                      align={indexColumn.align}
                      style={{ minWidth: indexColumn.minWidth }}
                    >
                      {indexColumn.label}
                    </th>
                  )}
                  {columns.map((column, index) => (
                    <th
                      scope='col'
                      className='py-3.5 pl-2 pr-3 text-left text-sm font-semibold text-white sm:pl-3'
                      key={column.id + index}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </th>
                  ))}
                  {action && action.length > 0 && (
                    <th
                      align='center'
                      className='py-3.5 pl-2 pr-3 text-cetner text-sm font-semibold text-white sm:pl-3'
                    >
                      Action
                    </th>
                  )}
                  {tableActionOption && tableActionOption.length > 0 && (
                    <th
                      align='center'
                      className='py-3.5 pl-2 pr-3 text-cetner text-sm font-semibold text-white sm:pl-3'
                    >
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className='bg-white border-t-0'>
                {rows.map((row, index) => (
                  <tr tabIndex={-1} key={index}>
                    {checkabel && (
                      <td className='px-3 py-4'>
                        <input
                          type='checkbox'
                          className=' left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6'
                          onChange={() => handleSelect(row)}
                          checked={selectedRows.some((r) => r.id === row.id)}
                        />
                      </td>
                    )}
                    {showIndex && indexColumn && (
                      <td align={indexColumn.align} className='px-3 py-4'>
                        {index + 1}
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={index + column.id + row[column.id]}
                        align={column.align}
                        className='px-3 py-4 text-sm text-gray-500'
                      >
                        {getCellContent(row[column.id], column, row)}
                      </td>
                    ))}
                    {action && action.length > 0 && (
                      <td
                        align='center'
                        className='px-3 py-4 action-btn h-full flex items-center text-center text-sm font-medium table-edit-btn'
                      >
                        {action.map((a, index) => (
                          <Button
                            type='button'
                            onClick={() => a.onClick(row)}
                            color={a.color || "Primary"}
                            className={a.className}
                            key={index}
                          >
                            {
                              <a.icon
                                width={20}
                                height={20}
                                className='text-black'
                              />
                            }
                          </Button>
                        ))}
                      </td>
                    )}
                    {tableActionOption && (
                      <td
                        className='px-3 py-2 flex justify-center items-center'
                        onMouseLeave={() => toggleMenu(null)}
                      >
                        <div
                          className='relative'
                          onMouseEnter={() => toggleMenu(index)}
                        >
                          <button
                            className='flex items-center justify-center w-8 h-8 hover:bg-Primary hover:text-white rounded-full'
                            onClick={() => toggleMenu(index)}
                          >
                            <BsThreeDotsVertical />
                          </button>
                          {tableActionIndex === index && (
                            <TableAction
                              options={tableActionOption}
                              toggleMenu={toggleMenu}
                              row={row}
                            />
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsLength={rows.length}
              itemsPerPage={rowsPerPage}
              totalItems={totalRecord}
              onPageChange={handleChangePage}
              currentPage={page}
              setRowsPerPage={setRowsPerPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomeTabel
