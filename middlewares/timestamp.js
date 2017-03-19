
module.exports = {
    order: 1,
    handler: (req, res, next) => {
        req.timestamp = new Date()
        next()
    }
}
