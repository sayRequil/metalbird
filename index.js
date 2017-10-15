var kernel = require('./kernel/kernel.js');
var storage = require('./kernel/storage.json');
var actionBar = require('./actionbar.js');

var page = window.document
var header = page.GetElementById('actionbar');  // Manage action bar

var body = page.GetElementById('body');

var managebar = new actionBar(header);
var appOpen = new kernel();

appOpen.onOpen((function(app)) {
  managebar.setTitle(app.Name);
  storage.appOpen = app.Name;
  body.innerHtml = new File(app.filePath).readIn
}

appOpen.onClose((function(app)) {
  managebar.setTitle('Metalbird');
  var index = new File('./index.html');
  storage.appOpen = '!none';
  var code = '';
  while (!index.eof) {
		code += index.readln() + '\n';
	};
  body.innerHtml = code;
};
