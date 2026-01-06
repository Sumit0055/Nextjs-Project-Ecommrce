"use client"
// import AdminFeature from '@/PagesComponents/Admin/Feature/AdminFeature'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminFeature = dynamic(()=> import('@/PagesComponents/Admin/Feature/AdminFeature'),{ssr: false})
export default function page() {
  return (
    <AdminFeature/>
  )
}
