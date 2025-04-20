import React from "react";

export default function CardProduto({ imagem, titulo, preco, parcelado, descricao }) {
    return (
        <div className="card text-center p-1 d-flex flex-column align-items-center shadow-sm" style={{ maxWidth: "300px", margin: "auto" }}>
            <img 
                src={imagem} 
                alt={titulo} 
                className="card-img-top rounded" 
                style={{ width: "100%", height: "auto", objectFit: "cover", maxHeight: "200px" }} 
            />
            <div className="card-body">
                <h5 className="card-title text-truncate">{titulo}</h5>
                <p className="card-text text-muted small">{descricao}</p>
                <span className="fw-bold text-success d-block mb-1">{preco}</span>
                {parcelado && <span className="text-muted small">{parcelado}</span>}
                <button className="btn btn-primary mt-3 w-100">Comprar</button>
            </div>
        </div>
    );
}