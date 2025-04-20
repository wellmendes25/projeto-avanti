export default function Contatos() {
    return (
      <section className="position-relative overflow-hidden" style={{ height: '650px' }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url("/fundo-roupas.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        ></div>
        <div
          className="bg-primary text-white p-5 rounded w-100 text-center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1>Entre em contato e verifique se tem uma loja proximo a você</h1>
        </div>

      </section>
    );
  }