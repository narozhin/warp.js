const includeAll = require('include-all')
const utils = require('./utils')

const loadModules = (dir) => includeAll({
  dirname: dir,
  filter      :  /(.+)\.js$/,
  optional: true
})

loadMiddlewares = (dir) => {
    const modules = loadModules(dir)
    return utils.objectToArray(modules).sort((first, second) => {
        const o1 = first.order || 100
        const o2 = second.order || 100
        return o1 > o2
    })
}

module.exports = {
    load: loadMiddlewares
}
