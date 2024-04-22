import savings from "../../img/savings.svg";
import styles from "./Company.module.css";
import { DiVisualstudio, DiReact } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";

function Company() {
  return (
    <div className={styles.container_about}>
      <div className={styles.content_wrapper}>
        <div className={styles.text_wrapper}>
          <h1>Oque é o COSTS ?</h1>
          <p>
            O cost é uma ideia de aplicativo para gerenciar projetos e seus
            custos de forma simples.
          </p>
          <br />
          <p>
            Esta ideia surgiu da necessidade de iniciar meus estudos em React.
            Com este projeto, encontrei um excelente ponto de partida para
            adentrar esse universo, pois pude praticar diversos conceitos
            fundamentais do React, como rotas, componentização e o uso de alguns
            hooks, como o useState e o useEffect.
            <br />
            <br />
            Além disso, esta experiência me proporcionou uma visão clara de como
            um projeto simples pode ser estruturado de forma organizada e
            eficiente. Foi uma jornada valiosa, onde cada desafio enfrentado
            representou uma oportunidade de aprendizado e crescimento.
          </p>
          <br />
          <p>Algumas das principais funções do Cost são :</p>
          <br />
          <ol>
            <li>Cadastro de projetos com informações detalhadas</li>
            <li>
              Registro de custos associados a cada projeto. São os serviços
            </li>
            <li>
              Visualização dos projetos e seus custos de forma clara e
              organizada
            </li>
            <li>Possibilidade de alterar valores, com regras de validação</li>
          </ol>
          <div className={styles.titulo_centralizado}>
            <h2>Cores Padrão do Projeto</h2>
          </div>
          <div className={styles.colors_wrapper}>
            <div className={`${styles.quadrado} ${styles.laranja}`}>
              <p>#FFBB33</p>
            </div>
            <div className={`${styles.quadrado} ${styles.cinza}`}>
              <p>#222222</p>
            </div>
            <div className={`${styles.quadrado} ${styles.verde}`}>
              <p>#EFEFEF</p>
            </div>
          </div>
          <div className={styles.titulo_centralizado}>
            <h2>Tecnologias Usadas</h2>
          </div>
          <div className={styles.tech_wrapper}>
            <ul>
              <li>
                {" "}
                <DiVisualstudio />
                Durante todo o processo de desenvolvimento foi utilizado o
                Visual Studio Code
              </li>
              <li>
                {" "}
                <DiReact />
                Usei o React para paginação, e criação de todo o front-end do
                projeto
              </li>
              <li>
                {" "}
                <BsFiletypeJson />
                Usei o JSON Server para simular um banco de dados, permitindo
                solicitações HTTP locais
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.image_wrapper}>
          <img src={savings} alt="Imagem do projeto" />
        </div>
      </div>
    </div>
  );
}

export default Company;
