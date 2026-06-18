import { P } from "../theme";
import { LogoOscuro } from "./Logo";

/* ─── FOOTER ─────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background:"#111010", padding:"72px 64px 44px", borderTop:"1px solid rgba(255,255,255,.05)" }}>
      <div className="fcols" style={{ display:"flex", gap:80, marginBottom:64 }}>
        <div style={{ flex:"0 0 260px" }}>
          <div style={{ marginBottom:24 }}><LogoOscuro height={44} /></div>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12, lineHeight:1.7, color:"rgba(160,152,144,.45)" }}>Arquitectura · Ingeniería<br />Sistemas Constructivos · Consultoría</p>
        </div>
        {[
          { h:"Práctica",  links:["Nosotros","Servicios","Experiencia","Materiales"] },
          { h:"Servicios", links:["Consultoría Técnica","Arquitectura e Ingeniería","Sistemas Constructivos","Documentación Ejecutiva"] },
          { h:"Contacto",  links:["Escribinos","LinkedIn","Instagram","Prensa"] },
        ].map(col => (
          <div key={col.h} style={{ flex:1 }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".3em", textTransform:"uppercase", color:"rgba(160,152,144,.35)", marginBottom:22 }}>{col.h}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
              {col.links.map(l => (
                <a key={l} href="#" style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12.5, letterSpacing:".05em", color:"rgba(201,169,110,.45)", textDecoration:"none", transition:"color .25s" }} onMouseEnter={e => e.target.style.color=P.tiza} onMouseLeave={e => e.target.style.color="rgba(201,169,110,.45)"}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:28, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
        <span style={{ fontSize:10, fontWeight:300, letterSpacing:".12em", color:"rgba(160,152,144,.28)" }}>© 2025 NUM Systems. Todos los derechos reservados.</span>
        <span style={{ fontSize:10, fontWeight:300, letterSpacing:".12em", color:"rgba(160,152,144,.18)" }}>Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
}
