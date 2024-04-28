import React, { ReactNode } from 'react'
import { Navbar } from './_components/navbar'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  )
}
