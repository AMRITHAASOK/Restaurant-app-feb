//import json-server
const jsonserver = require('json-server');

//create server using jsonserver
const server = jsonserver.create()

//set up path for db.json file
const router = jsonserver.router('db.json')

//return a middleware used by the json server
const middleware =jsonserver.defaults()

//setup port number
const port = process.env.PORT || 3001  //default port number for backend

//use in server
server.use(middleware)
server.use(router)


//to run the port
server.listen(port,()=>{
    console.log('Jsonserver listening on port 3001');
})

