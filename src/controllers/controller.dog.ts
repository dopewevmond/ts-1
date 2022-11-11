import Controller from './controller.interface'
import { Router, Request, Response } from 'express'
import { readFile } from 'fs/promises'
import AnalyticsMiddleware from '../middleware/middleware.analytics'

class DogBreeds implements Controller {
  public path = '/dogs'
  public router = Router()

  constructor () {
    this.setupRoutes()
  }

  private setupRoutes (): void {
    this.router.use(AnalyticsMiddleware)
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.router.get(this.path, this.homeHandler)
  }

  private async homeHandler (req: Request, res: Response): Promise<void> {
    const dogData = await readFile('./data/dog_breeds.json', { encoding: 'utf-8' })
    res.json(JSON.parse(dogData))
  }
}

export default DogBreeds
