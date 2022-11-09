import { Request } from 'express'

/**
 * Gets details about a request which can be used for logging and analytics
 * @param req The request object
 * @returns method, path, IP address, time, query parameters, status code of  `req`
 */
function requestDetails(req: Request) {
  const time = new Date().toISOString()
  return `${req.method} ${req.path} -- ${req.ip} -- ${time} -- ${JSON.stringify(req.query)} -- ${req.statusCode}`
}

export default requestDetails