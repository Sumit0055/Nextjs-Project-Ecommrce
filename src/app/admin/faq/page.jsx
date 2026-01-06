"use client"
// import AdminFaq from '@/PagesComponents/Admin/Faq/AdminFaq'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminFaq = dynamic(()=> import('@/PagesComponents/Admin/Faq/AdminFaq'),{ssr: false})
export default function page() {
  return (
    <AdminFaq/>
  )
}
