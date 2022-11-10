import App from './app'
import HomeRouter from './controllers/controller.main'
import UserController from './controllers/controller.user'

const app = new App([
  new HomeRouter(),
  new UserController()
])

app.listen()
