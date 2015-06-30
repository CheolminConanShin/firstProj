/**
 * New node file
 */
var   i18n = require('i18n');
 
i18n.configure({
  // setup some locales - other locales default to en silently
  locales:['en', 'ko'],
 
  // where to store json files - defaults to './locales' relative to modules directory
  directory: './locales',
  
  defaultLocale: 'ko',
  
  // sets a custom cookie name to parse locale settings from  - defaults to NULL
  cookie: 'lang'
});
 
module.exports = function(req, res, next) {
	i18n.init(req, res);
	//var current_locale = i18n.getLocale();
	return next();
};