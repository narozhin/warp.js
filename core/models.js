const includeAll = require('include-all')
const Sequelize = require('sequelize')
const utils = require('./utils')

global.__ = Sequelize

const loadModules = (dir) => includeAll({
  dirname: dir,
  filter      :  /(^[A-Z].+)\.js$/,
  optional    :  true
})

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
    warp.config.db.database,
    warp.config.db.username,
    warp.config.db.password,
    warp.config.db.options
  )
  const modules = loadModules(dir)
  makeModels(global, modules, sequelize)
}

module.exports = {
    load: load
}
