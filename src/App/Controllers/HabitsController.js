/* eslint-disable camelcase */

import * as Yup from 'yup'
import Habits from '../models/Habits.js'

class HabitController {
  async store (request, response) {
    const schema = Yup.object().shape({ // formato do objeto abaixo:
      habit: Yup.string().required(),
      day: Yup.number().required().min(1).max(31),
      status: Yup.boolean()
    })

    // caso ele não atenda ao formato exigido acima ele vai dar erro conforme no UserControllers, dizendo o que está de errado
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { habit, day, status } = request.body

    const habitsDev = await Habits.create({
      habit,
      day,
      status
    })

    return response.json(habitsDev)
  }

  async index (request, response) {
    try {
      const habitsDev = await Habits.findAll() // procure todos os hábitos dentro dessa variavel
      return response.json(habitsDev) // retorna todos os hábitos
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update (request, response) { // copiamos o store lá de cima pra ficar mais prático
    const schema = Yup.object().shape({ // formato do objeto abaixo:
      habit: Yup.string(),
      day: Yup.number().min(1).max(31),
      status: Yup.boolean()
    })

    // caso ele não atenda ao formato exigido acima ele vai dar erro conforme no UserControllers, dizendo o que está de errado
    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    // após as validações vamos verificar se o ID digitado para a alteração é um ID válido
    const id = request.params.id
    const habitsDev = await Habits.findByPk(id)
    if (!habitsDev) {
      return response.status(401).json({ error: 'Make sure your class ID is correct' })
    }

    const { habit, day, status } = request.body

    await Habits.update({ // aqui eu to dizendo pra ele que dentro de Habitos vamos alterar os itens abaixo
      habit,
      day,
      status
    },
    { where: { id } } // aqui falamos onde vamos alterar esses dados da tabela do Habits, no id 2, por exemplo.
    )

    return response.status(200).json({ message: 'Habits was updated' })
  }
}

export default new HabitController()
