var fs = require("fs");

module.exports= function (hbs) {
  // register partials
  hbs.registerPartial('head', getPartials('head'));
  hbs.registerPartial('header', getPartials('header'));
  hbs.registerPartial('footer', getPartials('footer'));
  hbs.registerPartial('block-footer', getPartials('block-footer'));
  hbs.registerPartial('gogoGuide', getPartials('gogoGuide'));
  hbs.registerPartial('js-include', getPartials('js-include'));
};

function getPartials(filename) {
  var template = fs.readFileSync('./layout/partial/'+filename+'.hbs', 'utf8');
  template = template.replace(/[\t\n]/g, '');
  return template;
}
