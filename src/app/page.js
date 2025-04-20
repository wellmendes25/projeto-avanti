// Importando o CSS
import styles from "./page.module.css";

// exportações
import Header from "./componentes/header/page.jsx";
import SuperSale from "./componentes/supersale/page.jsx";
import Lancamentos from "./componentes/lancamentos/page";
import Footer from "./componentes/footer/page.jsx";

export default function Home() {
  return (
   <main className={styles.main}>
      <Header />
      <SuperSale />
      <div className={styles.container}>
        <Lancamentos />
      </div>
   </main>
  );
}
