import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Container from "../layout/Container";
import styles from "./ProjectSearch.module.css";

function ProjectSearchForCategories({ projects, handleRemove }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [categorias, setCategorias] = useState([]);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar categorias do servidor
    const fetchCategorias = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        if (!response.ok) {
          throw new Error("Erro ao buscar categorias");
        }
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    setResultados(projects);
  }, [projects]);

  const handleFiltroCategoria = (e) => {
    const categoria = e.target.value;
    setCategoriaSelecionada(categoria);
    if (categoria === "Todas") {
      setResultados(projects);
    } else {
      const projetosFiltrados = projects.filter(
        (project) => project.category.name === categoria
      );
      setResultados(projetosFiltrados);
    }
  };

  return (
    <div className={styles.teste}>
      <select value={categoriaSelecionada} onChange={handleFiltroCategoria}>
        <option value="Todas">Todas</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.name}>
            {categoria.name}
          </option>
        ))}
      </select>

      <Container customClass="start">
        {resultados.length > 0 ? (
          resultados.map((project) => (
            <ProjectCard
              key={project.id}
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
}

export default ProjectSearchForCategories;
