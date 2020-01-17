'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up() {
    this.create('clients', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('telephone').notNullable()
      table.string('email').notNullable().unique()
      table.string('cpf', 20).notNullable().unique()
      table.string('profession').notNullable()
      table.date('birth_date').notNullable()
      table.string('street').notNullable()
      table.integer('number', 20).notNullable()
      table.string('district', 60).notNullable()
      table.string('city', 60).notNullable()
      table.string('state', 60).notNullable()
      table.string('cep', 20).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
