
module.exports = {
    order: 2,
    handler: (req, res, next) => {
        console.log('New Request: ' + req.timestamp)
        next()
    }
}
