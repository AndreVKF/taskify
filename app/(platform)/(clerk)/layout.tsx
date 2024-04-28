import React, { ReactNode } from 'react'

interface ClerkLayoutProps {
  children: ReactNode
}

export default function ClerkLayout({ children }: ClerkLayoutProps) {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  )
}
