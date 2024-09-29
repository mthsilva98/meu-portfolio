window.addEventListener("load", function () {
    const techIcons = document.querySelector(".carousel-icons");
    const wrapper = document.querySelector(".carousel-icons-wrapper");
    
    let wrapperWidth = wrapper.offsetWidth;
    let techIconsWidth = techIcons.scrollWidth;
    let position = wrapperWidth; // Começa do lado direito da tela

    // Função para recalcular as larguras e posição ao iniciar a animação
    function recalculateWidths() {
        wrapperWidth = wrapper.offsetWidth;
        techIconsWidth = techIcons.scrollWidth;
        position = wrapperWidth;
    }

    // Recalcula larguras quando a janela for redimensionada
    window.addEventListener("resize", recalculateWidths);

    // Função de animação
    function animateIcons() {
        position -= 1; // Velocidade da animação

        // Move os ícones para a esquerda
        techIcons.style.transform = `translateX(${position}px)`;

        // Verifica se o último ícone passou pela borda esquerda
        if (position <= -(techIconsWidth)) {
            // Reposiciona os ícones para o início da animação
            position = wrapperWidth;
        }

        requestAnimationFrame(animateIcons);
    }

    recalculateWidths(); // Recalcula as larguras ao carregar
    animateIcons(); // Inicia a animação
});
