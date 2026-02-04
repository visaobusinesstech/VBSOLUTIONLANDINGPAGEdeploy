import { writeFileSync } from "fs";
import { globby } from "globby";

async function generateSitemap() {
  const pages = await globby([
    "app/**/*.js",
    "!app/_*.js",
    "!app/**/[id].js"
  ]);

  const baseUrl = "https://visaobusiness.com.br";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(page => {
    const path = page
      .replace("app/", "")
      .replace(".js", "")
      .replace("index", "");
    const route = path ? `/${path}` : "";
    return `<url><loc>${baseUrl}${route}</loc></url>`;
  })
  .join("\n")}
</urlset>`;

  writeFileSync("public/sitemap.xml", sitemap);
  console.log("Sitemap gerado com sucesso!");
}

generateSitemap();
