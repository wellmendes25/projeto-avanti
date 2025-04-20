'use client';

import { useState } from "react";
import styles from "./page.module.css";

// componentes
import Header from "./componentes/header/page.jsx";
import SuperSale from "./componentes/supersale/page.jsx";
import Lancamentos from "./componentes/lancamentos/lancamentos.jsx";
import Section from "./componentes/section/page";
import Contatos from "./componentes/contatos/page.jsx";
import Newsletter from "./componentes/newsletter/page";
import Footer from "./componentes/footer/page.jsx";

// dados (produtos)
import produtos from "./componentes/dados/dados.js";

export default function Home() {
  const [busca, setBusca] = useState("");

  // filtro por nome (case insensitive)
  function buscarProduto(query) {
    return produtos.filter(produto => {
        const termoBusca = query.toLowerCase();
        return (
            produto.titulo.toLowerCase().includes(termoBusca) ||
            produto.descricao.toLowerCase().includes(termoBusca) ||
            produto.preco.toLowerCase().includes(termoBusca)
        );
    });
}



  return (
    <main className={styles.main}>
      <Header onBuscar={setBusca} />

      {/* SuperSale aparece só quando não há busca */}
      {busca.trim() === "" && <SuperSale /> }

      <div className={styles.container}>
        {busca.trim() !== "" && (
          <h1 className="text-center my-4">Você buscou por:</h1>
        )}
        <Lancamentos produtos={buscarProduto(busca)} />
      </div>

      <Section />

      <Contatos />
      <Newsletter />
      
    </main>
  );
}
