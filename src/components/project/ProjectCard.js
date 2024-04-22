import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { useState, useEffect } from "react";

import { BsEye, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p>
        <span>Saldo Restante:</span> R${budget - project.cost}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsEye /> Visualizar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
