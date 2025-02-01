document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'piti' && password === '061024') {
        alert('Te amo piti!');
        window.location.href = 'carta.html';
    } else {
        errorMessage.textContent = 'No te acuerdas bebé?';
    }
});
