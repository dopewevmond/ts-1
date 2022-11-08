import { Request, Response, NextFunction} from 'express'

function AnalyticsMiddleware(req: Request, res: Response, next: NextFunction) {
  const time = new Date().toISOString()
  console.log(`${req.path} ${req.method} -- ${req.ip} ${time} ${JSON.stringify(req.query)} ${req.statusCode}`)
  next()
}

export default AnalyticsMiddleware