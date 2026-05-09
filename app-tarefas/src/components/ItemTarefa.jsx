function ItemTarefa({ tarefa, onCompletar, onRemover }) {
    const classeCard = `tarefa-card d-flex gap-2 align-items-center justify-content-between ${
        tarefa.concluida ? 'tarefa-concluida' : ''
    }`;

    const classeTexto = tarefa.concluida ? 'text-decoration-line-through' : '';

    return (
        <li>
            <div className={classeCard}>
                <div className="d-flex gap-2 align-items-center">
                    <input
                        type="checkbox"
                        checked={tarefa.concluida}
                        onChange={() => onCompletar(tarefa.id)}
                    />
                    <span className={classeTexto}>{tarefa.texto}</span>
                </div>
                <button
                    className="btn btn-danger btn-sm px-3 py-1"
                    onClick={() => onRemover(tarefa.id)}
                >
                    Apagar
                </button>
            </div>
        </li>
    );
}

export default ItemTarefa;
