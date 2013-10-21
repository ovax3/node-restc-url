RestC - URL
===========

Install
-------

    npm install restc-url

Usage
-----

    var client = restc(
      {
        url: 'http://localhost:1337/hello'
      },
      require('restc-url').parser
    );

will be equivalent to

    var client = restc({
      hostname: 'localhost',
      port: 1337,
      path: '/hello'
    });

