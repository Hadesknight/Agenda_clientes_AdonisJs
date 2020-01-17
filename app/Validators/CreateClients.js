'use strict'

class CreateClients {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      name: 'required | string',
      telephone: 'required',
      email: 'required | email | unique:clients,email',
      cpf: 'required |unique:clients,cpf',
      profession: 'required ',
      birth_date: 'required ',
      street: 'required ',
      number: 'required ',
      district: 'required ',
      city: 'required ',
      state: 'required ',
      cep: 'required '
    }
  }

  get messages() {
    return {
      'name.required': 'You must provide a FullName.',
      'telephone.required': 'You must provide a valid telephone.',
      'email.required ': 'You must provide a valid email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'cpf.required ': 'You must provide a valid Cpf.',
      'cpf.unique': 'This CPF is already registered.',
      'profession.required ': 'You must provide a Profession.',
      'birth_date.required': 'You must provide a Birth date.',
      'street.required ': 'You must provide a name of street.',
      'number.required ': 'You must provide a number of house.',
      'district.required': 'You must provide a name of district.',
      'city.required': 'You must provide a name of City.',
      'state.required ': 'You must provide a your of State.',
      'cep.required': 'You must provide a valid Cep.'

    }
  }
}

module.exports = CreateClients
