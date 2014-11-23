'use strict';

define(function () {
  return function () {
    return {
      firebase : {
        url : 'https://angular-bootcamp-survey-demo.firebaseio.com/answers/answers'
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
  }
});