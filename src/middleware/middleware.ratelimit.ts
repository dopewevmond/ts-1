import { Request, Response, NextFunction } from 'express'
const SECONDS_IN_TIMEFRAME = 60
const MAXIMUM_REQS_PER_TIMEFRAME = 10

// stores the IP and time of a request
const requestTracker: Array<{ ip: string, timeOfReq: number }> = []

// Using the Sliding window counter method for the rate limiter
// it checks the number of requests a particular user (based on their IP) ...
// ... makes in a particular timeframe. if it less than the maximum requests allowed ...
// ... in the timeframe, call the next function. else, end the request here

function RateLimitMiddleware (req: Request, res: Response, next: NextFunction): void {
  const reqsInLastMinute = requestTracker
    .filter((request) => request.ip === req.ip)
    .filter((request) => {
      return (new Date().getTime() - request.timeOfReq) / 1000 <= SECONDS_IN_TIMEFRAME
    }).length

  if (reqsInLastMinute < MAXIMUM_REQS_PER_TIMEFRAME) {
    requestTracker.push({ ip: req.ip, timeOfReq: new Date().getTime() })
    next()
  } else {
    res.send('exceeded rate limit, not allowed')
  }
}

export default RateLimitMiddleware
