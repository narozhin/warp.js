const includeAll = require('include-all')

const loadConfig = (dir) => includeAll({
  dirname: dir,
  filter      :  /(.+)\.js$/,
  optional    :  true
})

module.exports = {
    load: loadConfig
}
