'use client'
import Image from 'next/image';
import React, { useState } from 'react';

// Importando os ícones
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { BiX } from "react-icons/bi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // Estado para armazenar a busca
    const [searchResult, setSearchResult] = useState(''); // Estado para armazenar o resultado da busca

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = () => {
        // Exibe a mensagem de busca
        setSearchResult(searchQuery);
    };

    return (
        <header className="bg-light py-0 d-flex flex-column gap-3" style={{ position: "sticky", top: 0, zIndex: 1000 }}>

            <div
                className="w-100 text-center bg-primary align-items-start justify-content-center"
                style={{ fontSize: "14px", color: 'white', padding: "4px 0", fontWeight: "bold" }}
            >
                Ganhe <span style={{ backgroundColor: 'purple', padding: '2px', margin: "0px 2px", borderRadius: '4px' }}>R$10,00</span> de desconto no seu primeiro pedido. Utilize o cupom <span style={{ fontWeight: 200 }}>DESCONTO10</span>
            </div>

            <div className="container">
                <div className="container d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3">
                    <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-4 w-100">
                        <Image src="/logo.png" alt="Logo" width={100} height={50} />
                        <div className="input-group w-100" style={{ maxWidth: 600 }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o que você procura aqui..."
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado com o texto digitado
                            />
                            <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
                                <FaSearch size={20} />
                            </button>
                        </div>
                        {/* Exibindo o resultado da busca */}
                        {searchResult && (
                            <div className="mt-2 text-center text-dark">
                                Você buscou por: <strong>{searchResult}</strong>
                            </div>
                        )}
                    </div>
                    <div className="d-flex align-items-center gap-2 gap-md-3 mt-3 mt-md-0">
                        <button className="btn border-0 bg-transparent d-flex align-items-center gap-2 fs-5">
                            <AiOutlineUser size={60} color='blue' />
                            <span style={{ fontSize: "14px" }}>
                                Olá, Nome cliente!
                            </span>
                        </button>
                        <button className="btn border-0 bg-transparent fs-5">
                            <AiOutlineShoppingCart size={60} />
                        </button>
                    </div>
                </div>
            </div>

            <nav>
                <ul className="nav flex-row justify-content-center gap-1" style={{ gap: "3px" }}>
                    <li>
                        <button className="btn border-0 bg-transparent" onClick={toggleMenu}>
                            {isMenuOpen ? <BiX /> : <IoIosMenu />} <span>
                                Todas as categorias
                            </span>
                        </button>
                    </li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                    <li><a href="" className="nav-link text-decoration-none text-black">departamento</a></li>
                </ul>
            </nav>
        </header>
    );
}
