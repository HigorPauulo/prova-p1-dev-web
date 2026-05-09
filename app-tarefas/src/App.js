import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';
import './App.css';

function App() {
    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa(texto) {
        const nova = {
            id: Date.now(),
            texto,
            concluida: false,
        };
        setTarefas([...tarefas, nova]);
    }

    function completarTarefa(id) {
        setTarefas(
            tarefas.map((t) =>
                t.id === id ? { ...t, concluida: !t.concluida } : t
            )
        );
    }

    function removerTarefa(id) {
        setTarefas(tarefas.filter((t) => t.id !== id));
    }

    return (
        <>
            <Header />
            <main className="py-5">
                <div className="container">
                    <div className="row row-gap-5">
                        <FormularioTarefa onAdicionar={adicionarTarefa} />
                        <ListaTarefas
                            tarefas={tarefas}
                            onCompletar={completarTarefa}
                            onRemover={removerTarefa}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
