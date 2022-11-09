import { Request, Response, NextFunction} from 'express'

function AnalyticsMiddleware(req: Request, res: Response, next: NextFunction) {
  const time = new Date().toISOString()
  console.log(`${req.method} ${req.path} -- ${req.ip} -- ${time} -- ${JSON.stringify(req.query)} -- ${req.statusCode}`)
  next()
}

export default AnalyticsMiddleware