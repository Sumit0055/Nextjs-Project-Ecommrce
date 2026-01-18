export default async function sitemap() {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/product`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    response = await response.json()

    let productURL = response.map(x => {
        return {
            url: process.env.NEXT_PUBLIC_URL+"/product/"+x.id,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    })

    let stacticURL = [
        {
            url: process.env.NEXT_PUBLIC_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: process.env.NEXT_PUBLIC_URL + "/about",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
        ,
        {
            url: process.env.NEXT_PUBLIC_URL + "/shop",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
        ,
        {
            url: process.env.NEXT_PUBLIC_URL + "/features",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
        ,
        {
            url: process.env.NEXT_PUBLIC_URL + "/testimonials",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
        ,
        {
            url: process.env.NEXT_PUBLIC_URL + "/faq",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
        ,
        {
            url: process.env.NEXT_PUBLIC_URL + "/contactus",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    ]

    return stacticURL.concat(productURL)
}
