let usuarios = [];

function cadastrar(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  let novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
  };

  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  location.href = "login.html";
}

function logar(event) {
  event.preventDefault();

  let email = document.getElementById("emaill").value;
  let senha = document.getElementById("password").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let validaLogin = usuarios.some(function (usuario) {
    return usuario.email === email && usuario.senha === senha;
  });

  if (validaLogin) {
    alert("Login realizado com sucesso!");
    location.href = "index.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

document.getElementById("ormCadastro").addEventListener("submit", cadastrar);
document.getElementById("formlogin").addEventListener("submit", logar);
