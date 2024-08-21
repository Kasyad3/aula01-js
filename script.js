//Exibir no terminal
console.log("Olá Mundo");
//Exibir no navegador
document.write("Olá Navegador! ");
//Um alerta
alert("Alerta de confirmação");

//string

//Captura o nome do Aluno
var nome = window.prompt("Informe o Nome:");
//Guardar a primeira nota
var nota1 = window.prompt("Digite a nota 1;");
//Converte a nota de texto para numero decimal 
nota1 = parseFloat(nota1);
//Guarda a segunda nota
var nota2 = window.prompt("Digite a nota 2:");
//Converte a nota de texto para numero decimal
nota2 = parseFloat(nota2);
//calculo a média das duas notas
var media = (nota1 + nota2)/2;
//Gero a mensagem de exibição  do nome e da média do aluno
var mensagem = nome + ", Você teve a média: " + media;
window.alert(mensagem);