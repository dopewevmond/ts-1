import { Router, Request, Response } from 'express'
import Controller from './controller.interface'
import { lowercaseRegex, numberRegex, uppercaseRegex, endsWithNumRegex } from './regex'

class RegexController implements Controller {
  public router = Router()
  public path = '/reg'

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    this.router.get(this.path, this.HomeHandler)
    this.router.use(this.path, lowercaseRegex)
    this.router.use(this.path, numberRegex)
    this.router.use(this.path, uppercaseRegex)
    this.router.use(this.path, endsWithNumRegex)
  }

  private HomeHandler (req: Request, res: Response): void {
    res.send('regex route')
  }
}

export default RegexController
