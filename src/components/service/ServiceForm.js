import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from "../project/ProjectForm.module.css";

function ServiceForm({ handleSubmit, btntext, projectData }) {
  const [service, setService] = useState({});
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!service.name || !service.cost || !service.description) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Input
        type="text"
        text="nome do serviço"
        name="name"
        placeholder="insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="custo do serviço"
        name="cost"
        placeholder="insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="descrição do serviço"
        name="description"
        placeholder="escreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btntext} />
    </form>
  );
}

export default ServiceForm;
