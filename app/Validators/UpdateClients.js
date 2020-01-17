'use strict'

class UpdateClients {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      email: 'email'
    }
  }

  get messages() {
    return {
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'cpf.unique': 'This CPF is already registered.'

    }
  }
}

module.exports = UpdateClients
