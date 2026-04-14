function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    const lista = document.getElementById('lista');
    const item = document.createElement('li');
    item.id = `tarefa${lista.children.length + 1}`;
    item.innerHTML = `
    <div class="tarefa-card d-flex gap-2 align-items-center justify-content-between">
        <div class="d-flex gap-2 align-items-center">
            <input type="checkbox" id="${item.id}-checkbox" onclick="completarTarefa('${item.id}')"> 
            <span id="${item.id}-texto">${tarefa}</span>
        </div>
        <button class="btn btn-danger btn-sm px-3 py-1" onclick="removerTarefa('${item.id}')">Apagar</button>
    </div>
    `;
    lista.appendChild(item);
}

function completarTarefa(id) {
    const item = document.getElementById(`${id}-texto`);
    const tarefaCard = item.closest('.tarefa-card');
    item.classList.toggle('text-decoration-line-through');
    tarefaCard.classList.toggle('tarefa-concluida');
}

function removerTarefa(id) {
    const item = document.getElementById(id);
    item.remove();
}