import Image from "next/image";

export default function SuperSale() {
    return (
        <div
            className="container-fluid d-flex align-items-center justify-content-center py-5"
            style={{
                backgroundColor: "#E5EDF1",
                width: "100%",
                margin: 0,
            }}
        >
            <div className="d-flex flex-column flex-md-row align-items-center w-100 h-100">
                <div className="d-flex justify-content-center align-items-center w-100 w-md-50 mb-3 mb-md-0">
                    <Image
                        src="/cadeira.png"
                        alt="Cadeira com roupa"
                        className="img-fluid"
                        priority
                        width={480}
                        height={480}
                        style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                    />
                </div>
                <div className="d-flex flex-column align-items-center align-items-md-start justify-content-between  w-100  ">
                    <div style={{ maxWidth: 520, minWidth: 210, width: "100%" }}>
                        <h1 className="text-center text-md-start" style={{ fontSize: "clamp(3.5rem, 8vw, 100px)" }}>
                            <span className="fw-bold">Super</span>
                            <span style={{ fontWeight: 300 }}>Sale</span>
                        </h1>
                        <p
                            className="text-primary text-center text-md-start" 
                            style={{
                                fontSize: "clamp(1.5rem, 3vw, 40px)",
                                textAlign: "justify",
                                width: "100%",
                                margin: 0
                            }}
                        >
                            Itens selecionados com até <span className="fw-bold">50%OFF!</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}