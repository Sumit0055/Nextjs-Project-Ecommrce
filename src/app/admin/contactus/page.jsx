"use client"
// import AdminContactUs from '@/PagesComponents/Admin/ContactUs/AdminContactUs'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminContactUs = dynamic(()=> import('@/PagesComponents/Admin/ContactUs/AdminContactUs'),{ssr: false})
export default function page() {
  return (
    <AdminContactUs/>
  )
}
