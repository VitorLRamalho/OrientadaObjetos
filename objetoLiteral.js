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