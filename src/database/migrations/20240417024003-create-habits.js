'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('habits', {
      id: {
        type: Sequelize.INTEGER, // número inteiro
        allowNull: false, // campo nulo = não
        autoIncrement: true, // ele vai dar sequencia no id, cria automatico
        primaryKey: true // chave primaria
      },
      habit: {
        type: Sequelize.STRING,
        allowNull: false // campo nulo = não, todos tem que ter o nome do hábito
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: false // campo nulo = não, todos tem que ter modulo
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, // se não mandar informação nenhuma o valor dele vai ser falso
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('habits')
  }
}
