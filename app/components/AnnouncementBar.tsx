export default function AnnouncementBar() {
  const items = [
    "ENVÍO GRATIS EN COMPRAS MAYORES A $1,500",
    "3 MSI EN COMPRAS DESDE $1,000",
    "100% COLOMBIANO • MERCADO LÍDER PLATINO",
    "ASESORÍA PERSONALIZADA POR WHATSAPP",
  ];
  const loop = [...items, ...items];
  return (
    <div className="ann-bar">
      <div className="ann-track">
        {loop.map((t, i) => (
          <span key={i}>
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
