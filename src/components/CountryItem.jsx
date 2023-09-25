import styles from "./CountryItem.module.css";

// CountryItem component renders the individual countries whom contain the cities which have been added by the user in the webpage.

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
