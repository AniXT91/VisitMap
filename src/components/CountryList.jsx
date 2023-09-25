import { useCities } from "../Context/CitiesContext";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";

// Akin to CityList component the individual parts of CountryList component is CountryItem component.

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // This is a functional expression which only allows unique country to be rendered in the CountryList component as different cities may be in the same country but adding same country twice doesn't make any sense.

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}

export default CountryList;
