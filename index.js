var transformTools = require('browserify-transform-tools');
var LSRequireCore = require('lsrequire-core').LSRequireCore;

var transformToolsConfig = {
  jsFilesOnly: true,
  fromSourceFileDir: true
};

module.exports = transformTools.makeRequireTransform("lsrequireify", transformToolsConfig,
  function (args, opts, cb) {
    var lsrequire = new LSRequireCore(opts.config);
    var requestedFile = args[0];

    try {
      var resolvedFile = lsrequire.resolve(requestedFile, opts.file);
      cb(null, "require('" + resolvedFile + "')");
    } catch (e) {
      cb(e.message);
    }
  }
);
