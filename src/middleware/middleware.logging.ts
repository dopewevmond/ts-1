import * as fs from 'node:fs/promises'
import { Request, Response, NextFunction } from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

function LoggingMiddleware (req: Request, res: Response, next: NextFunction): void {
  // const analyticsDetails: string = requestDetails(req) + '\n'
  // try {
  //   await fs.writeFile('./logs.txt', analyticsDetails, { flag: 'a+' })
  //   next()
  // } catch (err) {
  //   console.log(err)
  //   next()
  // }
  const analyticsDetails = requestDetails(req) + '\n';
  (async () => {
    await fs.writeFile('./logs.txt', analyticsDetails, { flag: 'a+' })
  })()
    .catch(err => { console.log(err) })
  next()
}

export default LoggingMiddleware
