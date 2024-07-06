import Sequelize, { Model } from 'sequelize'

class Habits extends Model {
  static init (sequelize) {
    super.init({ // campo Id é gerado automaticamente por isso não está aqui
      habit: Sequelize.STRING,
      day: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN
    },
    {
      sequelize
    })
    return this
  }
}

export default Habits
