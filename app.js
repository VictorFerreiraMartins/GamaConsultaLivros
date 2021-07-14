// Pegar o input
// Se for sim, mostrar as categorias disponíveis e perguntar qual categoria quer ver.
// Se for não, mostrar todos os livros em ordem crescente pela quantidade de páginas.

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N \n')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/ História brasileira', '/ Américas','/ Estilo de vida','/ Tecnologia')
    const entradaCategoria = readline.question('Qual categoria voce escolhe?\n')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:\n')

    console.table(livrosOrdenados)

}