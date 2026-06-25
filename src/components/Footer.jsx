import { P } from "../theme";
import { LogoOscuro } from "./Logo";
import { scrollTo } from "../utils";

/* ─── FOOTER ─────────────────────────────────────── */
export function Footer() {
  const waMensaje = "Hola NUM Systems, quisiera hacer una consulta sobre un proyecto.";
  const waUrl = `https://wa.me/5491141567985?text=${encodeURIComponent(waMensaje)}`;

  const columnas = [
    { h:"Práctica", links:[
      { label:"Nosotros",    scroll:"nosotros" },
      { label:"Servicios",   scroll:"servicios" },
      { label:"Experiencia", scroll:"proyectos" },
      { label:"Materiales",  scroll:"materiales" },
    ]},
    { h:"Servicios", links:[
      { label:"Consultoría Técnica",        scroll:"servicios" },
      { label:"Arquitectura e Ingeniería",  scroll:"servicios" },
      { label:"Sistemas Constructivos",     scroll:"servicios" },
      { label:"Documentación Ejecutiva",    scroll:"servicios" },
    ]},
    { h:"Contacto", links:[
      { label:"WhatsApp",  href:waUrl,                                                  externo:true },
      { label:"LinkedIn",  href:"https://www.linkedin.com/company/numsystems/about/",   externo:true },
      { label:"Instagram", href:"https://www.instagram.com/numsystems/",                externo:true },
    ]},
  ];

  const linkStyle = { fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12.5, letterSpacing:".05em", color:"rgba(201,169,110,.45)", textDecoration:"none", transition:"color .25s", cursor:"pointer" };
  const onEnter = e => e.currentTarget.style.color = P.tiza;
  const onLeave = e => e.currentTarget.style.color = "rgba(201,169,110,.45)";

  return (
    <footer style={{ background:"#111010", padding:"72px 64px 44px", borderTop:"1px solid rgba(255,255,255,.05)" }}>
      <div className="fcols" style={{ display:"flex", gap:80, marginBottom:64 }}>
        <div style={{ flex:"0 0 260px" }}>
          <div style={{ marginBottom:24 }}><LogoOscuro height={44} /></div>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12, lineHeight:1.7, color:"rgba(160,152,144,.45)" }}>Arquitectura · Ingeniería<br />Sistemas Constructivos · Consultoría</p>
        </div>
        {columnas.map(col => (
          <div key={col.h} style={{ flex:1 }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".3em", textTransform:"uppercase", color:"rgba(160,152,144,.35)", marginBottom:22 }}>{col.h}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
              {col.links.map(l => (
                l.href ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>{l.label}</a>
                ) : (
                  <a key={l.label} href={"#"+l.scroll} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={e => { e.preventDefault(); scrollTo(l.scroll); }}>{l.label}</a>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:28, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
        <span style={{ fontSize:10, fontWeight:300, letterSpacing:".12em", color:"rgba(160,152,144,.28)" }}>© 2026 NUM Systems. Todos los derechos reservados.</span>
        <span style={{ fontSize:10, fontWeight:300, letterSpacing:".12em", color:"rgba(160,152,144,.18)" }}>Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
}
