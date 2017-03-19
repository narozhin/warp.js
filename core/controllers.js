const includeAll = require('include-all')

const loadControllers = (dir) => includeAll({
  dirname: dir,
  filter      :  /(^[A-Z].+Controller)\.js$/,
  optional    :  true
})

module.exports = {
    load: loadControllers
}
