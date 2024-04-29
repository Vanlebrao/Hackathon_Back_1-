import Sequelize, { Model } from 'sequelize'

class Module extends Model {
  static init (sequelize) {
    super.init({ // campo Id é gerado automaticamente por isso não está aqui
      module: Sequelize.STRING
    },
    {
      sequelize,
      tableName: 'module' // Definindo o nome correto da tabela
    })
    return this
  }
}
export default Module
