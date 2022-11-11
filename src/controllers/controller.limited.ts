import Controller from './controller.interface'
import { Request, Response, Router } from 'express'
import RateLimitMiddleware from '../middleware/middleware.ratelimit'

class LimitedController implements Controller {
  public path = '/limited'
  public router = Router()

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    this.router.all(this.path, RateLimitMiddleware)
    this.router.get(this.path, this.homeHandlerGet)
  }

  private homeHandlerGet (req: Request, res: Response): void {
    res.json({
      message: 'You can\'t access me more than 10 times a minute'
    })
  }
}

export default LimitedController
