const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')
const Twit = require('twit')
const mockServer = require('../bin/mock-server')

const app = express()

const T = new Twit({
  consumer_key:         'AgybNjxBmiJ9FByUoqCND31rp',
  consumer_secret:      'F70uuuFhOicsp6vUXXwLk8mQD6S5WQov6GiqYEfqP0yGaULAH8',
  access_token:         '50782991-gpQtc5RsE1ZyfhfkOyamFj7K2QGqLF7Wz9I9frpJv',
  access_token_secret:  '0NsP4hCXd2vqkQwkOvKE7PVcNGH9uv1fjW8PaF0Dwey4v',
  timeout_ms:           60 * 1000
})

app.get('/tweets', function (request, response) {
  const options = project.twitter.search
  T.get('search/tweets', { options, q: request.query.search },
    (err, data, twitterResponse) => {
      if (err) throw err
      response.send(data)
    }
  )
})

mockServer.addMockRestMethods(app)

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
app.use(require('connect-history-api-fallback')())

// Apply gzip compression
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
}

module.exports = app
