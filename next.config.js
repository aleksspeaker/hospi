const withTypescript = require('@zeit/next-typescript');
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require('next-fonts');

module.exports = withTypescript(withImages(withSass(withFonts({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.TTF$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config;
  }
}))));
