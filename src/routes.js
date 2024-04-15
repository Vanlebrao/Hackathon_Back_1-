import { Router } from 'express'
import authMiddleware from '../src/App/middleware/auth.js'
import ClassController from './App/Controllers/ClassController.js'
import SessionController from './App/Controllers/SessionController.js'
import UserController from './App/Controllers/UserController.js'
import WeekdaysController from './App/Controllers/WeekdaysController.js'

const routes = new Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Word' })
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware) // todas as rotas que tiverem abaixo disso (aqui no código) vão receber meu Middleware e será autenticado

routes.post('/class', ClassController.store) // nesta rota vamos criar uma nova aula
routes.get('/class', ClassController.index) // rota de get para mostrar todas as aulas do banco de dados
routes.put('/class/:id', ClassController.update) // rota put para alterar os dados das aulas de um id expecífico.

routes.post('/weekday', WeekdaysController.store) // nesta rota vamos criar os dias da semana
routes.get('/weekday', WeekdaysController.index) // rota de get para mostrar todas os dias da semana
routes.put('/weekday/:id', WeekdaysController.update) // rota put para alterar o nome do dia da semana de um id expecífico.

export default routes
