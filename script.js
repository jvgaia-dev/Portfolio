// Navegação suave ao clicar nos links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        scrollToSection(targetElement);
    });
});

// Função para rolar suavemente até a seção
function scrollToSection(targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}

// Ação de rolagem suave ao carregar diretamente uma seção
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
            scrollToSection(targetElement);
        }
    }
});

function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i); // Delay de 75ms entre cada letra
    });
}

// Ativa o efeito de digitação no título
const titulo = document.querySelector('.digitando');
if (titulo) {
    ativaLetra(titulo);
}



