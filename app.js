let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    const sorteio = [...amigos];
    const resultado = [];

    while (sorteio.length > 1) {
        const amigo1 = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        const amigo2 = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        resultado.push(`${amigo1} tirou ${amigo2}`);
    }

    if (sorteio.length === 1) {
        resultado.push(`${sorteio[0]} ficou sem par`);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
    resultado.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        listaResultado.appendChild(li);
    });
}

function reiniciar() {
    amigos = [];
    atualizarLista();
    document.getElementById('resultado').innerHTML = '';
}