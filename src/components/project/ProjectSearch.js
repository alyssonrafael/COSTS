import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Container from "../layout/Container";
import styles from "./ProjectSearch.module.css";

const ProjetoSearch = ({ projects, handleRemove }) => {
  const [termoBusca, setTermoBusca] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    setResultados(projects);
  }, [projects]);

  const handleBusca = (e) => {
    const termo = e.target.value.toLowerCase();
    const projetosEncontrados = projects.filter((project) =>
      project.name.toLowerCase().includes(termo)
    );
    setResultados(projetosEncontrados);
  };

  return (
    <div className={styles.teste}>
      <input
        type="text"
        placeholder="Digite o nome do projeto..."
        value={termoBusca}
        onChange={(e) => {
          setTermoBusca(e.target.value);
          handleBusca(e);
        }}
      />

      <Container customClass="start">
        {resultados.length > 0 ? (
          resultados.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <h4>Nenhum projeto encontrado ou cadastrado ...</h4>
        )}
      </Container>
    </div>
  );
};

export default ProjetoSearch;
