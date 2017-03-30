Package.describe({
  name: 'skt:accounts-materialize',
  version: '1.0.0',
  summary: 'Materialize – Accounts UI for React in Meteor 1.4+',
  git: 'https://github.com/sekmet/accounts-materialize',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript');
  api.use('underscore');
  api.use('fourseven:scss@3.4.1');
  api.use('std:accounts-ui@1.2.19');

  api.addFiles([
    'styles.scss'
  ], 'client');

  api.mainModule('main.jsx');
});
