import Image from "next/image";

const catalogItems = [
  { label: "Bodys", href: "https://w5qyug-cm.myshopify.com/collections/bodys" },
  { label: "Cinturillas", href: "https://w5qyug-cm.myshopify.com/collections/cinturillas" },
  { label: "Corrector de Postura", href: "https://w5qyug-cm.myshopify.com/collections/corrector-de-postura" },
  { label: "Especiales", href: "https://w5qyug-cm.myshopify.com/collections/especiales" },
  { label: "Fajas Sin Costuras", href: "https://w5qyug-cm.myshopify.com/collections/fajas-sin-costuras" },
  { label: "Línea Remodeladora", href: "https://w5qyug-cm.myshopify.com/collections/linea-remodeladora" },
  { label: "Línea Caballero", href: "https://w5qyug-cm.myshopify.com/collections/linea-caballero" },
  { label: "Línea Maternal", href: "https://w5qyug-cm.myshopify.com/collections/linea-maternal" },
  { label: "Línea Reductiva", href: "https://w5qyug-cm.myshopify.com/collections/linea-redutiva" },
  { label: "Línea Segunda Piel", href: "https://w5qyug-cm.myshopify.com/collections/linea-segunda-piel" },
  { label: "Postquirúrgicos", href: "https://w5qyug-cm.myshopify.com/collections/postquirurgicos" },
  { label: "Short Fajas", href: "https://w5qyug-cm.myshopify.com/collections/short-fajas" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#home" className="logo" aria-label="Kisha">
          <Image
            src="/kisha-logo.png"
            alt="Kisha"
            width={110}
            height={50}
            priority
            className="logo-img"
          />
        </a>
        <div className="nav-left">
          <div className="catalog-menu">
            <button className="nav-link has-drop catalog-trigger" type="button" aria-haspopup="true">
              Catálogo
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
            <div className="catalog-dropdown" role="menu">
              {catalogItems.map((item) => (
                <a key={item.href} href={item.href} className="catalog-item" role="menuitem">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <a href="#necesidad" className="nav-link">Postquirúrgicas</a>
          <a href="#bestsellers" className="nav-link">Más Vendidas</a>
          <a href="#sizing" className="nav-link">Guía de Tallas</a>
        </div>
        
        <div className="nav-right">
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Buscar">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {/* <button className="icon-btn" aria-label="Cuenta">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button> */}
            {/* <button className="icon-btn" aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 17s-6-3.5-6-8a3.5 3.5 0 0 1 6-2.5A3.5 3.5 0 0 1 16 9c0 4.5-6 8-6 8z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="icon-btn" aria-label="Carrito">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h2l2 9h9l2-7H6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="17" r="1.2" fill="currentColor" />
                <circle cx="15" cy="17" r="1.2" fill="currentColor" />
              </svg>
              <span className="cart-count">2</span>
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
