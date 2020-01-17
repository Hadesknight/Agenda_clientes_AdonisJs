'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('clients', 'ClientController').apiOnly()
}).middleware(['auth'])
