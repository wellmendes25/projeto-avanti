export default function Newsletter() {
    return (
      <section className="py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="mt-5" style={{ width: '70%' }}>
          <h3 className="text-center mb-4">
            Cadastre-se na nossa <span className="text-primary">newsletter</span>
          </h3>
          <form
            className="row row-cols-auto align-items-center justify-content-center bg-body-secondary rounded"
            style={{ height: '160px', padding: '0.5rem' }}
          >
            <div className="col-12 col-sm-auto">
              <input
                type="text"
                className="form-control form-control-lg mb-3 mb-sm-0"
                placeholder="Digite seu nome"
                required
                style={{ height: '100%' }}
              />
            </div>
            <div className="col-12 col-sm-auto">
              <input
                type="email"
                className="form-control form-control-lg mb-3 mb-sm-0 ms-sm-2"
                placeholder="Digite seu email"
                required
                style={{ height: '100%' }}
              />
            </div>
            <div className="col-12 col-sm-auto">
              <div className="form-check" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  className="form-check-input form-check-input-lg"
                  id="termosInline"
                  required
                />
                <label className="form-check-label ms-2" htmlFor="termosInline">
                  Aceito os <a href="#" className="text-primary">termos de uso</a> e a <a href="#" className="text-primary">política de privacidade</a>.
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-auto mt-3 mt-sm-0">
              <button type="submit" className="btn btn-primary btn-lg" style={{ height: '100%' }}>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }