const cards = [
  {
    img: "/image/linea-postquirurgica.webp",
    eyebrow: "Línea Postquirúrgica",
    title: "Recupérate con seguridad",
    meta: "Alta compresión · 22 modelos",
    href: "https://w5qyug-cm.myshopify.com/collections/postquirurgicos",
  },
  {
    img: "/image/linea-reductiva.webp",
    eyebrow: "Línea Reductiva",
    title: "Realza tu silueta",
    meta: "Reloj de arena · 18 modelos",
    href: "https://w5qyug-cm.myshopify.com/collections/linea-redutiva",
  },
  {
    img: "/image/linea-segunda-piel.webp",
    eyebrow: "Línea Control",
    title: "Uso diario, invisible",
    meta: "Sin costuras · 14 modelos",
    href: "https://w5qyug-cm.myshopify.com/collections/linea-segunda-piel",
  },
  {
    img: "/image/linea-caballero.webp",
    eyebrow: "Línea Caballero",
    title: "Postura y figura",
    meta: "Camisetas · 6 modelos",
    href: "https://w5qyug-cm.myshopify.com/collections/linea-caballero",
  },
];

export default function NeedsSection() {
  return (
    <section id="nosotros" className="section-pad">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow">Quiénes Somos</span>
          <h2 className="h-section">
            Somos <em>Kisha</em>
          </h2>
          <p>Diseñamos fajas que acompañan cada etapa: de la recuperación al día a día. Compresión firme, ajuste real, confianza que se siente.</p>
        </div>
        <div className="necesidad-grid">
          {cards.map((c) => (
            <a href={c.href} className="nec-card" key={c.title}>
              <div className="nec-card-img" style={{ backgroundImage: `url('${c.img}')` }} />
              <div className="nec-card-content">
                <span className="eyebrow">{c.eyebrow}</span>
                <h3 className="nec-card-title">{c.title}</h3>
                <div className="nec-card-meta">{c.meta}</div>
                <span className="nec-card-cta">
                  Ver línea
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
