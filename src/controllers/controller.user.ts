import Controller from "./controller.interface"
import { Router, Request, Response} from 'express'

class UserController implements Controller {
  public path = "/users"
  public router = Router()

  constructor() {
    this.setupRoutes()
  }

  private setupRoutes(): void {
    this.router.get('/', this.HomeHandler)
  }

  private HomeHandler(req: Request, res: Response): void {
    res.send("user controller")
  }
}

export default UserController