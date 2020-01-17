'use strict'

const Clients = use('App/Models/Client')

class ClientController {
  async index() {
    const client = await Clients.all()

    return client
  }

  async store({ request, response }) {
    const data = request.all()
    try {
      const client = await Clients.create(data)

      return client
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Erro ao cadastrar clientes' } })
    }
  }

  async show({ params }) {
    const client = await Clients.findOrFail(params.id)
    return client
  }

  async update({ params, request }) {
    const client = await Clients.findOrFail(params.id)
    const data = request.all()

    client.merge(data)

    await client.save()
    return client
  }

  async destroy({ params }) {
    const client = await Clients.findOrFail(params.id)

    await client.delete()
  }
}

module.exports = ClientController
