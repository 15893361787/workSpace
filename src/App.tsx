import React from "react";
import styles from "./App.module.less";
function App(props: { name?: string; age?: number }) {
  return <div className={styles["App"]}>123456</div>;
}

export default App;
