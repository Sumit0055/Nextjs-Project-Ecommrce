"use client"
// import AdminSubcategory from '@/PagesComponents/Admin/Subcategory/AdminSubcategory'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminSubcategory = dynamic(()=> import('@/PagesComponents/Admin/Subcategory/AdminSubcategory'),{ssr: false})
export default function page() {
  return (
    <AdminSubcategory/>
  )
}
// video paused : 38:51 date :- 3/1/26
