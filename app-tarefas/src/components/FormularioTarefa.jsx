import { useState } from 'react';

function FormularioTarefa({ onAdicionar }) {
    const [texto, setTexto] = useState('');

    function handleAdicionar() {
        if (texto.trim() === '') return;
        onAdicionar(texto);
        setTexto('');
    }

    return (
        <div className="col-12 col-md-5">
            <h2 className="text-start text-md-center title-section mb-4">Adicionar Tarefa</h2>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite a tarefa"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAdicionar}>
                    Adicionar
                </button>
            </div>
        </div>
    );
}

export default FormularioTarefa;
