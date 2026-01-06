"use client"
// import AdminBrand from '@/PagesComponents/Admin/Brand/AdminBrand'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminBrand = dynamic(()=> import('@/PagesComponents/Admin/Brand/AdminBrand'),{ssr: false})
export default function page() {
  return (
    <AdminBrand/>
  )
}
