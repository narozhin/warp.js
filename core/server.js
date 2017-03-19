const express = require('express')
const app = express()

const registerMiddlewares = () => {
    warp.middlwares.forEach((middleware) => app.use(middleware.handler))
}

const registerRoutes = () => {
    Object.keys(warp.config.routes).forEach((key) => {
        const method = warp.config.routes[key].method
        const handler = warp.config.routes[key].handler
        app[method](key, handler)
    })
}

const initServer = () => {
    registerMiddlewares()
    registerRoutes()
    app.set('views', warp.config.server.view.path)
    app.set('view engine', warp.config.server.view.engine)
    app.use(express.static(warp.config.server.public))
    return app
}

const startServer = (callback) => {
    initServer().listen(warp.config.server.port, () => {
        warp.logger.info('Server started on port ' + warp.config.server.port)
        warp.app = app
        callback()
    })
}


module.exports = {
    start: startServer
}
