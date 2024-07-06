import Sequelize, { Model } from 'sequelize'

class Class extends Model {
  static init (sequelize) {
    super.init({ // campo Id é gerado automaticamente por isso não está aqui
      lesson: Sequelize.STRING,
      time: Sequelize.STRING,
      status: Sequelize.BOOLEAN
    },
    {
      sequelize
    })
    return this
  }

  static associate (models) { // reacionamento, 1 aula para 1 dia da semana, ou seja, uma aula não pode ter dois dias da semana
    this.belongsTo(models.Weekdays, { foreignKey: 'weekday_id', as: 'weekday' }) // belongsto=pertence  // pertence ao model de weekday,
    // a chave estrangeira (coluna) que no caso tem na minha tabela se chama "weekday_id" mas vamos chama-la de 'Weekday'
    // além disso precisamos avisar o index.js (database) sobre o relacionamento
    this.belongsTo(models.Module, { foreignKey: 'module_id', as: 'module' })
  }
}

export default Class
