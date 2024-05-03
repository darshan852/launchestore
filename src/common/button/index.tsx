import React, { ReactNode } from "react"

import { cva, type VariantProps } from "class-variance-authority"

const button = cva(
  "inline-flex items-center gap-2 border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Primary-500 justify-center disabled:cursor-not-allowed whitespace-nowrap",
  {
    variants: {
      intent: {
        primary: [
          "border-transparent",
          "shadow-sm",
          "text-black",
          "bg-Secondary",
          "hover:bg-Secondary",
          "w-[30px]",
          "h-[30px]",
          "p-0",
          "px-0",
          "py-0",
          "flex",
          "flex",
          "items-center",
          "justify-center",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-offset-2",
          "focus:ring-transparent",
        ],
        secondary: [
          "border-transparent",
          "text-Primary-700",
          "bg-Primary-100",
          "hover:bg-Primary-200",
        ],
        white: [
          "border-gray-300",
          "text-gray-700",
          "shadow-sm",
          "bg-white",
          "hover:bg-gray-50",
        ],
        outline: [
          "border-Primary-600",
          "text-Primary-700",
          "shadow-sm",
          "bg-white",
          "hover:bg-gray-50",
        ],
        green: [
          "border-transparent",
          "shadow-sm",
          "text-white",
          "bg-[#16a34a]",
          "hover:bg-[#29904f]",
        ],
        blue: [
          "border-transparent",
          "shadow-sm",
          "text-white",
          "bg-[#3a5fd7]",
          "hover:bg-[#3253bd]",
        ],
      },
      fullWidth: {
        true: "w-full",
      },

      size: {
        xs: ["rounded"],
        sm: ["leading-4", "rounded-md"],
        base: ["rounded-md"],
        lg: ["rounded-md"],
        xl: ["rounded-md"],
      },
    },
    compoundVariants: [{ intent: "primary", size: "base", class: "" }],
    defaultVariants: {
      intent: "primary",
      size: "base",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  fullWidth,
  children,
  leftIcon,
  rightIcon,
  ...props
}) => (
  <button className={button({ intent, size, fullWidth, className })} {...props}>
    {leftIcon && <span className='-ml-1'>{leftIcon}</span>}
    {children}
    {rightIcon && <span className='-mr-1'>{rightIcon}</span>}
  </button>
)

export default Button
