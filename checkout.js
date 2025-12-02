var checkoutBtnC = document.getElementById('checkout-btn');
checkoutBtnC.addEventListener('click', processCheckout);

function processCheckout() {
    localStorage.setItem('final', 'true');
    window.location.href = 'https://go.invictuspay.app.br/3gkpp6qf2k';
}