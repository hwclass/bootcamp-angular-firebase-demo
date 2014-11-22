'use strict';

define(['json!../data/locales.json!bust'], function(locales) {
  return function () {
    return {
    	lang : locales.lang,
      locales : locales,
      setLang : function (lang) {
      	this.lang = lang;
      }
    };
  }
});