const path = require("path");

/** @type {import("next-i18next").UserConfig} */
const config = {
  ...i18nConfig,
  localePath: path.resolve("./public/static/locales"),
};

module.exports = config;
