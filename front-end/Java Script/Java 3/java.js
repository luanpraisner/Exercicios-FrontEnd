function adicionarTarefa() {
     let inputtarefa = document.getElementById("inputTarefa")
        let tarefa = inputtarefa.value
    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adcioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        let mensagem = "Tarefa adicionada com sucesso!";
 
        document.getElementById("mensagem").textContent = mensagem;
 
        let listatarefas = document.getElementById("listaTarefas")
        let novatarefa = document.createElement("li")
 
        novatarefa.textContent = tarefa
 
        listatarefas.appendChild(novatarefa)
 
    }
 
    inputtarefa.value = ""
}