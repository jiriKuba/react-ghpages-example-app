/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const enLocaleData = require('react-intl/locale-data/en'); //eslint-disable-line
const csLocaleData = require('react-intl/locale-data/cs'); //eslint-disable-line

const enTranslationMessages = require('./translations/en.json'); //eslint-disable-line
const csTranslationMessages = require('./translations/cs.json'); //eslint-disable-line

addLocaleData(enLocaleData);
addLocaleData(csLocaleData);

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'cs',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  cs: formatTranslationMessages('cs', csTranslationMessages),
};

exports.appLocales = appLocales; //eslint-disable-line
exports.formatTranslationMessages = formatTranslationMessages; //eslint-disable-line
exports.translationMessages = translationMessages; //eslint-disable-line
exports.DEFAULT_LOCALE = DEFAULT_LOCALE; //eslint-disable-line