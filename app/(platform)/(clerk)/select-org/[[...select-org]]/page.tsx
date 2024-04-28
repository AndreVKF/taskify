import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

export default function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl={'/organizations/:id'}
      afterCreateOrganizationUrl={'/organizations/:id'}
    />
  )
}
