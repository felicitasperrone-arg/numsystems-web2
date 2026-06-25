import { P } from "../theme";
import { Etiqueta } from "./ui";
import { scrollTo } from "../utils";

/* ─── MATERIALES ─────────────────────────────────── */
const MATS = [
  { nombre:"Domótica",     origen:"Provisión · Instalación",     desc:"Sistemas inteligentes para automatizar iluminación, climatización, seguridad y control de espacios.",            tag:"Instalaciones",  img:"https://picsum.photos/seed/ns-mat-clt/600/400" },
  { nombre:"Calefacción",          origen:"Provisión · Instalación",        desc:"Soluciones de calefacción eficientes para viviendas, oficinas e instalaciones industriales.",           tag:"Instalaciones", img:"https://picsum.photos/seed/ns-mat-fibro/600/400" },
  { nombre:"Estructuras industriales", origen:"Provisión · Montaje",      desc:"Diseño, fabricación y montaje de estructuras metálicas para proyectos industriales y logísticos.",        tag:"Estructuras",      img:"https://picsum.photos/seed/ns-mat-glass/600/400" },
  { nombre:"Prefabricados de hormigón",    origen:"Provisión · Colocación",         desc:"Elementos premoldeados para obras civiles, industriales y de infraestructura con rápida ejecución.",                                          tag:"Envolvente",    img:"https://picsum.photos/seed/ns-mat-earth/600/400" },
 
];

export function Materiales() {
  return (
    <section id="materiales" style={{ background:P.negro, padding:"130px 64px 110px" }}>
      <div className="reveal" style={{ marginBottom:80 }}>
        <Etiqueta claro>Sistemas Internacionales</Etiqueta>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:32 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(40px,5vw,64px)", lineHeight:1.05, color:P.tiza, maxWidth:560 }}>Materiales importados<br /><span style={{ fontStyle:"italic", color:P.arena }}>y Sistemas Constructivos</span></h2>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.85, color:"rgba(201,169,110,.6)", maxWidth:380 }}>Representamos e integramos sistemas constructivos de vanguardia para llevar la precisión tecnológica europea y asiática a proyectos de alta complejidad en Latinoamérica.</p>
        </div>
      </div>
      <div className="g3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
        {MATS.map((m,i) => (
          <div key={m.nombre} className={`reveal rv${(i%3)+1} mat-card`}>
            <img src={m.img} alt={m.nombre} loading="lazy" />
            <div style={{ padding:"26px 26px 34px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".26em", color:P.terracota, textTransform:"uppercase" }}>{m.tag}</span>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:300, letterSpacing:".14em", color:"rgba(201,169,110,.5)", textTransform:"uppercase" }}>{m.origen}</span>
              </div>
              <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:20, color:P.tiza, marginBottom:12 }}>{m.nombre}</h4>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12.5, lineHeight:1.8, color:"rgba(160,152,144,.65)" }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="reveal" style={{ marginTop:80, paddingTop:56, borderTop:"1px solid rgba(255,255,255,.07)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:32 }}>
        <div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:28, color:P.tiza, marginBottom:8 }}>¿Querés integrar sistemas internacionales en tu proyecto?</p>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12, color:"rgba(201,169,110,.5)", letterSpacing:".04em" }}>Nuestro equipo técnico te acompaña desde la selección hasta la implementación.</p>
        </div>
        <a href="#contacto" className="btn-claro" onClick={e => { e.preventDefault(); scrollTo("contacto"); }}>Solicitar información</a>
      </div>
    </section>
  );
}
