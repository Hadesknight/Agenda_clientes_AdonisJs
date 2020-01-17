'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.group(() => {
  Route.resource('clients', 'ClientController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['clients.store'], ['CreateClients']
        ], [
          ['clients.update'], ['UpdateClients']
        ]
      ]
    ))
}).middleware(['auth'])
