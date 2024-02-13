const path = require("path");
module.exports = {
  entry: {
    "bundle.js": [
      path.resolve(__dirname, "dist/insurance-details/polyfills.js"),
      path.resolve(__dirname, "dist/insurance-details/styles.css"),
      path.resolve(__dirname, "dist/insurance-details/main.js"),
    ],
  },
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};