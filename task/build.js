require('shelljs/global');
const webpack = require('webpack');
const fs = require('fs');
const { resolve } = require('path');
const r = url => resolve(__dirname, url); 
const webpackConfig = require('./webpack.config');
const minaConfig = require(r('./mina.config'));
const assetsPath = r('../dist');

rm('-rf', assetsPath);
mkdir(assetsPath);

var renderConfig = webpackConfig;
var pageEntry = minaConfig.json.pages.reduce((en, i) => {
  en[i] = resolve(process.cwd(), './', `${i}.mina`)
  return en;
}, {});
var componentsEntry = minaConfig.components.reduce((en, i) => {
  en[i] = resolve(process.cwd(), './', `${i}.mina`)
  return en;
}, {});

renderConfig.entry = Object.assign(pageEntry, componentsEntry);

for (var j = 0; j < minaConfig.json.subPackages.length; j++) {
  var subPackageEntry = {}
  subPackageEntry = minaConfig.json.subPackages[j].pages.reduce((en, i) => {
    en[i] = resolve(process.cwd(), `${minaConfig.json.subPackages[j].root}/`, `${i}.mina`)
    return en;
  }, {});
  renderConfig.entry = Object.assign(renderConfig.entry, subPackageEntry);
}

renderConfig.entry.app = minaConfig.app;
renderConfig.output = {
  path: r('../dist'),
  filename: '[name].js'
}

var compiler = webpack(renderConfig);
fs.writeFileSync(r('../dist/app.json'), JSON.stringify(minaConfig.json), 'utf8');
compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, (err, stats) => {
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: true,
    chunks: true,
    chunkModules: true
  }) + '\n\n')
});

