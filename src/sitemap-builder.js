require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("../src/Routes/index").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
  .build("https://sierratextiles.com.pk")
  .save("./public/sitemap.xml");
