const loggerMiddleware = (req, res, next) => {
  console.log(`Request recibido: ${req.method} ${req.url}`)
  res.locals.currentRoute = req.url

  next()
}

export default loggerMiddleware
