import { Request, Response, NextFunction } from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

function AnalyticsMiddleware (req: Request, res: Response, next: NextFunction): void {
  console.log(requestDetails(req, res))
  next()
}

export default AnalyticsMiddleware
