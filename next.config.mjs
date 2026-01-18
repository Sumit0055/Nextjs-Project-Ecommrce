/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    dangerouslyAllowLocalIP:true,
    remotePatterns: [
      {
        protocol:'http',
        hostname:'localhost',
        port:'8000',
        pathname:'/product/**'
        // remotePatterns : [new URL('http://localhost:8000/product/**')]
      },
      //backend ka server kon se local host path par work kar rha hai ish liya aalag aalag object me bana sdakte hai
      // {
      //   protocol:'http',
      //   hostname:'localhost',
      //   port:'5000',
      //   pathname:'**'
      // }
    ]
  }
};

export default nextConfig;
