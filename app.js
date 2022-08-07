"use strict";
//Exemplo que roda somente no ecmascript a partir de 2020
let buttonTeste = document.getElementById('button');
buttonTeste === null || buttonTeste === void 0 ? void 0 : buttonTeste.addEventListener('click', () => {
    console.log('function');
});
//Exemplo 9 - throw e never
// function jogaErro (erro: string, codigo: number): never{
//     throw {error: erro, code: codigo} //codigo que nunca sera finalizado
// }
// jogaErro('deu erro!', 500);
//Exemplo 8 unknwon -. pouco utilizado 
// let anyEstDeVolta: any;
// anyEstDeVolta =3;
// anyEstDeVolta = 'teste';
// anyEstDeVolta = true;
// let stringTest : string = 'verificar';
// stringTest = anyEstDeVolta
// let unknwonValor :unknown;
// unknwonValor = 3;
// unknwonValor = 'opa';
// unknwonValor= 'vai sim';
// let stringTest2: string = 'agora vai';
// stringTest2 = unknwonValor;
// if(typeof unknwonValor ==='string'){
//     stringTest2 = unknwonValor;
// }
//Exemplo 7:
// function somarValoresNumericos(numero1: number, numero2: number, callback : (numero: number)=> number): number {
//     let resultado = numero1 + numero2;
//     return callback(resultado);
// }
// function aoQuadrado(numero:number): number{
//     return numero * numero;
// }
// function dividirPorEleMesmo(numero: number):number{
//     return numero/numero;
// }
// console.log(somarValoresNumericos(5,5,aoQuadrado))
// console.log(somarValoresNumericos(5,5,dividirPorEleMesmo))
//exemplo6 void
// function printaValoresNumericos(numero1: number, numero2: number) : void {
//     console.log(numero1 + numero2) //quero que a expressão rode mas não retorne nada
// }
//exemplo5:
// function somarValoresNumericos(numero1: number, numero2: number): number {
//     return numero1+numero2;
// } //protege a função, criando o tipo do retorno
//exemplo4:
// type input = number | string;
// function somarValores(input1: input, input2: input){
//     if(typeof input1 === 'string' || typeof input2 ==='string'){
//         return input1.toString() + input2.toString();
//     }
//     return input1 + input2;
// }
// console.log(somarValores(1,5));
// console.log(somarValores('ola', ' tudo bem?'))
//exemplo3
// let valorAny: any;
// valorAny =3;
// valorAny = 'ola';
// valorAny = true;
//porem pode acarretar erros
//Exemplo 2
// const pessoa= {
//     nome: "Mariana",
//     idade: 28,
//     profissao:"reporter"
// }
// const andre: {nome:string, idade:number, profissao:string} = {
//     nome:'Andre',
//     idade:25,
//     profissao:'pintor'
// }
// enum Profissao {
//     Professora,
//     Atriz,
//     Desenvolvera,
//     JogadoraDeFutebol
// }
// interface Pessoa {
//     nome: string,
//     idade: number,
//     profissao : Profissao
// }
// interface Estudante extends Pessoa{
//     materias: string[]
// }
// const jessica: Estudante = {
//     nome: 'Jessica',
//     idade: 28,
//     profissao: Profissao.Desenvolvera,
//     materias: ['Matematica', 'Programação']
// }
// const vanessa: Pessoa = {
//     nome: "Vanessa",
//     idade: 23,
//     profissao: Profissao.Desenvolvera
// }
// function listar(lista: string[]){
//     for(const item of lista){
//         console.log('- ', item);
//     }
// }
//Exemplo1:
// let button = document.getElementById('button');
// let input1 = document.getElementById('input1') as HTMLInputElement;
// let input2 = document.getElementById('input2') as HTMLInputElement;
// function adicionarNumeros(numero1: number, numero2: number, devPrintar:boolean, frase: string){
//     let resultado = numero1+ numero2;
//     if(devPrintar){
//         console.log(frase + resultado)
//     }
//     return numero1+numero2;
// }
// let devPrintar = true;
// let frase = "O valor é: "
// if(button){
// button.addEventListener('click', () => {
//    console.log(adicionarNumeros(Number(input1.value),Number(input2.value), devPrintar, frase))
// });
// }
