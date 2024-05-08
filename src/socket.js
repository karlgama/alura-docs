import io from "./server.js"

io.on('connection', (socket) => {    
    console.log('socket conectado ID: ' + socket.id)
})