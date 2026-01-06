"use client"
// import AdminCheckout from '@/PagesComponents/Admin/Checkout/AdminCheckout'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminCheckout = dynamic(()=> import('@/PagesComponents/Admin/Checkout/AdminCheckout'),{ssr: false})
export default function page() {
  return (
    <AdminCheckout/>
  )
}
