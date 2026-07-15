"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: (
      <>
        Tu figura <em>definida</em>
        <br />
        por expertos
      </>
    ),
    text: "En fajas Kisha diseñamos para acompañarte en todo momento. Postoperatorio, postparto reductivos y más. Más de 30 años perfeccionando el molde que tu cuerpo merece.",
    image: "/image/women-2.webp",
    alt: "Modelo usando una faja colombiana Kisha",
  },
  {
    title: <>Promo Verano -15% de descuento comprando en la web</>,
    text: "En fajas Kisha diseñamos para acompañarte en todo momento. Postoperatorio, postparto reductivos y más. Más de 30 años perfeccionando el molde que tu cuerpo merece.",
    image: "/image/women-3.webp",
    alt: "Modelo usando una faja colombiana Kisha",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="h-display">{slide.title}</h1>
        <p>{slide.text}</p>
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
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot${i === active ? " active" : ""}`}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div
          className="hero-img-wrap"
          role="img"
          aria-label={slide.alt}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      </div>
    </section>
  );
}
