const express = require('express')
const app = express()

const registerMiddlewares = () => {
    try {
        warp.middlwares.forEach((middleware) => app.use(middleware.handler))
    } catch (e) {
        warp.logger.error('Register middlewares fail. ' + e)
    }
}

const registerRoutes = () => {
    try {
        Object.keys(warp.config.routes).forEach((key) => {
            const method = warp.config.routes[key].method
            const handler = warp.config.routes[key].handler
            app[method](key, handler)
        })
    } catch (e) {
        warp.logger.error('Register routes fail. ' + e)
    }
}

const initServer = () => {
    registerMiddlewares()
    registerRoutes()
    try {
        if(warp.config.server.view) {
            app.set('views', warp.config.server.view.path)
            app.set('view engine', warp.config.server.view.engine)
        }
        app.use(express.static(warp.config.server.public))
    } catch(e) {
        warp.logger.error('Set server configuration fail. ' + e)
    }
    return app
}

const startServer = (callback) => {
    try {
        initServer().listen(warp.config.server.port, () => {
            warp.logger.info('Server started on port ' + warp.config.server.port)
            warp.app = app
            callback()
        })
  } catch (e) {
      warp.logger.error('Starting server fail. ' + e)
  }
}


module.exports = {
    start: startServer
}
