export default function StoreSection() {
  return (
    <section className="store-section">
      <div className="store-wrap">
        <div className="store-img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.472902874715!2d-106.45303929648063!3d23.244995357802576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f55194077aed9%3A0x5012e7fee8f7d0c4!2sFajas%20Colombianas%20KISHA%20-%20Matriz%20Sinaloa!5e0!3m2!1ses-419!2smx!4v1780085110628!5m2!1ses-419!2smx"
            title="Mapa de Fajas Colombianas KISHA - Matriz Sinaloa"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="store-content">
          <span className="eyebrow">Encuentranos en Mazatlán</span>
          <h2 className="h-section">
            Pruébate antes de <em>elegir</em>.
          </h2>
          <p>
            Visita nuestra tienda en Plaza Palmas y déjate asesorar por nuestras expertas en compresión. Probadores privados, atención sin prisa, y todas las tallas disponibles.
          </p>
          <div className="store-info">
            <div className="store-info-row">
              <div className="store-info-icon">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <div>
                <div className="store-info-label">Dirección</div>
                <div className="store-info-text">
                  Plaza Palmas, Av. Camarón Sábalo #333
                  <br />Local 30, Zona Dorada, Mazatlán
                </div>
              </div>
            </div>
            <div className="store-info-row">
              <div className="store-info-icon">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="store-info-label">Horario</div>
                <div className="store-info-text">
                  Lun a Sáb · 10:00 – 20:00
                  <br />Dom · 11:00 – 18:00
                </div>
              </div>
            </div>
          </div>
          {/* <a href="#" className="store-cta">
            Cómo llegar
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M1 6h14m0 0L10 1m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
}
