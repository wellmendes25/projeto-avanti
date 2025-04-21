export default function Newsletter() {
  return (
    <section className="py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
      <div className="mt-5" style={{ width: '70%' }}>
        <h3 className="text-center mb-4">
          Cadastre-se na nossa <span className="text-primary">newsletter</span>
        </h3>

        <form
          className="row row-cols-1 row-cols-sm-auto align-items-center justify-content-center bg-body-secondary rounded text-center text-sm-start"
          style={{ minHeight: '160px', padding: '0.5rem', gap: '0.75rem'}}
        >
          <div className="col mb-3 mb-sm-0" style={{ width: '260px' }}>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="col mb-3 mb-sm-0 ms-sm-2" style={{ width: '260px' }}>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="col d-flex align-items-center justify-content-center ms-sm-2 mb-3 mb-sm-0">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termosInline"
                required
              />
              <label className="form-check-label ms-2" htmlFor="termosInline">
                Aceito os <a href="#" className="text-primary">termos de uso</a>
              </label>
            </div>
          </div>
          <div className="col ms-sm-2">
            <button type="submit" className="btn btn-primary btn-lg">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
