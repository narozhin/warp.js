const utils = require('./utils')

module.exports = {
    load: (dir) => utils.loadModules(dir, /(^[a-z].+Service)\.js$/)
}
