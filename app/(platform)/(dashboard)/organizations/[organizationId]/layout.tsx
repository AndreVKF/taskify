import React, { ReactNode } from 'react'
import OrgControl from './_components/org-control'
import { auth } from '@clerk/nextjs/server'
import { startCase } from 'lodash'

interface OrganizationIdLayoutProps {
  children: ReactNode
}

export async function generateMetadata() {
  const { orgSlug } = auth()

  return {
    title: startCase(orgSlug || 'organization'),
  }
}

export default function OrganizationIdLayout({
  children,
}: OrganizationIdLayoutProps) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}
