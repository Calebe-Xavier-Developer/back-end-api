'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdatefilesSchema extends Schema {
  up () {
    this.create('updatefiles', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name', 100).notNullable()
      table.string('path', 180).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('updatefiles')
  }
}

module.exports = UpdatefilesSchema
