    
    var checkoutBtnC = document.getElementById('checkout-btn');
    checkoutBtnC.addEventListener('click', processCheckout);

    function processCheckout() {

        // URL do checkout
        let baseURL = 'https://pay.risepay.com.br/Pay/d65701e2faf74363a3547be700df690d';
        
        // Captura UTMs da URL atual
        let params = window.location.search;

        // Dispara InitiateCheckout do Meta Pixel
        try {
            fbq('track', 'InitiateCheckout');
        } catch(e) {
            console.warn("Pixel não carregou, seguindo mesmo assim.");
        }

        // Apenas marca que o usuário chegou aqui (se você quiser usar depois)
        localStorage.setItem('final', 'true');

        // Redireciona já com UTMs coladas
        window.location.href = baseURL + params;
    }
