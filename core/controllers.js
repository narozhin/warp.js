const utils = require('./utils')

module.exports = {
    load: (dir) => utils.loadModules(dir, /(^[A-Z].+Controller)\.js$/)
}
