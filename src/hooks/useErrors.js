import React, { useState } from 'react';

function useErrors(validacoes) {

    const [errors, setErrors] = useState(estadoInicial(validacoes));
    function validates(event) {
        const { name, value } = event.target;
        const novoEstado = { ...errors };
        novoEstado[name] = validacoes[name](value);
        setErrors(novoEstado);
    }

    function next() {
        for (let element in errors) {
            if (!errors[element].valid) return false
        }
        return true
    }

    return [errors, validates, next]
}

function estadoInicial(validacoes) {
    const initialState = {}
    for (let element in validacoes) {
        initialState[element] = { valid: true, helperText: "" }
    }
    return initialState
}

export default useErrors;