'use strict';

define(function () {
  return ['VersionService', function(versionService) {
    return function(scope, elm, attrs) {
      elm.text(versionService.version);
    };
  }];
});