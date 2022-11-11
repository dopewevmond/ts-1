import Controller from './controller.interface'
import { Router, Request, Response } from 'express'
import LoggingMiddleware from '../middleware/middleware.logging'

class HomeRouter implements Controller {
  public path = '/'
  public router = Router()

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.router.all('/', LoggingMiddleware)
    this.router.get(this.path, this.homeHandlerGet)
  }

  private homeHandlerGet (req: Request, res: Response): void {
    res.json({
      data: 'Home controller'
    })
  }
}

export default HomeRouter
