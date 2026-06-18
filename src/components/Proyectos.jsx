import { P } from "../theme";
import { Etiqueta, Divisor } from "./ui";
import { CATS, PROYECTOS } from "../data/proyectos";

/* ─── PROYECTOS ──────────────────────────────────── */
export function Proyectos({ onOpen }) {
  return (
    <section id="proyectos" style={{ background:P.tiza, padding:"130px 64px 110px" }}>
      <div className="reveal" style={{ marginBottom:80 }}>
        <Etiqueta>Trayectoria</Etiqueta>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:32 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(40px,5vw,64px)", lineHeight:1.05, color:P.negro, maxWidth:480 }}>Experiencia<br /><span style={{ fontStyle:"italic", color:P.dorado }}>Profesional</span></h2>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.9, letterSpacing:".02em", color:P.suave, maxWidth:440 }}>Selección de proyectos desarrollados por los integrantes de NumSystems a lo largo de su trayectoria en estudios de arquitectura, empresas constructoras y equipos interdisciplinarios. Cada experiencia aportó conocimientos en documentación técnica, coordinación de especialidades, gestión de obra y dirección de equipos.</p>
        </div>
      </div>
      <Divisor margen="0 0 56px" />
      <div style={{ display:"flex", gap:28, marginBottom:48, flexWrap:"wrap" }}>
        {Object.values(CATS).map(c => (
          <div key={c.label} style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:8, height:8, background:c.color, flexShrink:0 }} />
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".22em", textTransform:"uppercase", color:P.suave }}>{c.label}</span>
          </div>
        ))}
      </div>
      <div className="gp" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:3 }}>
        {PROYECTOS.map((p,i) => {
          const cat = CATS[p.cat];
          return (
            <div key={p.id} className={`reveal rv${(i%3)+1} proy-card`} onClick={() => onOpen(p)}>
              <img
                src={p.img}
                alt={p.titulo}
                loading="lazy"
                onError={e => { if (p.imgFallback && e.currentTarget.src !== p.imgFallback) e.currentTarget.src = p.imgFallback; }}
              />
              <div style={{ position:"absolute", top:16, left:16, background:"rgba(28,26,24,.72)", backdropFilter:"blur(8px)", padding:"5px 12px", border:`1px solid ${cat.color}40` }}>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:8, fontWeight:400, letterSpacing:".30em", textTransform:"uppercase", color:cat.color === "#9B7230" ? "#C9A96E" : cat.color === "#6B3F34" ? "#C08060" : "#8FA0AC" }}>{cat.label}</span>
              </div>
              <div className="proy-overlay" />
              <div className="proy-info">
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".22em", color:"rgba(201,169,110,.75)", display:"block", marginBottom:8, textTransform:"uppercase" }}>{p.tipo}</span>
                <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:20, color:"#F2EEE8", letterSpacing:".02em", lineHeight:1.15, marginBottom:10 }}>{p.titulo}</h4>
                <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:300, color:"rgba(242,238,232,.60)", letterSpacing:".02em", lineHeight:1.65, marginBottom:12 }}>{p.resumen}</p>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:300, color:"rgba(201,169,110,.50)", letterSpacing:".18em", textTransform:"uppercase" }}>{p.lugar}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
