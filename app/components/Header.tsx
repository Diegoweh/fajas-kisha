import Image from "next/image";

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
          <a href="#" className="nav-link has-drop">
            Catálogo
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
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
