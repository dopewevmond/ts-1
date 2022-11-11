import Controller from './controller.interface'
import { Router, Request, Response } from 'express'

class HomeRouter implements Controller {
  public path = '/'
  public router = Router()

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    this.router.get(this.path, this.homeHandlerGet)
  }

  private homeHandlerGet (req: Request, res: Response): void {
    res.json({
      data: 'Home controller'
    })
  }
}

export default HomeRouter
