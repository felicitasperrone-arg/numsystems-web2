import { P } from "../theme";
import { Etiqueta } from "./ui";

/* ─── SERVICIOS ──────────────────────────────────── */
export function Servicios() {
  const servicios = [
    {
      num:"01", cat:"Consultoría", titulo:"Consultoría Técnica y Ejecutiva",
      desc:"Asesoría estratégica para proyectos de arquitectura e ingeniería de alta complejidad. Acompañamos a nuestros clientes en la toma de decisiones técnicas, documentación ejecutiva y gestión integral desde el concepto hasta la entrega.",
      items:["Viabilidad de Proyecto","Due Diligence Técnico","Documentación Ejecutiva","Cumplimiento Normativo"],
      icono: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="17" r="13" stroke={P.terracota} strokeWidth=".9" />
          <line x1="17" y1="4" x2="17" y2="30" stroke={P.terracota} strokeWidth=".9" />
          <line x1="4" y1="17" x2="30" y2="17" stroke={P.terracota} strokeWidth=".9" />
          <circle cx="17" cy="17" r="2.5" stroke={P.terracota} strokeWidth=".9" fill="none" />
        </svg>
      ),
    },
    {
      num:"02", cat:"Arquitectura + Ingeniería", titulo:"Diseño Arquitectónico y Estructural",
      desc:"Servicios completos de diseño desde el anteproyecto hasta la documentación constructiva. Integramos la intención arquitectónica y la lógica estructural en experiencias espaciales coherentes, construibles y significativas.",
      items:["Diseño Arquitectónico","Ingeniería Estructural","Diseño Interior","Documentos Constructivos"],
      icono: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect x="3" y="3" width="12" height="12" stroke={P.terracota} strokeWidth=".9" fill="none" />
          <rect x="19" y="3" width="12" height="12" stroke={P.terracota} strokeWidth=".4" fill="none" opacity=".5" />
          <rect x="3" y="19" width="12" height="12" stroke={P.terracota} strokeWidth=".4" fill="none" opacity=".5" />
          <rect x="19" y="19" width="12" height="12" stroke={P.terracota} strokeWidth=".9" fill="none" />
        </svg>
      ),
    },
    {
      num:"03", cat:"Sistemas Constructivos", titulo:"Sistemas e Materiales Innovadores",
      desc:"Representación e implementación técnica de sistemas constructivos internacionales de vanguardia. Integramos materiales industrializados, sustentables y de alto desempeño en desarrollos de gran escala.",
      items:["Construcción Industrializada","Sistemas Importados","Integración de Materiales","Soporte Técnico"],
      icono: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <polygon points="17,3 31,28 3,28" stroke={P.terracota} strokeWidth=".9" fill="none" />
          <line x1="17" y1="12" x2="17" y2="22" stroke={P.terracota} strokeWidth=".9" />
          <circle cx="17" cy="25" r="1.2" fill={P.terracota} />
        </svg>
      ),
    },
  ];
  return (
    <section id="servicios" style={{ background:P.fondoSec, padding:"130px 64px 110px" }}>
      <div className="reveal" style={{ marginBottom:72 }}>
        <Etiqueta>Nuestros Servicios</Etiqueta>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:28 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(40px,5vw,64px)", lineHeight:1.05, color:P.negro }}>Tres disciplinas,<br /><span style={{ fontStyle:"italic", color:P.dorado }}>una sola mirada</span></h2>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.9, color:P.suave, maxWidth:380 }}>Cada proyecto que tomamos combina expertise técnico, criterio estético y acompañamiento humano. No somos un proveedor; somos un socio a largo plazo.</p>
        </div>
      </div>
      <div className="g3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1 }}>
        {servicios.map((s,i) => (
          <div key={s.num} className={`reveal rv${i+1} serv-card`}>
            <div style={{ marginBottom:32 }}>{s.icono}</div>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".28em", color:P.suave, textTransform:"uppercase", display:"block", marginBottom:10 }}>{s.num} — {s.cat}</span>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:24, lineHeight:1.25, color:P.negro, marginBottom:20 }}>{s.titulo}</h3>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13, lineHeight:1.85, color:P.cuerpo, marginBottom:32 }}>{s.desc}</p>
            <div style={{ borderTop:`1px solid ${P.linea}`, paddingTop:24, display:"flex", flexDirection:"column", gap:11 }}>
              {s.items.map(it => (
                <div key={it} style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ width:5, height:5, background:P.dorado, flexShrink:0 }} />
                  <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:400, fontSize:11.5, letterSpacing:".06em", color:P.cuerpo }}>{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
