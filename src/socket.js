import io from "./server.js"

io.on('connection', (socket) => {    
    console.log('socket conectado ID: ' + socket.id)
    socket.on("selecionar_documento",(nome)=>{
        console.log(nome)
    })


    socket.on('evento', (data) => {
        socket.broadcast.emit("evento_documento", data)
        
        console.log(data)
    })

})