export default function Promises() {
  return (
    <section className="promises-section">
      <div className="container-x">
        <div className="promises">
          <div className="promise">
            <div className="promise-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="4" y="14" width="28" height="18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M32 20h6l4 5v7h-10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="34" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="promise-title">Envío gratis</div>
            <div className="promise-text">En compras mayores a $1,500. Entrega de 2-5 días en todo México.</div>
          </div>
          <div className="promise">
            <div className="promise-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="12" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 20h32" stroke="currentColor" strokeWidth="1.5" />
                <rect x="12" y="26" width="8" height="3" fill="currentColor" />
              </svg>
            </div>
            <div className="promise-title">3 MSI</div>
            <div className="promise-text">Sin intereses con tarjetas participantes. Desde $1,000.</div>
          </div>
          <div className="promise">
            <div className="promise-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="promise-title">100% original</div>
            <div className="promise-text">Solo marca Kisha. Distribuidor oficial colombiano desde 2003.</div>
          </div>
          <div className="promise">
            <div className="promise-icon">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M22 6C13 6 6 13 6 22s7 16 16 16c4 0 7-1 10-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M30 6l-4 10-6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="promise-title">Asesoría personal</div>
            <div className="promise-text">Habla con una experta por WhatsApp. Te ayudamos a elegir tu talla.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
