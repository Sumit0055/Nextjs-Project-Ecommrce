export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/public/','/login','/signup','/profile/','/admin/*']
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}