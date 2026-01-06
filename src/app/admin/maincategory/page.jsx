"use client"
// import AdminMaincategory from '@/PagesComponents/Admin/Maincategory/AdminMaincategory'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminMaincategory = dynamic(()=> import('@/PagesComponents/Admin/Maincategory/AdminMaincategory'),{ssr: false})
export default function page() {
  return (
    <AdminMaincategory/>
  )
}
