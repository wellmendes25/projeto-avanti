'use client'
import Image from 'next/image';
import React, { useState } from 'react';


// Importando os ícones
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { BiX } from "react-icons/bi";


export default function Header({onBuscar}) {
    const [MenuAberto, setMenuAberto] = useState(false);
    const [filtraPorNome, setFiltraPorNome] = useState('');

    function buscarProdutoNome(nome) {
        onBuscar(nome);
    }

    function Abrir(){
        setMenuAberto(!MenuAberto);
    }


    return (
        <header className="bg-light py-0 d-flex flex-column gap-3" style={{ position: "sticky", top: 0, zIndex: 10000 }}>

                <div
                    className="w-100 text-center bg-primary align-items-start justify-content-center "
                    style={{ fontSize: "14px", color: 'white', padding: "4px 0", fontWeight: "bold", position: "relative", top: 0, zIndex: 10 }} 
                >
                    Ganhe <span style={{ backgroundColor: 'purple', padding: '2px', margin: "0px 2px", borderRadius: '4px' }}>R$10,00</span> de desconto no seu primeiro pedido. Utilize o cupom <span style={{ fontWeight: 200 }}>DESCONTO10</span>
                </div>
               

            <div className="container">
                <div className="container d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3 mb-3">
                    <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-4 w-100">
                        <Image src="/logo.png" alt="Logo" width={100} height={50} />
                        <div className="container d-flex align-items-center">
                            <form onSubmit={(e) => {e.preventDefault();buscarProdutoNome(filtraPorNome);}} className="d-flex align-items-center gap-2" style={{ width: "100%" }}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Buscar por nome..."
                                    value={filtraPorNome}
                                    onChange={(e) => setFiltraPorNome(e.target.value)}
                                />
                                <button className="btn btn-primary ms-2" onClick={() => buscarProdutoNome(filtraPorNome)}>
                                    <FaSearch />
                                </button>
                            </form>
                        </div>

                    </div>
                    <div className="d-none d-md-flex align-items-center gap-2 gap-md-3 mt-3 mt-md-0">
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

            <nav className="d-none d-md-block">
                <ul  className="nav flex-row justify-content-center gap-1" style={{ gap: "3px" }}>
                    <li>
                        <button className="btn border-0 bg-transparent" onClick={Abrir}>
                            {MenuAberto ? <BiX /> : <IoIosMenu />} <span>
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