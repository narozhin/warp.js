
module.exports = {
    index: (req, res) => {
        User.findOne().then((user) => {
          res.render('index', {name: user.name})  
        })
    }
}
