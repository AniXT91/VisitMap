import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

// This renders the Application Navigation of the given webpage.

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;

/* NavLink is a special type of link attribute given to us by the react router which doesn't hard refresh the page and hence helps us in making SPA plus it also attaches active class automatically to all of the links which are currently clicked on so as we can apply custom styling to  */
