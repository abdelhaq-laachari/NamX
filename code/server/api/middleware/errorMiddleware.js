const errorHandler = (err, req, res, next) => 
{
    const satatusCode = res.satatusCode ? res.satatusCode : 500
    res.status(satatusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        
    })
}
module.exports = {
    errorHandler,
}