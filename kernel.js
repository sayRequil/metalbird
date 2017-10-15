var storage = require('./storage.json');
var document = window.document;

module.exports = class kernel {
  function new(appName,appFunction) {
    this.onOpen(function(app) {
      if (app.name == appName) {
        appFunction.call()
      };
    });
  };
  this.onOpen = (function(func) {
    while (true) {
      if storage.appOpen == '!none' {
        print('No app open.');
      } else {
        data = {
        };
        func.call(storage.appOpen);
      };
    };
  });
  this.onClose = (function(func) {
    while (true) {
      if storage.appOpen == '!none' {
        func.call(app);
      } else {
        print('App open.');
      };
    };
  });
};
