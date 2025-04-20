import Image from "next/image";

// importando fotos
import fotoModelo1 from "../../../../public/modelo1.jpg";
import fotoModelo2 from "../../../../public/modelos.jpg";
import local from "../../../../public/local.png";

export default function Section() {
  return (
    <main>
      <section className="container py-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-md-4 mb-5">
        <div
          className="d-flex justify-content-center mb-4 mb-md-0" // Adicionado espaçamento vertical em telas menores
          style={{ maxWidth: "750px", width: "100%", height: "auto" }}
        >
          <Image
            src={fotoModelo1}
            alt="Modelo"
            width={750}
            height={750}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div
          className="d-flex flex-column justify-content-center align-items-start text-start"
          style={{ maxWidth: "600px", height: "auto" }}
        >
          <h1>LOREM IPSU</h1>
          <p className="fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            voluptatum repudiandae quos recusandae ea deleniti sint illo
            molestias? Quae doloremque aspernatur suscipit fugiat cumque magni?
            Aspernatur hic reiciendis suscipit officiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cumque iste dolor nemo perferendis
            odit, deleniti distinctio voluptatum suscipit laudantium ipsam natus
            beatae molestias ullam quis sequi? Voluptatum quas iure dolore! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo,
            rerum, consequuntur debitis ex autem tenetur voluptatem error
            architecto similique esse animi reprehenderit laborum. Odit,
            consequatur! Reiciendis quibusdam iusto provident!
          </p>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolores quia architecto repellendus voluptatibus natus,
            cum ipsum aliquid sint libero amet atque eveniet quam, assumenda
            provident possimus, voluptates dolor commodi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquid in omnis harum tenetur
            ducimus eligendi odit eos velit dolorum blanditiis maxime nobis aut
            ut, delectus, facere rem sapiente eveniet minus!
          </p>
        </div>
      </section>

      <section
        className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-4 py-5"
        style={{ backgroundColor: "#E5EDF1", width: "100%", height: "auto" }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-start text-start gap-4 mb-4 mb-md-0" // Adicionado espaçamento vertical em telas menores
          style={{ maxWidth: "500px", height: "auto" }}
        >
          <span className="d-flex align-items-center gap-2">
            <Image src={local} width={80} height={80} alt="Local" style={{ maxWidth: "80px", height: "auto" }} />
            <p className="mb-0 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eius error dolorem quibusdam voluptatem...
            </p>
          </span>

          <span className="d-flex align-items-center gap-2">
            <Image src={local} width={80} height={80} alt="Local" style={{ maxWidth: "80px", height: "auto" }} />
            <p className="mb-0 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eius error dolorem quibusdam voluptatem...
            </p>
          </span>

          <span className="d-flex align-items-center gap-2">
            <Image src={local} width={80} height={80} alt="Local" style={{ maxWidth: "80px", height: "auto" }} />
            <p className="mb-0 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eius error dolorem quibusdam voluptatem...
            </p>
          </span>
        </div>

        <div style={{ maxWidth: "600px", width: "100%", height: "auto" }}>
          <Image
            src={fotoModelo2}
            alt="Modelo"
            width={600}
            height={650}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </section>

      <section className="container py-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-md-4 mb-5">
        <div
          className="d-flex justify-content-center mb-4 mb-md-0" // Adicionado espaçamento vertical em telas menores
          style={{ maxWidth: "750px", width: "100%", height: "auto" }}
        >
          <Image
            src={fotoModelo1}
            alt="Modelo"
            width={750}
            height={750}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div
          className="d-flex flex-column justify-content-center align-items-start text-start"
          style={{ maxWidth: "600px", height: "auto" }}
        >
          <h1>LOREM IPSU</h1>
          <p className="fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            voluptatum repudiandae quos recusandae ea deleniti sint illo
            molestias? Quae doloremque aspernatur suscipit fugiat cumque magni?
            Aspernatur hic reiciendis suscipit officiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cumque iste dolor nemo perferendis
            odit, deleniti distinctio voluptatum suscipit laudantium ipsam natus
            beatae molestias ullam quis sequi? Voluptatum quas iure dolore! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo,
            rerum, consequuntur debitis ex autem tenetur voluptatem error
            architecto similique esse animi reprehenderit laborum. Odit,
            consequatur! Reiciendis quibusdam iusto provident!
          </p>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus dolores quia architecto repellendus voluptatibus natus,
            cum ipsum aliquid sint libero amet atque eveniet quam, assumenda
            provident possimus, voluptates dolor commodi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aliquid in omnis harum tenetur
            ducimus eligendi odit eos velit dolorum blanditiis maxime nobis aut
            ut, delectus, facere rem sapiente eveniet minus!
          </p>
        </div>
      </section>
    </main>
  );
}