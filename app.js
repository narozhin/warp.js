const path = require('path')
const modelsManager = require('./core/models')
const configManager = require('./core/config')
const conntollersManager = require('./core/controllers')
const middlwaresManager = require('./core/middlewares')
const server = require('./core/server')
const logger = require('./core/logger')

global.warp = {}

warp.controllers = conntollersManager.load(path.join(__dirname, 'controllers')),
warp.middlwares = middlwaresManager.load(path.join(__dirname, 'middlewares')),
warp.logger = logger
warp.config = configManager.load(path.join(__dirname, 'config')),

server.start(() => {
    modelsManager.load(path.join(__dirname, 'models'))
})
