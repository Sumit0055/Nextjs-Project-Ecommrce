import ProductPage from '@/PagesComponents/ProductPage'
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {
  let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/seodata`, {
    method: "GET",
    headers: {
      "content-type": "applicaton/json"
    }
  })

  response = await response.json()
  let data = response.find(x => x.url === "/product")

  let slug = (await params).slug
  response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/product/${slug}`, {
    method: "GET",
    headers: {
      "content-type": "applicaton/json"
    }
  })

  // let product = await response.json()
  // let title = data?.title ? data?.title.replaceAll("_name_", product.name) : "Shop Studio : Product"
  // title = title.replaceAll("_brand_",product.brand)

  let product = await response.json()
  let title = data?.title.replaceAll("_name_", product.name)
  title = title.replaceAll("_brand_", product.brand)

  let description = data.description.replaceAll("_name_", product.name)
  description = description.replaceAll("_maincategory_", product.maincategory)
  description = description.replaceAll("_subcategory_", product.subcategory)
  description = description.replaceAll("_brand_", product.brand)

  let keywords = data.keywords.replaceAll("_name_", product.name)
  keywords = keywords.replaceAll("_maincategory_", product.maincategory)
  keywords = keywords.replaceAll("_subcategory_", product.subcategory)
  keywords = keywords.replaceAll("_brand_", product.brand)

  //   return {
  //     title: title,
  //     description: data?.description ?? "",
  //     keywords: data.keywords?.split(",") || []
  //   }

  return {
    title: title,
    description: description,
    keywords: keywords
  }
}
export default function page() {
  return (
    <ProductPage />
  )
}
