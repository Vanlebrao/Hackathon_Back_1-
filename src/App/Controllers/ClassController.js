/* eslint-disable camelcase */

import * as Yup from 'yup'
import Class from '../models/Class.js'
import User from '../models/User.js'
import Weekdays from '../models/Weekdays.js'

class ClassController {
  async store (request, response) {
    const schema = Yup.object().shape({ // formato do objeto abaixo:
      course: Yup.string().required(),
      module: Yup.string().required(), // após criar o relacionamento, alteraremos o "module: Yup.string()" para "YUP.number"
      lesson: Yup.string().required(),
      time: Yup.string().required(),
      weekday_id: Yup.number() // não é obrigatório
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

    const { course, module, lesson, time, weekday_id } = request.body // após criar o relacionamento, adicionamos "weekday_id"

    const classDev = await Class.create({
      course,
      module,
      lesson,
      time,
      weekday_id // após criar o relacionamento, criamos "weekday_id"
    })

    return response.json(classDev)
  }

  async index (request, response) {
    const classDev = await Class.findAll({ // procure todos as aulas dentro dessa variavel //após criar o relacionamento, dentro dos parênteses vamos adicionar:
      include: [ // vamos incluir os itens abaixo:
        {
          model: Weekdays, // vamos pegar do model Weekdays
          as: 'weekday', // vamos chama-lo de weekday
          attributes: ['id', 'name'] // e vamos pegar os itens id e name apenas
        }
      ]
    })

    console.log(request.userId)

    return response.json(classDev) // retorna todos as aulas
  }

  async update (request, response) { // copiamos o store lá de cima pra ficar mais prático
    const schema = Yup.object().shape({ // formato do objeto abaixo:
      course: Yup.string(),
      module: Yup.string(), // após criar o relacionamento, alteraremos o "module: Yup.string()" para "YUP.number"
      lesson: Yup.string(),
      time: Yup.string(),
      weekday_id: Yup.number()
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

    // após as validações vamos verificar se o ID digitado para a alteração é um ID válido
    const id = request.params.id
    const classDev = await Class.findByPk(id)
    if (!classDev) {
      return response.status(401).json({ error: 'Make sure your class ID is correct' })
    }

    const { course, module, lesson, time, weekday_id } = request.body

    await Class.update({ // aqui eu to dizendo pra ele que dentro de produtos vamos alterar os itens abaixo
      course,
      module, // porém como na validação não é obrigatório, o Sequelize nos ajuda com isso e entende que se não colocamos, não vamos alterar
      lesson, // qualquer um desses itens
      time,
      weekday_id
    },
    { where: { id } } // aqui falamos onde vamos alterar esses dados da tabela do Class, no id 2, por exemplo.
    )

    return response.status(200).json({ message: 'Class was updated' })
  }
}

export default new ClassController()
