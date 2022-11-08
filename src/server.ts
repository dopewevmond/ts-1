import App from "./app"
import HomeRouter from "./controllers/controller.main"

const app = new App([
  new HomeRouter()
])

app.listen()