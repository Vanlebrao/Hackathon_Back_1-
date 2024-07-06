import * as Yup from 'yup'
import User from '../models/User.js'
import Weekdays from '../models/Weekdays.js'

// validação dos dados que vão chegar
class WeekdaysController {
  async store (request, response) {
    const schema = Yup.object().shape({ // formato do objeto abaixo:
      name: Yup.string().required()
    })

    // caso ele não atenda ao formato exigido acima ele vai dar erro conforme no UserControllers, dizendo o que está de errado
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }
    // verficando se a pessoa que está logado é o admin:
    const { admin: isAdmin } = await User.findByPk(request.userId) // Ele vai pegar as informações de userid dentro do token e vai pegar a informação admin que tem dentre as informações do usuário (true ou false)
    if (!isAdmin) {
      return response.status(401).json()
    }

    // arquivos validados, vamos pegalos:
    const { name } = request.body

    const weekdayExists = await Weekdays.findOne({ // procurar se o dia da semana que tá ali já existe, para não cadastrar repetido
      where: { name } // se ele não acha ele retorna com null e daí cai no if.
    })
    console.log(Weekdays)
    if (weekdayExists) {
      return response.status(400).json({ error: 'Weekday already exists' }) // erro avisando que já existe
    }

    const { id } = await Weekdays.create({ name })

    return response.status(201).json({ id, name })
  }

  async index (request, response) {
    try {
      const week = await Weekdays.findAll() // procure todos os dias da semana dentro dessa variavel
      return response.json(week) // retorna todos os dias
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update (request, response) {
    try {
      const schema = Yup.object().shape({ // formato do objeto abaixo:
        name: Yup.string()
      })

      // caso ele não atenda ao formato exigido acima ele vai dar erro conforme no UserControllers, dizendo o que está de errado
      try {
        await schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
        return response.status(400).json({ error: err.errors })
      }
      // verficando se a pessoa que está logado é o admin:
      const { admin: isAdmin } = await User.findByPk(request.userId) // Ele vai pegar as informações de userid dentro do token e vai pegar a informação admin que tem dentre as informações do usuário (true ou false)
      if (!isAdmin) {
        return response.status(401).json()
      }

      const { name } = request.body
      const { id } = request.params

      // vamos verificar se o ID está correto antes da alteração:
      const week = await Weekdays.findByPk(id)
      if (!week) {
        return response.status(401).json({ error: 'Make sure your Weekdays ID is correct' })
      }

      await Weekdays.update({ name }, { where: { id } })

      return response.status(200).json()
    } catch (err) {

    }
  }
}

export default new WeekdaysController()
