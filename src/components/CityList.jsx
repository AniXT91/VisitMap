import { useCities } from "../Context/CitiesContext";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";

// CityList component is the whole list whose individual parts are CityItem.

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
