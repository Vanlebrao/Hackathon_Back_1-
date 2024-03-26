import { Router } from 'express'
import authMiddleware from '../src/App/middleware/auth.js'
import SessionController from './App/Controllers/SessionController.js'
import UserController from './App/Controllers/UserController.js'

const routes = new Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Word' })
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware) // todas as rotas que tiverem abaixo disso (aqui no código) vão receber meu Middleware e será autenticado

export default routes
