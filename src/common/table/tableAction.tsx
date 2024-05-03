// components/TableAction.js

export interface TableActionButton {
  className?: string
  onClick: any
  label: string
  icon?: React.FC<any>
}

export interface TableActionProps {
  options: TableActionButton[]
  toggleMenu: (index: number | null) => void
  row: any
}

const TableAction = (props: TableActionProps) => {
  const { options, toggleMenu, row } = props

  return (
    <div
      className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'
      onMouseLeave={() => toggleMenu(null)}
    >
      <div className='py-1'>
        {options.map((option, index) => (
          <button
            key={index}
            className=' px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left hover:bg-Primary hover:text-white flex gap-2 items-center '
            onClick={() => option.onClick(row)}
          >
            {option.icon && <option.icon />}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TableAction
