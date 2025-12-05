var checkoutBtnC = document.getElementById('checkout-btn');
checkoutBtnC.addEventListener('click', processCheckout);

function processCheckout() {
    localStorage.setItem('final', 'true');
    window.location.href = 'https://pay.risepay.com.br/Pay/d65701e2faf74363a3547be700df690d';
}