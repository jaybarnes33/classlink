import { Form, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
const Book = () => {
  return (
    <section className={styles.booking}>
      <h1>Make a room reservation</h1>
      <Form className={styles.book}>
        <Form.Group>
          <Form.Label>
            <i className="bi mx-2 bi-box-arrow-in-right"></i>Check In
          </Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <i className="bi mx-2 bi-box-arrow-in-left"></i>Checkout
          </Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <i className="bi mx-2 bi-people"></i> Children
          </Form.Label>
          <Form.Control
            className={`px-2 ${styles.number}`}
            type="number"
            defaultValue={1}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <i className="bi mx-2 bi-people-fill"></i>Adults
          </Form.Label>
          <Form.Control
            className={`px-2 ${styles.number}`}
            type="number"
            defaultValue={1}
          />
        </Form.Group>

        <Button className="mx-2" variant="warning">
          Search
        </Button>
      </Form>
    </section>
  );
};

export default Book;
