const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const generateSitemap = async () => {
  const urls = [
    { url: "/#/", changefreq: "daily", priority: 1.0 },
    { url: "/#/product", changefreq: "weekly", priority: 0.8 },
    { url: "/#/about", changefreq: "weekly", priority: 0.8 },
    { url: "/#/contact", changefreq: "weekly", priority: 0.8 },
  ];

  const stream = new SitemapStream({ hostname: "https://yourwebsite.com" });

  urls.forEach((url) => {
    stream.write(url);
  });

  stream.end();

  const sitemapInstance = await streamToPromise(stream);

  fs.writeFileSync("public/sitemap.xml", sitemapInstance.toString());
  console.log("Sitemap generated successfully.");
};

generateSitemap();
