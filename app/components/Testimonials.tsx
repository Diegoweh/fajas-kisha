"use client"

import { useEffect, useMemo, useState } from "react"

const items = [
  {
    text: "Compré el body postquirúrgico para mi segunda etapa después de lipo. Las costuras invisibles fueron clave, no sentí presión en los puntos sensibles y la compresión es perfecta.",
    name: "Alejandra G.",
    product: "Body Reloj de Arena · Talla L",
  },
  {
    text: "Llevo 3 años comprando aquí. La diferencia con las fajas baratas de mercado se nota desde el primer día: no se enrollan, no marcan bajo la ropa, y duran años.",
    name: "Daniela R.",
    product: "Cinturilla Segunda Piel · M",
  },
  {
    text: "La asesora por WhatsApp me ayudó a elegir la talla exacta. Llegó en 2 días a Guadalajara y queda perfecta. La calidad colombiana es otra cosa, vale cada peso.",
    name: "María Fernanda H.",
    product: "Short Curvy · XL",
  },
  {
    text: "Después de mi cesárea esta faja fue mi mejor aliada. Recuperé mi postura y la sujeción abdominal me dio una seguridad increíble durante el postparto.",
    name: "Valentina S.",
    product: "Faja Postparto · Talla M",
  },
  {
    text: "Soy enfermera y paso 12 horas de pie. La uso a diario y no me genera marcas ni molestias. El tejido respira y se mantiene en su lugar todo el turno.",
    name: "Carolina P.",
    product: "Body Control Total · L",
  },
  {
    text: "Probé varias marcas y ninguna se compara. La tela es suave, no pica y la compresión es justa. Mi vestido se vio impecable en la boda de mi hermana.",
    name: "Sofía T.",
    product: "Faja Invisible · Talla S",
  },
  {
    text: "El servicio fue de diez. Tenía dudas con las medidas y me respondieron al instante. La faja superó mis expectativas, se siente como una segunda piel.",
    name: "Gabriela M.",
    product: "Cinturilla Reloj de Arena · M",
  },
  {
    text: "Llevo dos meses usándola y mi figura cambió notablemente. Es cómoda incluso sentada todo el día en la oficina. Cien por ciento recomendada.",
    name: "Isabela R.",
    product: "Short Levanta Cola · L",
  },
  {
    text: "La mejor inversión para mi recuperación. Mi cirujano la aprobó y la compresión médica realmente acelera el proceso. Calidad que se nota en cada detalle.",
    name: "Andrea V.",
    product: "Body Postquirúrgico · XL",
  },
]

function getPerPage() {
  if (typeof window === "undefined") return 3
  if (window.matchMedia("(max-width: 640px)").matches) return 1
  if (window.matchMedia("(max-width: 1024px)").matches) return 2
  return 3
}

function chunkItems(perPage: number) {
  const pages: (typeof items)[] = []
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage))
  }
  return pages
}

export default function Testimonials() {
  const [perPage, setPerPage] = useState(3)
  const [page, setPage] = useState(0)
  const pages = useMemo(() => chunkItems(perPage), [perPage])
  const activePage = Math.min(page, pages.length - 1)

  useEffect(() => {
    const updatePerPage = () => setPerPage(getPerPage())
    updatePerPage()
    window.addEventListener("resize", updatePerPage)
    return () => window.removeEventListener("resize", updatePerPage)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPage((current) => (current + 1) % pages.length)
    }, 6000)

    return () => {
      window.clearInterval(interval)
    }
  }, [pages.length])

  const goTo = (i: number) => {
    setPage(i)
  }

  const goPrev = () => setPage((current) => (current - 1 + pages.length) % pages.length)
  const goNext = () => setPage((current) => (current + 1) % pages.length)

  return (
    <section className="testi-section">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow">Lo que dicen nuestras clientas</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            Más de <em>50,000</em> mujeres confían en Kisha
          </h2>
        </div>

        <div className="testi-carousel">
          <button
            className="testi-arrow testi-arrow-prev"
            type="button"
            onClick={goPrev}
            aria-label="Testimonios anteriores"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M17 7H1m0 0 6-6M1 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="testi-viewport">
            <div className="testi-track" style={{ transform: `translateX(-${activePage * 100}%)` }}>
              {pages.map((group, gi) => (
                <div className="testi-page" key={gi}>
                  {group.map((t) => (
                    <div className="testi-card" key={t.name}>
                      <div className="testi-stars" aria-label="5 de 5 estrellas">
                        ★★★★★
                      </div>
                      <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                      <div className="testi-author">
                        <div className="testi-name">
                          {t.name}
                          <span className="testi-verified" aria-label="Compra verificada">
                            ✓
                          </span>
                        </div>
                        <div className="testi-product">{t.product}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            className="testi-arrow testi-arrow-next"
            type="button"
            onClick={goNext}
            aria-label="Siguientes testimonios"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M1 7h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="testi-dots" role="tablist" aria-label="Navegación de testimonios">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testi-dot ${i === activePage ? "active" : ""}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === activePage}
              aria-label={`Ir al grupo de testimonios ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
