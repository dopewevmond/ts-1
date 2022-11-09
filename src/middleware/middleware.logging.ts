import * as fs from 'node:fs/promises'
import { Request, Response, NextFunction } from 'express'
import requestDetails from '../helpers/helpers.requestdetails'

async function LoggingMiddleware(req:Request, res: Response, next: NextFunction) {
  const analytics_details: string = requestDetails(req) + '\n'
  try {
    await fs.writeFile('./logs.txt', analytics_details, { flag: 'a+'})
    next()
  } catch (err) {
    console.log(err)
    
  }
}

export default LoggingMiddleware