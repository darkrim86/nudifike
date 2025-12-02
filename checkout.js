// checkout.js - Script separado para funcionalidade de checkout

// Esta função simula o processo de checkout
function processCheckout() {
    console.log("Processando checkout...");
    fbq('track', 'Purchase', {value: 19.90, currency: 'BRL'});
    // Em uma implementação real, aqui seria integrado com um gateway de pagamento
    // Por enquanto, apenas simulamos o sucesso do pagamento
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checkout concluído com sucesso!");
            resolve({
                success: true,
                message: "Pagamento processado com sucesso!",
                coinsAdded: 3
            });
        }, 2000);
    });
}

// Função para exibir o modal de checkout
function showCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Função para ocultar o modal de checkout
function hideCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Adiciona event listener para o botão de checkout
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async function() {
            // Mostra um indicador de carregamento
            checkoutBtn.textContent = "Processando...";
            checkoutBtn.disabled = true;
            
            try {
                const result = await processCheckout();
                
                if (result.success) {
                    // Atualiza a interface com as novas moedas
                    const coinCountElement = document.getElementById('coin-count');
                    if (coinCountElement) {
                        const currentCoins = parseInt(coinCountElement.textContent);
                        coinCountElement.textContent = currentCoins + result.coinsAdded;
                    }
                    
                    // Fecha o modal
                    hideCheckoutModal();
                    
                    // Mostra uma mensagem de sucesso
                    alert(result.message);
                }
            } catch (error) {
                console.error("Erro no checkout:", error);
                alert("Ocorreu um erro durante o checkout. Tente novamente.");
            } finally {
                // Restaura o botão
                checkoutBtn.textContent = "Comprar Mais Moedas";
                checkoutBtn.disabled = false;
            }
        });
    }
});