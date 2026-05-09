import ItemTarefa from './ItemTarefa';

function ListaTarefas({ tarefas, onCompletar, onRemover }) {
    return (
        <div className="col-12 col-md-7">
            <h2 className="text-start text-md-center title-section mb-4">Lista de Tarefas</h2>
            <ul className="list-group d-flex flex-column gap-2">
                {tarefas.map((tarefa) => (
                    <ItemTarefa
                        key={tarefa.id}
                        tarefa={tarefa}
                        onCompletar={onCompletar}
                        onRemover={onRemover}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListaTarefas;
