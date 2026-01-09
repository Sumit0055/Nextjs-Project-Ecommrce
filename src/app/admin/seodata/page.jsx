"use client"
// import AdminSeoData from '@/PagesComponents/Admin/SeoData/AdminSeoData'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminSeoData = dynamic(()=> import('@/PagesComponents/Admin/SeoData/AdminSeoData'),{ssr: false})
export default function page() {
  return (
    <AdminSeoData/>
  )
}
