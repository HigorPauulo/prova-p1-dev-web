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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

function Header() {
        return (
        <header className="bg-primary text-white p-3 text-center">
            <h1>Gerenciador de Tarefas</h1>
        </header>
    );
}

function Main() {
    return (
        <main className="py-5">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-12 col-md-5">
                        <h2 className="text-start text-md-center title-section mb-4">Adicionar Tarefa</h2>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Digite a tarefa" id="tarefa" />
                            <button className="btn btn-primary" onClick={adicionarTarefa}>Adicionar</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <h2 className="text-start text-md-center title-section mb-4">Lista de Tarefas</h2>
                        <ul className="list-group d-flex flex-column gap-2" id="lista"></ul>
                    </div>

                </div>            
            </div>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer-main bg-dark text-white py-3 text-center">
            <p>Gerenciador de Tarefas - 2026</p>
        </footer>
    );
}