import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About VisitMap.</h2>
          <p>
            VisitMap: Where your travels find their voice. Record your journeys,
            weave your memories, and breathe life into your stories. Unveil a
            world of cherished moments with every note, and relive your
            adventures through a beautifully woven narrative. Roam, remember,
            and relish.
          </p>
          <p>
            Unlock the canvas of your wanderings with VisitMap. Seamlessly
            capture the fragments of your travels and craft a story uniquely
            yours. Roam boldly, reminisce endlessly.
          </p>
        </div>
      </section>
    </main>
  );
}
