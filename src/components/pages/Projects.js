import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import styles from "./Projects.module.css";
import ProjectSearch from "../project/ProjectSearch";
import ProjectSearchForCategories from "../project/ProjectSearchForCategories";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");
  const [isCategorySearch, setIsCategorySearch] = useState(false);

  let location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso");
      })
      .catch((err) => console.log(err));
  }

  const handleButtonClick = (value) => {
    setTimeout(() => {
      setIsCategorySearch(value);
    }, 50); //para nao ter a mudança brusca do que sera renderizado e acabar piscando a tela
  };

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}

      {/* Botão ou menu suspenso para alternar entre os tipos de pesquisa */}
      <div className={styles.search_buttons}>
        <button
          className={
            isCategorySearch ? styles.active_button : styles.inactive_button
          }
          onClick={() => handleButtonClick(false)}
        >
          Pesquisa por Nome
        </button>
        <button
          className={
            isCategorySearch ? styles.inactive_button : styles.active_button
          }
          onClick={() => handleButtonClick(true)}
        >
          Pesquisa por Categoria
        </button>
      </div>

      {/* Renderização condicional baseada no estado isCategorySearch */}
      {isCategorySearch ? (
        <ProjectSearchForCategories
          projects={projects}
          handleRemove={removeProject}
        />
      ) : (
        <ProjectSearch projects={projects} handleRemove={removeProject} />
      )}

      {!removeLoading && <Loading />}
    </div>
  );
}

export default Projects;
