/* ─── LOGO COMPACTO ──────────────────────────────── */
export function LogoClaro({ height = 40 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      <div style={{ width: 34, height: 2, background: "#A6854D", marginBottom: 4 }} />
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: Math.round(height * 0.52), letterSpacing: "0.22em", color: "#333534", lineHeight: 1 }}>NŪM</span>
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: Math.round(height * 0.17), letterSpacing: "0.44em", color: "#A6854D", textTransform: "uppercase", marginTop: 3 }}>SYSTEMS</span>
    </div>
  );
}

export function LogoOscuro({ height = 44 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      <div style={{ width: 34, height: 2, background: "#A6854D", marginBottom: 4 }} />
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: Math.round(height * 0.52), letterSpacing: "0.22em", color: "#D7D5D3", lineHeight: 1 }}>NŪM</span>
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: Math.round(height * 0.17), letterSpacing: "0.44em", color: "#A6854D", textTransform: "uppercase", marginTop: 3 }}>SYSTEMS</span>
    </div>
  );
}
