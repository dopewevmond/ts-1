import App from './app'
import HomeRouter from './controllers/controller.main'
import DogBreeds from './controllers/controller.dog'

const app = new App([
  new HomeRouter(),
  new DogBreeds()
])

app.listen()
