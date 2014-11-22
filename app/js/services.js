'use strict';

define(function(require) {
  require('angular').module('app.services', []).
    service("VersionService", require('service/version_service')).
    service("LocaleService", require('service/locale_service'));
});
