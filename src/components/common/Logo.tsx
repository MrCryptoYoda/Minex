import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  textClassName?: string
  variant?: "light" | "dark"
  showText?: boolean
}

export function Logo({ 
  className, 
  iconClassName, 
  textClassName, 
  variant = "light",
  showText = true 
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2 group", className)}>
      <div className={cn(
        "h-9 w-9 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300",
        variant === "dark" 
          ? "bg-white text-slate-950 group-hover:bg-brand-orange group-hover:text-white" 
          : "bg-slate-900 text-white group-hover:bg-brand-orange",
        iconClassName
      )}>
        <span className="font-bold text-xl">M</span>
      </div>
      {showText && (
        <span className={cn(
          "font-bold text-lg tracking-tight",
          variant === "dark" ? "text-white" : "text-slate-900",
          textClassName
        )}>
          The Minexchange
        </span>
      )}
    </div>
  )
}
