import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return{
        rules: [
            {
                userAgent:"*",
                allow: "/",
                disallow: ["/api", "/apix"]

            }
        ],
        sitemap: `${process.env.MY_URL}/sitemap.xml`
    }
}