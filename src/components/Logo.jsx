import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

// Logo component which is being shown on the webpage.

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="VisitMap logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
