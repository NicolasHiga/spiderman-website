function handleMouseEnter() {
    this.classList.add('s-card--hovered');
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
}

function addEventListenersToCard() {
    const cardElement = document.getElementsByClassName('s-card');

    /* For para chamar a função do mouse em cima da imagem*/
    for(let index = 0; index < cardElement.length; index++) {
        const card = cardElement[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

/* Espera a página carregar primeiro: */
document.addEventListener("DOMContentLoaded", addEventListenersToCard, false);