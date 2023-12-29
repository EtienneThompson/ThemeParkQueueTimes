const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          // removing comments
          comments: false,
        },
        compress: {
          // remove console.logs
          drop_console: true,
        },
      },
    }),
  ],
});
