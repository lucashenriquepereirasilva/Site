/**
 * @author Lucas Henrique
 */

// Banner carrossel ------------
const main = document.querySelector('main');
const backgrounds = ['url(img/ferrari6.jpg)', 'url(img/ferrari5.jpg)', 'url(img/ferrari4.jpg)'];

let indice = 0;

function slider() {
    indice++;
    if (indice >= backgrounds.length) {
        indice = 0;
    }
    // Troca da imagem de background no CSS
    main.style.backgroundImage = backgrounds[indice];
    main.style.transition = 'background-image 1s ease-in-out';
}

setInterval(slider, 3000);

// fim do Banner carrossel --------------------------------------------------------------


// Inserindo o ano na tag <span> no HTML
let ano = document.getElementById('copyrightYear');

// A linha abaixo obtém o ano atual do sistema
let anoAtual = new Date().getFullYear();
// A linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual;  // Corrigido para atribuir o valor do ano atual
