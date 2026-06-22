export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="h-display">
          Tu figura <em>definida</em>
          <br />
          con maestría colombiana
        </h1>
        <p>
          Tu figura definida por expertos. En fajas Kisha diseñamos para acompañarte en todo momento. Postoperatorio, postparto reductivos y más. Más de 30 años perfeccionando el molde que tu cuerpo merece.
        </p>
        <div className="hero-ctas">
          <a href="#bestsellers" className="btn-primary">
            <span>Comprar ahora</span>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 6h14m0 0L10 1m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#quiz" className="btn-secondary">
            <span>Encuentra tu faja ideal</span>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 6h14m0 0L10 1m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-img-wrap" role="img" aria-label="Modelo usando una faja colombiana Kisha" />
      </div>
    </section>
  );
}
