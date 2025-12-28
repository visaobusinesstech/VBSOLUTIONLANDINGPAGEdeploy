import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

// Configuração do sitemap
const sitemap = new SitemapStream({ 
  hostname: "https://visaobusiness.com.br",
  lastmodDate: new Date()
});

// Páginas principais do site
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/sobre", changefreq: "weekly", priority: 0.8 },
  { url: "/servicos", changefreq: "weekly", priority: 0.9 },
  { url: "/contato", changefreq: "weekly", priority: 0.7 },
  { url: "/desenvolvimento-web", changefreq: "weekly", priority: 0.8 },
  { url: "/analise-dados", changefreq: "weekly", priority: 0.8 },
  { url: "/automacao", changefreq: "weekly", priority: 0.8 },
  { url: "/rocketmail", changefreq: "weekly", priority: 0.8 },
  { url: "/depoimentos", changefreq: "monthly", priority: 0.6 },
  { url: "/blog", changefreq: "weekly", priority: 0.7 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.7 },
  { url: "/orcamento", changefreq: "weekly", priority: 0.8 }
];

// Adicionar todas as páginas ao sitemap
pages.forEach(page => {
  sitemap.write(page);
});

sitemap.end();

// Gerar o sitemap
streamToPromise(sitemap).then((data) => {
  // Salvar sitemap.xml
  writeFileSync("./public/sitemap.xml", data);
  console.log("? Sitemap gerado com sucesso: public/sitemap.xml");
  
  // Gerar robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://visaobusiness.com.br/sitemap.xml

# Crawl-delay (opcional)
Crawl-delay: 1

# Bloquear arquivos desnecessários
Disallow: /api/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /_next/
Disallow: /node_modules/`;
  
  writeFileSync("./public/robots.txt", robotsTxt);
  console.log("? Robots.txt gerado com sucesso: public/robots.txt");
  
  console.log("?? SEO otimizado! Sitemap e robots.txt criados.");
});
