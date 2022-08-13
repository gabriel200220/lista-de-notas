document.getElementById('btn-entrar')
.addEventListener('click', entrar);

document.getElementById('btn-cadastro')
.addEventListener('click', cadastro);

let listaDeUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function entrar() {
    console.log('entrar')
}

function cadastro() {
    window.location.href = 'cadastro.html';
}
