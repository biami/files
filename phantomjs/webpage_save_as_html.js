var page = require('webpage').create();
var fs = require('fs');

page.open('___p_url___', function() {
  fs.write('___p_file___', page.content, 'w');
  phantom.exit();
});
