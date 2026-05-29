"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <Image
                src="/kisha-logo-white.png"
                alt="Kisha"
                width={150}
                height={70}
                className="footer-logo-img"
              />
            </div>
            <p className="footer-tag">
              Fajas colombianas con más de 20 años perfeccionando la compresión que tu cuerpo merece. Desde Mazatlán, para todo México.
            </p>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="tu@correo.com" />
              <button type="submit">Suscribirme</button>
            </form>
          </div>
          <div className="footer-col">
            <h4>Tienda</h4>
            <ul>
              <li><a href="#">Postquirúrgicas</a></li>
              <li><a href="#">Bodys</a></li>
              <li><a href="#">Cinturillas</a></li>
              <li><a href="#">Shorts Fajas</a></li>
              <li><a href="#">Caballero</a></li>
              <li><a href="#">Maternal</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="#">Guía de tallas</a></li>
              <li><a href="#">Envíos y entregas</a></li>
              <li><a href="#">Cambios y devoluciones</a></li>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">WhatsApp asesoría</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#">Plaza Palmas, Mazatlán</a></li>
              <li><a href="tel:+526699844304">669 984 4304</a></li>
              <li><a href="https://wa.me/526692698425">669 269 8425 · WhatsApp</a></li>
              <li><a href="mailto:Grupokisha@fajaskisha.com.mx">Grupokisha@fajaskisha.com.mx</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Fajas Kisha. Todos los derechos reservados.</div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="14.5" cy="5.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M11 18v-7h2l.5-3H11V6c0-1 .5-1.5 1.5-1.5H14V2h-2c-2.5 0-3.5 1.5-3.5 3.5V8h-2v3h2v7z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path
                  d="M13 2v9.5a2.5 2.5 0 1 1-2.5-2.5M13 2c0 2 1.5 4 4 4M13 2h-2.5v9.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
