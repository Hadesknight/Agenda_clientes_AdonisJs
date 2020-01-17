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
      table.string('cpf').notNullable().unique()
      table.string('profession').notNullable()
      table.date('birth_date').notNullable()
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('district').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('cep').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
