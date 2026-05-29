"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Objetivo = "postoperatorio" | "reducir" | "diario" | "postparto";

const opciones: {
  id: Objetivo;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  desc: string;
}[] = [
  {
    id: "postoperatorio",
    icon: "/image/delgado.png",
    iconWidth: 58,
    iconHeight: 60,
    title: "Postoperatorio",
    desc: "Recuperación de cirugía estética",
  },
  {
    id: "reducir",
    icon: "/image/cintura.png",
    iconWidth: 61,
    iconHeight: 61,
    title: "Reducir cintura",
    desc: "Modelar y comprimir",
  },
  {
    id: "diario",
    icon: "/image/vestido.png",
    iconWidth: 39,
    iconHeight: 61,
    title: "Uso diario",
    desc: "Invisible bajo la ropa",
  },
  {
    id: "postparto",
    icon: "/image/embarazada.png",
    iconWidth: 44,
    iconHeight: 60,
    title: "Post-parto",
    desc: "Recuperación maternal",
  },
];

const recommendations: Record<
  Objetivo,
  { cat: string; title: string; img: string; price: string; priceOld: string; headline: string; sub: string }
> = {
  postoperatorio: {
    cat: "Línea Postquirúrgica",
    title: "Body Reloj de Arena Postquirúrgico",
    img: "https://fajaskisha.mx/wp-content/uploads/2025/05/dsc_3410-copia-460x460.jpeg",
    price: "$2,464",
    priceOld: "$2,899",
    headline: "Tu recuperación, en tus manos.",
    sub: "Body postquirúrgico de alta compresión con costuras invisibles, ideal para segunda etapa después de cirugía estética.",
  },
  reducir: {
    cat: "Cinturillas",
    title: "Cinturilla Segunda Piel",
    img: "https://fajaskisha.mx/wp-content/uploads/2023/03/cinturilla-B-05.jpg",
    price: "$1,317",
    priceOld: "$1,550",
    headline: "Reduce y moldea, sin sacrificar comodidad.",
    sub: "Cinturilla de alta compresión que reduce cintura inmediatamente. Power net colombiano para uso diario.",
  },
  diario: {
    cat: "Línea Control",
    title: "Short Curvy Tiro Alto",
    img: "https://fajaskisha.mx/wp-content/uploads/2025/12/c640ad04-c79c-4797-8c36-53c57430e7d8-460x460.jpeg",
    price: "$1,954",
    priceOld: "$2,299",
    headline: "La silueta perfecta, todos los días.",
    sub: "Short faja invisible bajo la ropa, compresión media, ideal para uso diario sin sacrificar comodidad.",
  },
  postparto: {
    cat: "Línea Maternal",
    title: "Body Curvy Straples",
    img: "https://fajaskisha.mx/wp-content/uploads/2025/12/post-de-instagram-kisha-45-2-460x460.png",
    price: "$2,125",
    priceOld: "$2,500",
    headline: "Recupera tu figura, a tu ritmo.",
    sub: "Body diseñado para postparto: compresión progresiva, broches ajustables y cierre perineal cómodo.",
  },
};

const tablas = {
  torax: [
    [66, 71, "XS"], [71, 76, "S"], [76, 84, "M"], [84, 91, "L"],
    [91, 99, "XL"], [99, 107, "2XL"], [107, 114, "3XL"],
  ],
  cintura: [
    [56, 61, "XS"], [61, 67, "S"], [67, 75, "M"], [75, 84, "L"],
    [84, 94, "XL"], [94, 104, "2XL"], [104, 114, "3XL"],
  ],
  cadera: [
    [81, 89, "XS"], [89, 97, "S"], [97, 105, "M"], [105, 114, "L"],
    [114, 124, "XL"], [124, 134, "2XL"], [134, 144, "3XL"],
  ],
} as const;

const ordenTallas = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "3XL+"];

function buscar(valor: number, tabla: readonly (readonly [number, number, string])[]) {
  for (const [min, max, talla] of tabla) {
    if (valor >= min && valor <= max) return talla;
  }
  if (valor > tabla[tabla.length - 1][1]) return "3XL+";
  return null;
}

function calcularTalla(torax: number, cintura: number, cadera: number) {
  const tT = buscar(torax, tablas.torax);
  const tC = buscar(cintura, tablas.cintura);
  const tD = buscar(cadera, tablas.cadera);
  const candidatas = [tT, tC, tD].filter((x): x is string => !!x);
  if (!candidatas.length) return "M";
  return candidatas.reduce((max, t) =>
    ordenTallas.indexOf(t) > ordenTallas.indexOf(max) ? t : max
  );
}

export default function Quiz() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [torax, setTorax] = useState("");
  const [cintura, setCintura] = useState("");
  const [cadera, setCadera] = useState("");

  const medidasValidas = useMemo(() => {
    const t = parseInt(torax);
    const c = parseInt(cintura);
    const d = parseInt(cadera);
    return [t, c, d].every((v) => v >= 50 && v <= 150);
  }, [torax, cintura, cadera]);

  const talla = useMemo(() => {
    if (!medidasValidas) return "M";
    return calcularTalla(parseInt(torax), parseInt(cintura), parseInt(cadera));
  }, [torax, cintura, cadera, medidasValidas]);

  const rec = objetivo ? recommendations[objetivo] : null;

  function reset() {
    setObjetivo(null);
    setTorax("");
    setCintura("");
    setCadera("");
    setStep(1);
  }

  return (
    <section className="quiz-section" id="quiz">
      <div className="container-x">
        <div className="quiz-wrap">
          <div className="quiz-text">
            <span className="eyebrow" style={{ color: "var(--copper)" }}>Asesoría inteligente</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              ¿No sabes <em>qué faja</em> necesitas?
            </h2>
            <p>
              Responde 3 preguntas rápidas y te recomendamos el modelo y la talla exacta para tu cuerpo y tu objetivo. Sin enredos, sin devoluciones.
            </p>
            <div className="quiz-steps-info">
              {["Cuéntanos tu objetivo", "Ingresa tus medidas", "Recibe tu recomendación"].map((label, i) => (
                <div key={label} className={`quiz-step-info ${step >= i + 1 ? "done" : ""}`}>
                  <span className="quiz-num">{i + 1}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="quiz-card">
            <div className="quiz-progress-bar">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`quiz-progress-segment ${step >= i ? "done" : ""}`} />
              ))}
            </div>

            {step === 1 && (
              <div className="quiz-panel active">
                <span className="quiz-step-label">Paso 1 de 3</span>
                <h3>¿Cuál es tu objetivo?</h3>
                <p className="quiz-sub">Esto define qué línea de compresión es ideal para ti.</p>
                <div className="quiz-options">
                  {opciones.map((o) => (
                    <button
                      key={o.id}
                      className={`quiz-opt ${objetivo === o.id ? "active" : ""}`}
                      onClick={() => setObjetivo(o.id)}
                      type="button"
                    >
                      <span className="quiz-opt-icon" aria-hidden="true">
                        <Image
                          src={o.icon}
                          alt=""
                          width={o.iconWidth}
                          height={o.iconHeight}
                          className="quiz-opt-icon-img"
                        />
                      </span>
                      <div className="quiz-opt-title">{o.title}</div>
                      <div className="quiz-opt-desc">{o.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="quiz-actions">
                  <button className="quiz-btn-back" disabled>← Atrás</button>
                  <button
                    className="quiz-btn-next"
                    disabled={!objetivo}
                    onClick={() => setStep(2)}
                    type="button"
                  >
                    Siguiente
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6h14m0 0L10 1m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="quiz-panel active">
                <span className="quiz-step-label">Paso 2 de 3</span>
                <h3>Tus medidas exactas</h3>
                <p className="quiz-sub">
                  Mide con cinta justa al contorno (ni apretada ni floja). Usaremos la <strong>medida más grande</strong>.
                </p>
                <div className="quiz-measures">
                  <div className="quiz-measure-field">
                    <label>Tórax <span className="hint">(bajo el busto)</span></label>
                    <div className="unit-row">
                      <input
                        type="number"
                        min={50}
                        max={150}
                        placeholder="76"
                        value={torax}
                        onChange={(e) => setTorax(e.target.value)}
                      />
                      <span className="unit">cm</span>
                    </div>
                  </div>
                  <div className="quiz-measure-field">
                    <label>Cintura <span className="hint">(parte más angosta)</span></label>
                    <div className="unit-row">
                      <input
                        type="number"
                        min={50}
                        max={150}
                        placeholder="70"
                        value={cintura}
                        onChange={(e) => setCintura(e.target.value)}
                      />
                      <span className="unit">cm</span>
                    </div>
                  </div>
                  <div className="quiz-measure-field">
                    <label>Cadera <span className="hint">(parte más ancha)</span></label>
                    <div className="unit-row">
                      <input
                        type="number"
                        min={50}
                        max={150}
                        placeholder="100"
                        value={cadera}
                        onChange={(e) => setCadera(e.target.value)}
                      />
                      <span className="unit">cm</span>
                    </div>
                  </div>
                </div>
                <div className="quiz-actions">
                  <button className="quiz-btn-back" onClick={() => setStep(1)} type="button">← Atrás</button>
                  <button
                    className="quiz-btn-next"
                    disabled={!medidasValidas}
                    onClick={() => setStep(3)}
                    type="button"
                  >
                    Ver mi recomendación
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1 6h14m0 0L10 1m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && rec && (
              <div className="quiz-panel active">
                <div className="quiz-result">
                  <span className="quiz-result-badge">✓ Tu recomendación personalizada</span>
                  <h3>{rec.headline}</h3>
                  <p className="quiz-sub">{rec.sub}</p>

                  <div className="quiz-result-product">
                    <div className="quiz-result-img">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={rec.img} alt={rec.title} />
                    </div>
                    <div className="quiz-result-info">
                      <div className="product-cat">{rec.cat}</div>
                      <h4>{rec.title}</h4>
                      <div className="quiz-result-price">
                        <span className="price-current">{rec.price}</span>
                        <span className="price-old">{rec.priceOld}</span>
                      </div>
                      <div>
                        <span className="quiz-result-size">Tu talla: {talla}</span>
                      </div>
                    </div>
                  </div>

                  <div className="quiz-result-actions">
                    <a href="#" className="btn-primary">
                      <span>Ver producto</span>
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                        <path d="M1 6h14m0 0L10 1m5 5l-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <button className="quiz-result-restart" onClick={reset} type="button">
                      Reiniciar test
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
