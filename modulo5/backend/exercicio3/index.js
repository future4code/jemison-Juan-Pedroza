const contas = []

const regexEmail = new RegExp('[A-Za-z.-_]{3,}@[A-Za-z.-_]{2,}[.][a-z]{2,3}')
const regexSenha = new RegExp('.{6,}')

const login = (email, senha) => {
    if (regexEmail.test(email) && regexSenha.test(senha)) {
        contas.push({ email: email, password: senha })
    } else if (regexEmail.test(email) === false) {
        console.log('e-mail inválido')
    } else if (regexSenha.test(senha) === false) {
        console.log('senha deve possuir no mínimo 6 caracteres')
    } else {
        console.log('parametros inválidos')
    }
}

login('juan.torterolo@gmail.com', '7845147')
console.log(contas)