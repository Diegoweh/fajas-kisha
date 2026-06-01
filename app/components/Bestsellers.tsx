"use client";

import { useState } from "react";

type Cat = "todas" | "postquirurgicas" | "bodys" | "shorts";

type Product = {
  cat: string;
  catKey: Exclude<Cat, "todas">;
  title: string;
  rating: string;
  ratingCount: string;
  price: string;
  priceOld: string;
  msi: string;
  main: string;
  hover: string;
  colors: string[];
  badges: { text: string; cls: string }[];
};

const products: Product[] = [
  {
    cat: "Postquirúrgico",
    catKey: "postquirurgicas",
    title: "Body Reloj de Arena",
    rating: "4.9",
    ratingCount: "124",
    price: "$2,464.15",
    priceOld: "$2,899",
    msi: "o 3 pagos de $821 sin intereses",
    main: "/image/body-reloj-arena.webp",
    hover: "/image/body-reloj-arena-2.webp",
    colors: ["#3D2818", "#1A1A1A"],
    badges: [
      { text: "Más vendido", cls: "badge-best" },
      { text: "-15%", cls: "badge-sale" },
    ],
  },
  {
    cat: "Shorts Fajas",
    catKey: "shorts",
    title: "Short Curvy Tiro Alto",
    rating: "4.8",
    ratingCount: "87",
    price: "$1,954.15",
    priceOld: "$2,299",
    msi: "o 3 pagos de $651 sin intereses",
    main: "/image/short-curvy-tiro-alto.webp",
    hover: "/image/short-curvy-tiro-alto-2.webp",
    colors: ["#E8D5C4", "#1A1A1A"],
    badges: [{ text: "-15%", cls: "badge-sale" }],
  },
  {
    cat: "Bodys",
    catKey: "bodys",
    title: "Body Curvy Straples",
    rating: "5.0",
    ratingCount: "42",
    price: "$2,125.00",
    priceOld: "$2,500",
    msi: "o 3 pagos de $708 sin intereses",
    main: "/image/body-curvy-straples.webp",
    hover: "/image/body-curvy-straples-2.webp",
    colors: ["#E8D5C4", "#3D2818"],
    badges: [{ text: "Nuevo", cls: "badge-new" }],
  },
  {
    cat: "Cinturillas",
    catKey: "postquirurgicas",
    title: "Cinturilla Segunda Piel",
    rating: "4.9",
    ratingCount: "203",
    price: "$1,317.50",
    priceOld: "$1,550",
    msi: "o 3 pagos de $439 sin intereses",
    main: "/image/cinturilla-segunda-piel.webp",
    hover: "/image/cinturilla-segunda-piel-2.webp",
    colors: ["#E8D5C4", "#1A1A1A", "#8B5A3C"],
    badges: [
      { text: "Últimas piezas", cls: "badge-stock" },
      { text: "-15%", cls: "badge-sale" },
    ],
  },
];

const filtros: { id: Cat; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "postquirurgicas", label: "Postquirúrgicas" },
  { id: "bodys", label: "Bodys" },
  { id: "shorts", label: "Shorts" },
];

export default function Bestsellers() {
  const [filter, setFilter] = useState<Cat>("todas");
  const list = filter === "todas" ? products : products.filter((p) => p.catKey === filter);

  return (
    <section className="products-section" id="bestsellers">
      <div className="container-x">
        <div className="products-head">
          <div>
            <span className="eyebrow">Más vendidas</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Las favoritas de <em>nuestras clientas</em>
            </h2>
          </div>
          <div className="products-filters">
            {filtros.map((f) => (
              <button
                key={f.id}
                className={`filter-chip ${filter === f.id ? "active" : ""}`}
                onClick={() => setFilter(f.id)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {list.map((p) => (
            <a href="#" className="product-card" key={p.title}>
              <div className="product-img">
                {/* <div className="product-badges">
                  {p.badges.map((b) => (
                    <span key={b.text} className={`badge ${b.cls}`}>{b.text}</span>
                  ))}
                </div> */}
                {/* <button
                  className="product-wishlist"
                  aria-label="Wishlist"
                  onClick={(e) => e.preventDefault()}
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 17s-6-3.5-6-8a3.5 3.5 0 0 1 6-2.5A3.5 3.5 0 0 1 16 9c0 4.5-6 8-6 8z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button> */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-main" src={p.main} alt={p.title} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-hover" src={p.hover} alt={`${p.title} alterna`} />
                <button
                  className="product-quick"
                  onClick={(e) => e.preventDefault()}
                  type="button"
                >
                  + Vista rápida
                </button>
              </div>
              <div className="product-info">
                <div className="product-cat">{p.cat}</div>
                <h3 className="product-title">{p.title}</h3>
                <div className="product-rating">
                  <span className="stars">★★★★★</span> {p.rating} ({p.ratingCount})
                </div>
                <div className="product-price">
                  <span className="price-current">{p.price}</span>
                  <span className="price-old">{p.priceOld}</span>
                </div>
                <div className="price-msi">{p.msi}</div>
                <div className="product-colors">
                  {p.colors.map((c) => (
                    <span key={c} className="color-dot" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <a href="#" className="btn-secondary">Ver todas las fajas →</a>
        </div>
      </div>
    </section>
  );
}
