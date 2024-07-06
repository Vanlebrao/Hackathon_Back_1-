import { Router } from 'express'
import authMiddleware from '../src/App/middleware/auth.js'
import ClassController from './App/Controllers/ClassController.js'
import CourseController from './App/Controllers/CourseController.js'
import HabitsController from './App/Controllers/HabitsController.js'
import ModuleController from './App/Controllers/ModuleController.js'
import SessionController from './App/Controllers/SessionController.js'
import UserController from './App/Controllers/UserController.js'
import WeekdaysController from './App/Controllers/WeekdaysController.js'
import AulaController from './App/Controllers/AulaController.js'

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

routes.post('/aula', AulaController.store) // nesta rota vamos criar uma nova aula
routes.get('/aula', AulaController.index) // rota de get para mostrar todas as aulas do banco de dados
routes.put('/aula/:id', AulaController.update) // rota put para alterar os dados das aulas de um id expecífico.
routes.delete('/aula/:id', AulaController.delete) // rota delete para deletar uma aula de um id expecífico.

routes.post('/weekday', WeekdaysController.store) // nesta rota vamos criar os dias da semana
routes.get('/weekday', WeekdaysController.index) // rota de get para mostrar todas os dias da semana
routes.put('/weekday/:id', WeekdaysController.update) // rota put para alterar o nome do dia da semana de um id expecífico.

routes.post('/module', ModuleController.store) // nesta rota vamos criar os módulos
routes.get('/module', ModuleController.index) // rota de get para mostrar todas os módulos cadastrados
routes.put('/module/:id', ModuleController.update) // rota put para alterar o nome do módulo de um id expecífico.

routes.post('/course', CourseController.store) // nesta rota vamos criar os cursos
routes.get('/course', CourseController.index) // rota de get para mostrar todas os cursos
routes.put('/course/:id', CourseController.update) // rota put para alterar o nome do curso de um id expecífico.

routes.post('/habits', HabitsController.store) // nesta rota vamos criar um novo hábito
routes.get('/habits', HabitsController.index) // rota de get para mostrar todos os hábitos do banco de dados
routes.put('/habits/:id', HabitsController.update) // rota put para alterar os dados dos hábitos de um id expecífico.

export default routes
