import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Book from "./Book";
const Main = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.text}>
          <h5>
            <i className={styles.svg}>
              <img src="/assets/wave.png" />
            </i>
            Welcome to
          </h5>
          <p className={styles.hero}>Classlink Hotel</p>

          <span className={styles.more}>
            <i className={styles.arrow}>
              <img src="/assets/arrow-right.png" />
            </i>
            Discover luxury
          </span>
        </div>
        <Book />
      </Container>
    </div>
  );
};

export default Main;
