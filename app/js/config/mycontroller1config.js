'use strict';

define(function () {
	'use strict';
  return ['LocaleService', function (LocaleService) {
    return {
      firebase : {
        url : 'https://xxx.firebaseio.com/'
      },
      getLang : function () {
      	return LocaleService.locales[0]['lang'];
      },
      setLang : function (lang) {
      	LocaleService.setLang(lang);
      	console.log(lang);
      },
			getLocale : function (lang) {
      	return LocaleService.locales[0][lang];
      },
      /*
       * isLast() : gets if an index of an array is on the last index or not 
       */
      isLast : function (isLast) {
        return (isLast);
      },

      /*
       * getLength() : gets the length of given array
       */
      getLength : function(arr) {
        return (arr ? arr.length : 0);
      }
    };
  }];
});