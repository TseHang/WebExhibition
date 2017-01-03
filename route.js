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
    },
    {
      data: {
        path: './',
        title: '有趣小應用',
      },
      partials: './partial.js',
      layout:  "./layout/simple-app.hbs",
      filename: "./simple-app.html"
    },
    {
      data: {
        path: './',
        title: '視覺化圖表',
      },
      partials: './partial.js',
      layout:  "./layout/visualization.hbs",
      filename: "./visualization.html"
    },
    {
      data: {
        path: './',
        title: '報導故事書',
      },
      partials: './partial.js',
      layout:  "./layout/story.hbs",
      filename: "./story.html"
    },
    {
      data: {
        path: './',
        title: '遊戲',
      },
      partials: './partial.js',
      layout:  "./layout/game.hbs",
      filename: "./game.html"
    }
  ];
module.exports = route;