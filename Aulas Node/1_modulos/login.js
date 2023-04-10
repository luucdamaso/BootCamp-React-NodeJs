const usuarios = require("./usuarios.js")

function autenticar(email, senha) {
    let usuarioValido = usuarios.find((usuario) => usuario.email === email);
    if ((usuarioValido !== undefined) && (usuarioValido.senha === senha)) {
        return `${usuarioValido.nome} Seja bem-vindo(a)`
    }else {
        return `email ou senha inválido`
    }
}

module.exports = autenticar;