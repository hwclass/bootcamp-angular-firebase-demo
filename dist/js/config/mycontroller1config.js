"use strict";define(function(){return["LocaleService",function(LocaleService){return{firebase:{url:"https://xxx.firebaseio.com/"},getLang:function(){return LocaleService.locales[0].lang},setLang:function(lang){LocaleService.setLang(lang),console.log(lang)},getLocale:function(lang){return LocaleService.locales[0][lang]},isLast:function(isLast){return isLast},getLength:function(arr){return arr?arr.length:0}}}]});