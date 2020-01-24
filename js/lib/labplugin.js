var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-splitpanes',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-splitpanes',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

