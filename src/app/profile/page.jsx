import ProfilePage from '@/PagesComponents/User/ProfilePage'
import React, { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense>
      <ProfilePage/>
    </Suspense>
  )
}
