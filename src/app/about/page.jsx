// import About from '@/Components/About'
import AboutPage from '@/PagesComponents/AboutPage'
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/seodata`,{
    method:"GET",
    headers:{
      "content-type":"applicaton/json"
    }
  })

  response = await response.json()
  let data = response.find(x=>x.url==="/about")
  return {
    title : data?.title??"ShopStudio - About",
    description : data?.description ?? "",
    keywords: data.keywords?.split(",")||[]
  }
}

export default function Page() {
  return (
    <AboutPage/>
  )
}
// 44:28