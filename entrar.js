document.getElementById("btn-entrar").addEventListener("click", entrar);

document
  .getElementById("btn-cadastro")
  .addEventListener("click", realizarCadastro);

let listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

function entrar() {
  if (!email.value || !senha.value) {
    alert("Campos Vazios");
    return;
  }

  const usuario = listaDeUsuarios.find(
    (usuario) => usuario.email === email.value && usuario.senha === senha.value
  );

  if (!usuario) {
    alert("Usuario invalido ou inexistente");
    return;
  }

  const usuarioLogado = {
    email: usuario.email,
    recados: usuario.recados,
  }

  localStorage.setItem('UsuarioOn', JSON.stringify(usuarioLogado));

  abrirListaDeRecados();
}

function abrirListaDeRecados() {
  window.location.href = "lista.html";
}

function realizarCadastro() {
  window.location.href = "cadastro.html";
}
