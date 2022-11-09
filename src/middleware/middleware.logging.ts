import * as fs from 'node:fs/promises'
import { Request, Response, NextFunction } from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

async function LoggingMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
  const analyticsDetails: string = requestDetails(req) + '\n'
  try {
    await fs.writeFile('./logs.txt', analyticsDetails, { flag: 'a+' })
    next()
  } catch (err) {
    console.log(err)
    next()
  }
}

export default LoggingMiddleware
