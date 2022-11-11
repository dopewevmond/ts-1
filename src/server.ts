import App from './app'
import HomeRouter from './controllers/controller.main'
import UserController from './controllers/controller.dog'

const app = new App([
  new HomeRouter(),
  new UserController()
])

app.listen()
