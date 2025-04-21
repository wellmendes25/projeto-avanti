import Image from "next/image";
import Logo from "../../../../public/logo.png";

// react-icons
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

// importando cartões de crédito
import { RiVisaFill } from "react-icons/ri";
import { LiaCcAmex } from "react-icons/lia";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiNubank } from "react-icons/si";

// importando outros icones
import { FaChrome } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { SiOperagx } from "react-icons/si";


export default function Footer() {
  return (
    <footer >
      <div className="bg-light py-5 " >

      
        <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 mb-4 text-center text-md-start">
                <Image src={Logo} width={100} alt="Logo" />
                <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-2 fs-5">
                  <IoLogoInstagram size={25}/>
                  <FaFacebookF size={25} />
                  <FiYoutube size={25}/>
                  <CiLinkedin size={25} />
                </div>
              </div>
            
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4 className="fw-bold">Institucional</h4>
                <h5>Sobre Nós</h5>
                <h5>Nossas Lojas</h5>
                <h5>Privacidade e Segurança</h5>
                <h5>Termos e Condições</h5>
              </div>
            
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4 className="fw-bold">Central de ajuda</h4>
                <h5>Fale Conosco</h5>
                <h5>Frete e Entrega</h5>
                <h5>Trocas e Devoluções</h5>
                <h5>Formas de Pagamento</h5>
                <h5>FAQ</h5>
              </div>
            
              <div className="col-12 col-sm-6 col-md-3 mb-4">
                <h4 className="fw-bold">Atendimento</h4>
                <h5><strong>Telefone:</strong> 0800 123 456</h5>
                <h5>Horário de atendimento:</h5>
                <h5>Seg a Sex - 08h às 18h</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center mt-4">
                <div className="d-flex justify-content-center gap-3 fs-3">
                  <RiVisaFill size={25}/>
                  <LiaCcAmex size={25}/>
                  <FaCcMastercard size={25}/>
                  <FaCcPaypal size={25}/>
                  <SiNubank size={25}/>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="text-center mt-5 container">
        <p className="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in voluptate neque dolor, fugiat sunt ullam ad est adipisci odit laboriosam optio suscipit minima repellat consequatur aspernatur recusandae. Nemo, dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur vitae possimus perferendis, quos sequi nihil reiciendis ipsam officia neque itaque velit atque. Ipsa natus voluptates mollitia illo nesciunt, rerum culpa!</p>

        <span className="d-flex justify-content-center gap-3 mb-4"> <FaChrome size={30}/> <FaInternetExplorer size={30}/> <FaSquarePinterest size={30}/> <SiOperagx size={30}/> </span>
      </div>
    </footer>
  );
}
