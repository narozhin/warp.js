const path = require('path')

const conntollersManager = require('./core/controllers')
const middlwaresManager = require('./core/middlewares')
const servicesManager = require('./core/services')
const modelsManager = require('./core/models')
const configManager = require('./core/config')
const server = require('./core/server')
const logger = require('./core/logger')

global.warp = {}

warp.controllers = conntollersManager.load(path.join(__dirname, 'controllers'))
warp.middlwares = middlwaresManager.load(path.join(__dirname, 'middlewares'))
warp.services = servicesManager.load(path.join(__dirname, 'services'))
warp.config = configManager.load(path.join(__dirname, 'config'))
warp.logger = logger

server.start(() => {
    modelsManager.load(path.join(__dirname, 'models'))
})
