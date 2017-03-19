const includeAll = require('include-all')

const loadModules = (dir, filter) => includeAll({
    dirname     : dir,
    filter      : filter || /(.+)\.js$/,
    optional    : true
})

const cloneObject = (obj) => JSON.parse(JSON.stringify(obj))

const extend = (wrapper, obj) => {
    Object.keys(obj).forEach((key) => {
        wrapper[key] = obj[key]
    })
    return wrapper
}

const objectToArray = (obj) => {
    const result = []
    Object.keys(obj).forEach((key) => result.push(obj[key]))
    return result
}

module.exports = {
    cloneObject: cloneObject,
    extend: extend,
    objectToArray: objectToArray,
    loadModules: loadModules
}
