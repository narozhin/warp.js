const Sequelize = require('sequelize')
const utils = require('./utils')

global.__ = Sequelize

const prepareModelName = (name) => name.charAt(0).toUpperCase() + name.substr(1)

const makeModel = (name, options, sequelize) => {
  const dbName = name.toLowerCase()
  return sequelize.define(dbName, options)
}

const makeModels = (wrapper, modules, sequelize) => {
    Object.keys(modules).forEach((key) => {
        const modelName = prepareModelName(key)
        wrapper[modelName] = makeModel(key, modules[key], sequelize)
    })
    return wrapper
}

const load = (dir) => {
  const sequelize = new Sequelize(
    warp.config.db.login.database,
    warp.config.db.login.username,
    warp.config.db.login.password,
    warp.config.db.options
  )
  const modules = utils.loadModules(dir, /(^[A-Z].+)\.js$/)
  makeModels(global, modules, sequelize)
}

module.exports = {
    load: load
}
