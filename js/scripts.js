// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Botão "Comece Agora"
    const btnCta = document.querySelector('.btn-cta');
    btnCta.addEventListener('click', () => {
        window.location.href = '#contact';
    });

    // Botão "Registrar"
    const btnRegister = document.querySelector('.btn-register');
    btnRegister.addEventListener('click', () => {
        alert('Bem-vindo à InvestPro! Preencha o formulário para se registrar.');
        window.location.href = '#contact';
    });

    // Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulação de envio de formulário
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
