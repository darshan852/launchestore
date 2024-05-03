import { BiCategory } from "react-icons/bi"
import {
  FaAngleRight,
  FaCodeBranch,
  FaPercentage,
  FaStoreAlt,
  FaUser,
} from "react-icons/fa"
import { FcDataConfiguration } from "react-icons/fc"
import { FiLayout } from "react-icons/fi"
import { MdDashboard } from "react-icons/md"
import { TbVersionsFilled } from "react-icons/tb"

export const Menuitems = [
  {
    id: 1,
    name: "Dashboard",
    icon: MdDashboard,
    href: "/super_admin",
    current: true,
    multiLevel: false,
  },
  {
    id: 2,
    name: "Vendors",
    icon: FaUser,
    href: "/super_admin/vendors",
    current: false,
    multiLevel: false,
  },
  {
    id: 3,
    name: "Branches",
    icon: FaCodeBranch,
    href: "/super_admin/branches",
    current: false,
    multiLevel: false,
  },
  {
    id: 4,
    name: "Configration",
    icon: FcDataConfiguration,
    href: "/super_admin/configuration",
    current: false,
    multiLevel: false,
  },
  {
    id: 5,
    name: "Store type",
    icon: FaStoreAlt,
    href: "/super_admin/store-type",
    current: false,
    multiLevel: false,
  },
  {
    id: 6,
    name: "Food Category",
    icon: BiCategory,
    href: "/super_admin/food-category",
    current: false,
    multiLevel: false,
  },
  {
    id: 7,
    name: "Themes",
    icon: FiLayout,
    href: "/super_admin/themes",
    current: false,
    multiLevel: false,
  },
  {
    id: 8,
    name: "Update App Version",
    icon: TbVersionsFilled,
    href: "/super_admin/update-app-version",
    current: false,
    multiLevel: false,
  },
  {
    id: 9,
    name: "Tax",
    icon: FaPercentage,
    href: "/super_admin/tax",
    current: false,
    multiLevel: true,
    option: [
      {
        id: 10,
        name: "Tax-List",
        icon: FaAngleRight,
        href: "/super_admin/tax/taxlist",
        current: false,
        multiLevel: false,
      },
      {
        id: 11,
        name: "Tax-Type",
        icon: FaAngleRight,
        href: "/super_admin/tax/tax_type",
        current: false,
        multiLevel: false,
      },
    ],
  },
]
