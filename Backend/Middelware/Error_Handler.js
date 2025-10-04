// API for errors

const error_Handler = (err, req, res, next) => {

    const status = err.status || 500;

    const message = err.message || "Internal server error"

    const response = {
        success: false,
        status, message,
        method: req.method,
        path: req.originalUrl
    }
    console.log(`[${new Date().toISOString()} ${req.method} ${req.originalUrl}]`)

    console.log(err)

    res.status(status).json(response)

}

export default error_Handler