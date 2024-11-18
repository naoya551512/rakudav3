import styles from "./Login.module.css";
import Editpage from "../components/Editpage";
import Side from "../components/Side";

function Edit() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <Side />
        <div className={styles.content}>
          <Editpage />
        </div>
      </div>
    </div>
  );
}

export default Edit;
