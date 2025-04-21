import type React from "react"
import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({ children, className, ...props }: DashboardShellProps) {
  return (
    <div className={cn("flex min-h-screen flex-col gap-8 p-4 pt-6 md:p-8", className)} {...props}>
      {children}
    </div>
  )
}
