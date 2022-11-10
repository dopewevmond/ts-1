import Controller from './controller.interface'
import { Request, Response, Router } from 'express'

class TopUsers implements Controller {
  public path = '/topusers'
  public router = Router()

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    this.router.get('/', this.TopUsersHomeHandler)
  }

  private TopUsersHomeHandler (req: Request, res: Response): void {
    res.send('accessing me from a nested route!!')
  }
}

export default TopUsers
