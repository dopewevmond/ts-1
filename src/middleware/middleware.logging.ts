import * as fs from 'node:fs/promises'
import { Request, Response, NextFunction } from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

async function LoggingMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
  const analyticsDetails: string = requestDetails(req, res) + '\n'
  try {
    await fs.writeFile('./logs.txt', analyticsDetails, { flag: 'a+' })
  } catch (err) {
    console.log(err)
  }
  next()
}

export default LoggingMiddleware
