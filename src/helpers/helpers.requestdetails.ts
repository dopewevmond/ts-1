import { Request } from 'express'

function requestDetails(req: Request) {
  const time = new Date().toISOString()
  return `${req.method} ${req.path} -- ${req.ip} -- ${time} -- ${JSON.stringify(req.query)} -- ${req.statusCode}`
}

export default requestDetails