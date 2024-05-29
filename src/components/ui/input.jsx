import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex w-full px-[5px] py-[8px] rounded-[8px] border border-transparent outline-transparent hover:border-blue-400 hover:outline-blue-400 focus:border-blue-500 focus:outline-blue-500  active:outline-blue-500 active:border-blue-500  text-sm",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
