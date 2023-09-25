import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Embark on a journey of memories with VisitMap at just $9 per month.
            Capture the essence of your travels, annotate them with personalized
            notes, and map out your adventures. For the price of a cup of
            coffee, you gain access to a world of exploration, connection, and
            storytelling.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
