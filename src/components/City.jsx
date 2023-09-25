import { useCities } from "../Context/CitiesContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import styles from "./City.module.css";

//Function which changes the date we obtained to a more readable date format.
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date(date));

//City component which is rendered when we tap on any city on the map and want to gather more information about it from it's wikipedia page.

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;

  // useEffect is used here for synchronization purposes.

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
