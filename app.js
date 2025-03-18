//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById('amigo').value.trim();

  if (amigos.indexOf(nomeAmigo) !== -1) {
    alert('Este nome já foi adicionado à lista!');
    return;
  }

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome.');
  } else {
    amigos.push(nomeAmigo);
  }

  document.getElementById('amigo').value = '';

  atualizarLista();
}

function atualizarLista() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  listaAmigosElement.innerHTML = '';

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia!');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
