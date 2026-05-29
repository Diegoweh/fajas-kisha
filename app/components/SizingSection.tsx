export default function SizingSection() {
  return (
    <section className="sizing-section" id="sizing">
      <div className="container-x">
        <div className="sizing-wrap">
          <div className="sizing-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image/figura.png"
              alt="Cómo medirte"
            />
            {/* <div className="sizing-marks">
              <div className="mark mark-1">
                <span className="mark-dot" />
                <span className="mark-label">Tórax</span>
              </div>
              <div className="mark mark-2">
                <span className="mark-dot" />
                <span className="mark-label">Cintura</span>
              </div>
              <div className="mark mark-3">
                <span className="mark-dot" />
                <span className="mark-label">Cadera</span>
              </div>
            </div> */}
          </div>
          <div className="sizing-text">
            <span className="eyebrow">Guía de Tallas</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Tu <em>talla exacta</em>, sin adivinar.
            </h2>
            <p>
              La compresión sólo funciona si la talla es la correcta. Mide con cinta justa al contorno (no apretada, no floja) y elige la talla que corresponda a la <strong>medida más grande</strong> de tu cuerpo.
            </p>
            <table className="size-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>XS</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>2XL</th><th>3XL</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Tórax</td><td>66–71</td><td>71–76</td><td>76–84</td><td>84–91</td><td>91–99</td><td>99–107</td><td>107–114</td></tr>
                <tr><td>Cintura</td><td>56–61</td><td>61–67</td><td>67–75</td><td>75–84</td><td>84–94</td><td>94–104</td><td>104–114</td></tr>
                <tr><td>Cadera</td><td>81–89</td><td>89–97</td><td>97–105</td><td>105–114</td><td>114–124</td><td>124–134</td><td>134–144</td></tr>
              </tbody>
            </table>
            <div className="sizing-note">
              <strong>Cuerpo asimétrico:</strong> si tu cintura es L pero tu cadera es XL, pide siempre la talla más grande. La compresión se ajusta hacia adentro, nunca al revés.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
