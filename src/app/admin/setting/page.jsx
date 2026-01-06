"use client"
// import AdminSetting from '@/PagesComponents/Admin/Setting/AdminSetting'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminSetting = dynamic(()=> import('@/PagesComponents/Admin/Setting/AdminSetting'),{ssr: false})
export default function page() {
  return (
    <AdminSetting/>
  )
}
