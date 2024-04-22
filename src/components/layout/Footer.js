import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a
            href="https://www.linkedin.com/in/alysson-rafael-485540290/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="http://github.com/alyssonrafael" target="blank">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
