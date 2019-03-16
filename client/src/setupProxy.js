

/**
 * In order for us to use a custom proxy target from our .env file, we need to
 * implement custom proxy logic. The way create-react-app does this is retarded.
 * Create-react-app will automatically detect this file and expect us to export
 * a function that accepts the express app instance as an argument. By doing this
 * they allow us to setup custom proxy behavior.
 *
 * https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
 *
 * So first we need to exactly recreate the proxy config the same way that react-dev-utils
 * would if we were to define it in our package.json
 *
 * Then once we have that, we need to exactly replicate webpack-dev-server's handling of that proxy config.
 * ...except for some reason, we can't **exactly** replicate it, because it screws up and tries to
 * proxy requests for javascript files. So, for now, there's a custom over-ride to ignore any proxy req's
 * for files ending in .js - this might screw something up in the future.
 *
 * we're referencing behavior from the following files:
 * - react-scripts/config/paths.js (generates paths for next step),
 * - react-dev-utils/WebpackDevServerUtils.js (generates the proxy config),
 * - webpack-dev-server/lib/Server.js (initializes the proxying for express)
 */

// import paths to get access to paths.appPublic, this is needed
// for utils.preparePropxy()
var paths = require("react-scripts/config/paths.js");
// import utils to create the proxy config object
var utils = require("react-dev-utils/WebpackDevServerUtils.js");
// proxy middleware we need as per create-react-app docs
var httpProxyMiddleware = require("http-proxy-middleware");
// our new proxy target, .env driven
var target = process.env.REACT_APP_PROXY;

/**
 * Recreate the webpack proxy behavior. Most of this is just cut and pasted from
 * the webpack-dev-server/lib/Server.js file.
 */
module.exports = function(app) {
  if (target) {
    var websocketProxies = [];
    /**
     * This function is what webpack-dev-server uses to actually create the proxies for express
     * This is really the only easy place to inject custom logic into the proxy configs.
     * Also, conveniently, we can wrap the context in our own custom function and this allows us
     * to do useful stuff, like ignore .js paths and log pathname to the node console!
     */
    var getProxyMiddleware = proxyConfig => {
      var oldContextLogic = proxyConfig.context || proxyConfig.path;
      var context = function(pathname, req) {
        // never proxy requests for our /static/js/ .js bundle files
        // var isJS = pathname.match(/^\/static\/js\/(.+)\.js/);
        var isJS = pathname.match(/^\/(.+)\.js/);

        if (isJS) {
          return false;
        }

        return typeof oldContextLogic === "function"
          ? oldContextLogic(pathname, req)
          : oldContextLogic;
      };

      if (proxyConfig.target) {
        return httpProxyMiddleware(context, proxyConfig);
      }
    };

    utils
      .prepareProxy(target, paths.appPublic)
      .forEach(function(proxyConfigOrCallback) {
        var proxyConfig;
        var proxyMiddleware;

        if (typeof proxyConfigOrCallback === "function") {
          proxyConfig = proxyConfigOrCallback();
        } else {
          proxyConfig = proxyConfigOrCallback;
        }

        proxyMiddleware = getProxyMiddleware(proxyConfig);

        if (proxyConfig.ws) {
          websocketProxies.push(proxyMiddleware);
        }

        app.use((req, res, next) => {
          if (typeof proxyConfigOrCallback === "function") {
            var newProxyConfig = proxyConfigOrCallback();

            if (newProxyConfig !== proxyConfig) {
              proxyConfig = newProxyConfig;
              proxyMiddleware = getProxyMiddleware(proxyConfig);
            }
          }

          var bypass = typeof proxyConfig.bypass === "function";

          var bypassUrl =
            (bypass && proxyConfig.bypass(req, res, proxyConfig)) || false;

          if (bypassUrl) {
            req.url = bypassUrl;
            next();
          } else if (proxyMiddleware) {
            return proxyMiddleware(req, res, next);
          } else {
            next();
          }
        });
      });

    /**
     * I actually have no idea if this works or not, or what it does,
     * but the webpack-dev-server file had it. I don't know if this is even valid.
     *
     * It doesn't throw any errors and websockets seem to work so we'll leave it?
     */
    websocketProxies.forEach(function(wsProxy) {
      app.on("upgrade", wsProxy.upgrade);
    });
  }
};
