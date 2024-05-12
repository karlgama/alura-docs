const socket = io();



const textEditor = document.getElementById("editor-texto");
const params = new URLSearchParams(window.location.search);
const docName = params.get('nome')
const docTitle= document.getElementById('titulo-documento')

function selectDocument(nome){
    socket.emit('selecionar_documento',nome)
}


docTitle.textContent=docName

textEditor.addEventListener("keyup",(e)=>{
    socket.emit("evento", textEditor.value)
})

socket.on("evento_documento",(texto)=>{
    console.log(texto)
    textEditor.value=texto
})

selectDocument(docName);