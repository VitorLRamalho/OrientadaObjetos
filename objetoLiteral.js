const user = {
    nome: "Vitor",
    email: "V@teste.com",
    idade: 20,
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    },
}

user.exibirInfos();
//const exibir = user.exibirInfos
//exibir()

const exibir = function() {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()

