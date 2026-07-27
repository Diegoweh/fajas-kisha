"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("kisha-popup-seen")) return;
    const id = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("kisha-popup-seen", "1");
  };

  if (!open) return null;

  return (
    <div className="popup-overlay" onClick={close}>
      <div
        className="popup-card"
        role="dialog"
        aria-modal="true"
        aria-label="Promoción Kisha"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="popup-close"
          aria-label="Cerrar"
          onClick={close}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <Image
          src="/image/kisha-popup.webp"
          alt="Promoción fajas Kisha"
          width={900}
          height={900}
          className="popup-img"
          priority
        />
      </div>
    </div>
  );
}
