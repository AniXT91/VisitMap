import styles from "./Button.module.css";

// Button component which is customizable and easy to use.You can change the click event handler the classname as well as the content which will be displayed in the button.

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
