const path = require("path");

function config(entry = []) {
  return [...entry, require.resolve("./dist/esm/preset/preview")];
}

function managerEntries(entry = []) {
  return [...entry, require.resolve("./dist/esm/preset/manager")];
}

function managerWebpack(config) {
  config.module.rules.push({
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  });

  return config;
}

module.exports = {
  managerEntries,
  managerWebpack,
  config,
};
