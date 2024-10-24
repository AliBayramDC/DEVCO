import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return[
        {
            url: `${process.env.MY_URL}/(landing-page)`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/maliyye`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/attestasiya`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/contact2`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/vebsayt`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/excel`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/mko`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/haqqimizda`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.MY_URL}/data-analitika`,
            lastModified: new Date(),
        },
    ]
}