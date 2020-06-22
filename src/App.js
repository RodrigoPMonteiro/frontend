// Componente no React sempre colocar letra maiúscula

// Componente no React é sempre uma função que retorna HTML!!!!

import React, { useState, useEffect } from 'react'; // useState --> estados!
import api from './services/api';

import Header from './components/Header';

// importa css criado 
import './App.css';
//import backgroundImage from './assets/background.jpg';

// Criando nosso primeiro componente App()
// Componente principal da aplicação
function App( ) { // componente Pai  - a lista <ul> é o children ( componente filho )
    const [ projects, setProjects ] = useState( [] ); // inicializa com array vazio
    //dddd

    useEffect( () => { // Qual função eu quero disparar
        api.get('projects').then(response => { // .then --> quando responder vou ter tal resposta disponivel
            setProjects(response.data)
        })
    }, [] )  // < [] array de dependencia --  // quando eu quero disparar a função anterior
    // useState retorna um array com 2 posicões
    //1 - variável com o seu valor inicial
    //2 - função para mudar seu valor

    async function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`); // crase para poder passar uma variavel dentro do texto
        //setProjects( [...projects , `Novo projeto ${Date.now()}` ]); // imutabilidade --> nao podemos mutar uma variável de maneira direta
        
        const response = await api.post('/projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Rodrigo Monteiro" 
        });

        const project = response.data;

        setProjects( [...projects, project ] );
    }

    async function handleRemoveProject(id) {
        /* Utilizando a api importada, podemos deletar exatamente o repositorio 
           cujo id será informado por parâmetro */
        await api.delete(`projects/${id}`);
        /* Respeitando a imutabilidade, é possivel deletar valores do array "repositories" */
        setProjects(projects.filter(project => project.id !==id));
      }

    // <img width={300} src={backgroundImage} alt=""/>

    return (
        <div>
            <Header title="Projetos Frontend" />
            <ul data-testid="project-list">
                {projects.map(project => (
                <li key={project.id}>
                    <span>{project.title}
                        <button onClick={() => handleRemoveProject(project.id)}>
                        Remover Projeto
                        </button>
                    </span>
                </li>
                ))}
            </ul>
            {/* <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li> )}
            </ul> */}

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </div>
    ); // atenção que o componente tem letra maiúscula!!!
}

// para dois elementos, preciso colocar um elemento externo como uma <div> por exemplo!!!!

export default App;