"use client"
// import AdminProduct from '@/PagesComponents/Admin/Product/AdminProduct'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminProduct = dynamic(()=> import('@/PagesComponents/Admin/Product/AdminProduct'),{ssr: false})
export default function page() {
  return (
    <AdminProduct/>
  )
}
