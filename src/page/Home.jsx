import styles from "./Login.module.css";
import Homepage from "../components/Homepage";
import Side from "../components/Side";

function Home() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <Side />
        <div className={styles.content}>
          <Homepage />
        </div>
      </div>
    </div>
  );
}

export default Home;
