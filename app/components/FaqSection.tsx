const faqs = [
  {
    q: "¿Qué nivel de compresión tienen las fajas?",
    a: "Compresión alta y graduada que se adapta al cuerpo sin restringir el movimiento. Controla vientre alto y bajo, afina el talle y estiliza la figura de forma cómoda.",
  },
  {
    q: "¿De qué material están hechas?",
    a: "Doble capa de Powernet + Spandex, con costuras invisibles que no marcan ni lastiman y materiales transpirables que regulan la temperatura. Fabricación de origen colombiano.",
  },
  {
    q: "¿Sirven para uso postquirúrgico?",
    a: "Sí. Son aptas tanto para recuperación postquirúrgica (segunda etapa) como para uso diario. Para uso postquirúrgico, sigue siempre las indicaciones de tu médico sobre el tiempo de uso.",
  },
  {
    q: "¿Cómo me la coloco correctamente?",
    a: "Colócala desde los pies hacia arriba, alinea las costuras con tu figura y abrocha los cierres de abajo hacia arriba, empezando por el nivel más holgado. Usa siempre la talla correcta según tu guía de medidas.",
  },
  {
    q: "¿Qué tallas hay disponibles?",
    a: "XS · S · M · L · XL · XXL · XXXL · 4XL. Si tu cuerpo es asimétrico, elige siempre la talla de tu medida más grande.",
  },
  {
    q: "¿Cómo debo lavarla y cuidarla?",
    a: "Lava a mano con agua fría y jabón neutro. No uses cloro ni suavizante. No estrujes; presiona suavemente y seca a la sombra en horizontal. No la planches, metas a la secadora ni a la lavadora.",
  },
  {
    q: "¿Hacen envíos y cuánto tardan?",
    a: "Enviamos a todo México. Tras confirmar el pago, tu pedido se procesa en 1 a 2 días hábiles y recibirás un número de rastreo. Los tiempos de entrega varían según tu ubicación; consúltanos por WhatsApp al +52 669 269 8425.",
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section" id="faqs">
      <div className="container-x">
        <div className="faq-head">
          <span className="eyebrow">Preguntas Frecuentes</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            Todo lo que <em>necesitas saber</em>.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-question">
                <span>{item.q}</span>
                <svg className="faq-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
