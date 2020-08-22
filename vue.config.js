const baseUrl = 'https://lanthiercodes.com';
const blogs = require('./src/blogs/blogs.json');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const paths = [
  {
    path: '/',
    lastmod: new Date().toISOString().slice(0,10),
    priority: '0.8',
    changefreq: 'hourly'
  },
];

for (let blog of blogs) {
  paths.push({
    path: baseUrl + '/' + encodeURI(blog.title),
    lastmod: blog.date.toString(),
    priority: '0.8',
    changefreq: 'weekly'
  })
}

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://lanthiercodes.com', paths, {
        filename: 'sitemap.xml',
        lastmod: true,
        changefreq: 'daily',
        priority: '0.8'
      })
    ]
  }
}