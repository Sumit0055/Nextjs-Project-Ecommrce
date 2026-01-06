"use client"
// import AdminUser from '@/PagesComponents/Admin/User/AdminUser'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminUser = dynamic(()=> import('@/PagesComponents/Admin/User/AdminUser'),{ssr: false})
export default function page() {
  return (
    <AdminUser/>
  )
}
