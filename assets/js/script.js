const cards = document.querySelectorAll('#hidden');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    mostrarMais()
})

function mostrarMais() {
    cards.forEach((evento) => {
        console.log(evento.attributes[1].value)
        if(evento.attributes[1].value == "card invisivel") {
            evento.classList.remove('invisivel')
            btn.innerHTML = 'Mostrar menos';
        }else {
            evento.classList.add('invisivel')
            btn.innerHTML = 'Mostrar mais';
        }
    })
}

const html = document.querySelector('.html');
const css = document.querySelector('.css');
const js = document.querySelector('.js');
const sass = document.querySelector('.sass');
const tw = document.querySelector('.tw');
const wp = document.querySelector('.wp');
const git = document.querySelector('.git');
const hub = document.querySelector('.hub');
const texto = document.querySelector('.texto-descricao');
const cardHover = document.querySelectorAll('#hover');



html.addEventListener('mouseenter', () => {
    texto.innerHTML = `HTML <br><br>
    É uma linguagem de marcação utilizada na construção de páginas na Web.
    `
})
css.addEventListener('mouseenter', () => {
    texto.innerHTML = `CSS <br><br>
    É um mecanismo para adicionar estilo a um documento web.
    `
})
js.addEventListener('mouseenter', () => {
    texto.innerHTML = `JavaScript <br><br>
    É uma linguagem de programação.<br>Juntamente com HTML e CSS, é uma das três principais tecnologias da web.
    `
})
sass.addEventListener('mouseenter', () => {
    texto.innerHTML = `Sass <br><br>
    É uma linguagem de folhas de estilo.<br>Basicamente o Sass potencializa o CSS.
    `
})
tw.addEventListener('mouseenter', () => {
    texto.innerHTML = `Tailwind <br><br>
    É um framework CSS que oferece a possibilidade de você criar layouts usando uma estrutura de CSS pronta.
    `
})
wp.addEventListener('mouseenter', () => {
    texto.innerHTML = `WordPress <br><br>
    É um projeto de código aberto usado para criar sites, blogs ou aplicativos.
    `
})
git.addEventListener('mouseenter', () => {
    texto.innerHTML = `Git <br><br>
    É um sistema de controle de versões distruído, usado principalmente no desenvolvimento de software.
    `
})
hub.addEventListener('mouseenter', () => {
    texto.innerHTML = `Github <br><br>
    É uma plataforma de hospedagem de código-font e arquivos com controle de versão usando o Git.
    `
})

function resetaTexto() {
    texto.innerHTML = "Passe o mouse por cima de alguma habilidade para ler a descrição";
}
setInterval(resetaTexto,8000);