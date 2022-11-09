import { Request, Response, NextFunction} from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

function AnalyticsMiddleware(req: Request, res: Response, next: NextFunction): void {
  console.log(requestDetails(req))
  next()
}

export default AnalyticsMiddleware