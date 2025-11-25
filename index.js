const valor_Produto = Number(prompt("Digite o valor do produto: "))

if (valor_Produto >= 20) {
    document.getElementById("Resultado").innerHTML ="Aprovado"
} else {
    document.getElementById("Resultado").innerHTML = "Negado"
}