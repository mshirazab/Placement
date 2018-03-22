const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  let newConfig = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config); // change importing css to less
  newConfig = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
  })(newConfig, env);
  return newConfig;
};
