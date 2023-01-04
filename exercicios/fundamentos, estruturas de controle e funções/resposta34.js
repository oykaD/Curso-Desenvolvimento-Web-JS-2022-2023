// 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verificaCaracteres(string1, string2) {
    // transforma as strings em minúsculas
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    // verifica se todos os caracteres da primeira string estão presentes na segunda
    for (let i = 0; i < string1.length; i++) {
        if (!string2.includes(string1[i])) {
            return false
        }
    }

    // se chegou até aqui, todos os caracteres estão presentes
    return true
}

console.log(verificaCaracteres("abc", "abcde"))
console.log(verificaCaracteres("abc", "abXde"))
console.log(verificaCaracteres("abc", "abde"))