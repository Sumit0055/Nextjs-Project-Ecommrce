"use client"
// import AdminNewsletter from '@/PagesComponents/Admin/Newsletter/AdminNewsletter'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminNewsletter = dynamic(()=> import('@/PagesComponents/Admin/Newsletter/AdminNewsletter'),{ssr: false})
export default function page() {
  return (
    <AdminNewsletter/>
  )
}
