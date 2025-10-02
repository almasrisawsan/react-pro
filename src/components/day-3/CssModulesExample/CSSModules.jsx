/* Button.module.css */
// .button {
//   background-color: blue;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
// }
import styles from "./CSSModules.module.css";

function CssModuleExample() {
  return <button className={styles.button}>Click Me</button>;
}
export default CssModuleExample;
