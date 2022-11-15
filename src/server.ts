import App from './app'
import HomeRouter from './controllers/controller.main'
import DogBreeds from './controllers/controller.dog'
import LimitedController from './controllers/controller.limited'
import RegexController from './controllers/controller.regex'

const app = new App([
  new HomeRouter(),
  new DogBreeds(),
  new LimitedController(),
  new RegexController()
])

app.listen()
