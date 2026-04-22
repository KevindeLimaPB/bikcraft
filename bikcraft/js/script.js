//ativar links menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link){
    const url = location.href
    const href = link.href

    if(url.includes(href)){
        link.classList.add("ativo")
    }
}
links.forEach(ativarLink)

// ativar itens no orçamento

const parametros = new URLSearchParams (location.search)

const ativarProduto = (parametro) => {
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true
    } 
    console.log(elemento)
}
parametros.forEach(ativarProduto)


//perguntas
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controlls = pergunta.getAttribute("aria-controls")
    const resposta = document.getElementById(controlls)

    resposta.classList.toggle("ativa")
    const ativa = resposta.classList.contains("ativar")
    console.log(ativa)
    pergunta.setAttribute("aria-expanded", ativa)
}
 function eventosPerguntas (pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}
perguntas.forEach(eventosPerguntas)


// Mudar imagem 

const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;//faz fica false ou true
    if(media){ 
        galeriaContainer.prepend(img);//verifica se for true troca, se for false n troca
    }
    
}

function eventosGaleria(imagem){
    imagem.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)