// VALIDAÇÕES 

function validatesCPF(cpf){
    maskCpf(cpf);
    if (cpf.length !== 14){
        return {valid: false, helperText: 'O CPF deve conter 11 digitos' }
    } else {
        return {valid: true, helperText: '' }
    }
}

function validatesPassword(password){
    if (password.length < 4 || password.length > 72){
        return {valid: false, helperText: 'A senha deve conter entre 4 e 72 digitos' }
    } else {
        return {valid: true, helperText: '' }
    }
}

//FIM DAS FUNÇÕES DE VALIDAÇÃO

// MASCARAS

function maskCpf(cpf){
    return cpf
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

function maskCep(cep){
    console.log(cep.replace(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/))
    return cep
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

//FIM DAS FUNÇÕES DE MASCARAS
export {validatesCPF, maskCep, maskCpf, validatesPassword}