import Hapi from 'hapi'
import getRoute from '../routes/getRoute.js'
import postRoute from '../routes/postRoute.js'
import putRoute from '../routes/putRoute.js'
import deleteRoute from '../routes/deleteRoute.js'

const server = new Hapi.Server()

server.connection({
    port:3000, 
    host:'localhost',
    routes: {
        cors: {
            origin: ['*']
        }
    }
})

server.route(getRoute)
server.route(postRoute)
server.route(putRoute)
server.route(deleteRoute)

server.start()
  .then(() => {
      console.log('server started at:' + server.info.uri)
  })
  .catch((err) => {
      console.error(err)
  })