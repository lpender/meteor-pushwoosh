Package.describe({
  name: 'lpender:pushwoosh',
  summary: 'Send and receive push notifications via Pushwoosh',
  version: '2.1.7',
  git: 'https://github.com/lpender/meteor-pushwoosh.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('cordova.js', 'web.cordova');
  api.addFiles('browser.js', 'web.browser');
  api.addFiles('server.js', 'server');
  api.use('http');
  api.export('Pushwoosh');
});

Package.onTest(function(api) {
  api.use(['server.js', 'tinytest', 'test-helpers'], 'server')
  api.addFiles(['server_spec.js'], 'server')

});

Cordova.depends({
  'pushwoosh-cordova-plugin': '5.0.1',
  'cordova-plugin-device': '1.1.1'
});

Npm.depends({
  "request": "2.51.0",
  "pushwoosh-client": "1.2.1"
});
