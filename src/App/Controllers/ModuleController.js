import * as Yup from 'yup'
import Module from '../models/Module.js'
import User from '../models/User.js'

// validação dos dados que vão chegar
class ModuleController {
  async store (request, response) {
    const schema = Yup.object().shape({ // formato do objeto abaixo:
      module: Yup.string().required()
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
    const { module } = request.body

    const moduleExists = await Module.findOne({ // procurar se o dia da semana que tá ali já existe, para não cadastrar repetido
      where: { module } // se ele não acha ele retorna com null e daí cai no if.
    })
    console.log(Module)
    if (moduleExists) {
      return response.status(400).json({ error: 'Module already exists' }) // erro avisando que já existe
    }

    const { id } = await Module.create({ module })

    return response.status(201).json({ id, module })
  }

  async index (request, response) {
    try {
      const lesson = await Module.findAll() // procure todos dentro dessa variavel
      return response.json(lesson) // retorna todos
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error' })
    }
  }

  async update (request, response) {
    try {
      const schema = Yup.object().shape({ // formato do objeto abaixo:
        module: Yup.string()
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

      const { module } = request.body
      const { id } = request.params

      // vamos verificar se o ID está correto antes da alteração:
      const lesson = await Module.findByPk(id)
      if (!lesson) {
        return response.status(401).json({ error: 'Make sure your Module ID is correct' })
      }

      await Module.update({ module }, { where: { id } })

      return response.status(200).json()
    } catch (err) {

    }
  }
}

export default new ModuleController()
