"use client"
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Store from "@/Redux/Store"
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'

export default function MasterLayout({children}) {
    return (
        <Provider store={Store}>
            <Suspense>
                <Navbar />
            </Suspense>
            {children}
            <Suspense>
                <Footer />
            </Suspense>
        </Provider>
    )
}