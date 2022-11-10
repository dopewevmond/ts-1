import Controller from './controller.interface'
import { Router, Request, Response } from 'express'
import TopUsers from './controller.user.topuser'

const topUsersController = new TopUsers()

class UserController implements Controller {
  public path = '/users'
  public router = Router()

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    this.router.get('/', this.HomeHandler)
    this.router.use(topUsersController.path, topUsersController.router)
  }

  private HomeHandler (req: Request, res: Response): void {
    res.send('user controller')
  }
}

export default UserController
