'use client';
import React from "react";
import CardProduto from "../cardProduto/page.jsx";
import produtos from "../dados/dados.js";

// Importando o CSS do Swiper
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Lancamentos() {
    return (
        <section>
            <Swiper
                slidesPerView={4}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    650: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                }}
                navigation
                modules={[Navigation]}
            >
            {produtos.map((produto, index) => (
                <SwiperSlide key={index}>
                    <CardProduto
                    imagem={produto.imagem}
                    titulo={produto.titulo}
                    preco={produto.preco}
                    parcelado={produto.parcelado}
                    descricao={produto.descricao}
                    />
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    );
}