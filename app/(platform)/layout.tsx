import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'

import React, { ReactNode } from 'react'
import { ModalProvider } from '@/components/providers/modal-provider'
import { QueryProvider } from '@/components/providers/query-provider'

interface PlatformLayoutProps {
  children: ReactNode
}

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  )
}
