const utils = require('./utils')

loadMiddlewares = (dir) => {
    const modules = utils.loadModules(dir)
    return utils.objectToArray(modules).sort((first, second) => {
        const o1 = first.order || 100
        const o2 = second.order || 100
        return o1 > o2
    })
}

module.exports = {
    load: loadMiddlewares
}
