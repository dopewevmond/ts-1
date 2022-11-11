import { Request, Response, NextFunction } from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

// this middleware logs the details of the request to the console
function AnalyticsMiddleware (req: Request, res: Response, next: NextFunction): void {
  console.log(requestDetails(req, res))
  next()
}

export default AnalyticsMiddleware
