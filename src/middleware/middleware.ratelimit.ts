import { Request, Response, NextFunction } from 'express'
const requestTracker: Array<{ ip: string, timeOfReq: number }> = []
let reqsInLastMinute: number
const ALLOWED_REQS_PER_MINUTE = 10

// fixed window counter rate limiter
function RateLimitMiddleware (req: Request, res: Response, next: NextFunction): void {
  reqsInLastMinute = requestTracker
    .filter((request) => request.ip === req.ip)
    .filter((request) => {
      return (new Date().getTime() - request.timeOfReq) / 1000 <= 60
    }).length

  if (reqsInLastMinute < ALLOWED_REQS_PER_MINUTE) {
    console.log('allowed')
    requestTracker.push({ ip: req.ip, timeOfReq: new Date().getTime() })
  } else {
    console.log('not allowed')
  }
  next()
}

export default RateLimitMiddleware
