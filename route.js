/*
  It's all by  `canner-core` to transform
*/
var route = [
    {
      data: {
        path: './',
        title: '從設計思考出發的視覺化網頁應用',
      },
      partials: './partial.js',
      layout:  "./layout/index.hbs",
      filename: "./index.html"
    },
    {
      data: {
        path: './',
        title: '深度議題',
      },
      partials: './partial.js',
      layout:  "./layout/issue.hbs",
      filename: "./issue.html"
    },
    {
      data: {
        path: './',
        title: '3D & VR',
      },
      partials: './partial.js',
      layout:  "./layout/3dvr.hbs",
      filename: "./3dvr.html"
    }
  ];
module.exports = route;