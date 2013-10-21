var url = require('url');

module.exports.parser = {
  setup: function (options, next) {
    var url_ = options.url;
    if (url_) {
      var infos = url.parse(url_);

      options.hostname = infos.hostname;
      options.port = (infos.port ? parseInt(infos.port) : 80);
      options.path = infos.pathname == '/' ? '' : infos.pathname;
      if (infos.auth) options.auth = infos.auth;

      delete options.url;
    }

    return next();
  }
};

