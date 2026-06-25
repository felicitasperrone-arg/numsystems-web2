import { P } from "../theme";
import { Etiqueta, Divisor } from "./ui";

/* ─── NOSOTROS ───────────────────────────────────── */
export function Nosotros() {
  const pilares = [
    { num:"01", titulo:"Misión", texto:"Desarrollar soluciones integrales de arquitectura e ingeniería que respondan con precisión a las dimensiones técnicas, estéticas y humanas de cada proyecto." },
    { num:"02", titulo:"Visión", texto:"Ser una consultora de referencia en América Latina para el diseño, la ingeniería del detalle y la implementación de sistemas constructivos innovadores." },
    { num:"03", titulo:"Filosofía", texto:"Creemos en la integración de la idea de un proyecto y su ejecución desde un inicio, para lograr resultados consistentes en cada etapa del proceso." },
  ];
  const equipo = [
    { nombre:"Felicitas Perrone",  rol:"CEO · Arquitecta",              esp:"Dirección general del estudio y diseño arquitectónico de los proyectos." },
    { nombre:"Guido Perrone",      rol:"Ingeniería Mecánica",           esp:"Ingeniería mecánica aplicada al desarrollo técnico de los proyectos." },
    { nombre:"Gregorio Perrone",   rol:"Ingeniería Industrial",         esp:"Asesoramiento, ventas y posventa." },
    { nombre:"Ramiro Wolf",        rol:"Comercio Internacional",        esp:"Ventas y logística de sistemas y materiales internacionales." },
    { nombre:"Carola Piuzzi",      rol:"Área Técnica · Computación",    esp:"Área técnica y desarrollo de sistemas computacionales." },
    { nombre:"Javier Inzaugarat",  rol:"Área Técnica · Computación",    esp:"Área técnica y desarrollo de sistemas computacionales." },
    { nombre:"Milagros Conde",     rol:"Comercial · Contabilidad",      esp:"Gestión comercial y administración contable." },
    { nombre:"Tomás Perrone",      rol:"Marketing y Comunicación",      esp:"Marketing, comunicación e identidad de la marca." },
  ];
  return (
    <section id="nosotros" style={{ background:P.tiza, padding:"130px 64px 110px" }}>
      <div className="reveal" style={{ marginBottom:88 }}>
        <Etiqueta>Quiénes somos</Etiqueta>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:32 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(40px,5vw,68px)", lineHeight:1.05, color:P.negro, maxWidth:520 }}>Disciplinas integradas,<br />un mismo equipo</h2>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.85, letterSpacing:".02em", color:P.cuerpo, maxWidth:400, paddingBottom:8 }}>NUM Systems integra arquitectura, ingeniería y sistemas constructivos en un solo equipo. Acompañamos proyectos de alta complejidad desde el diseño hasta la entrega, incorporando materiales y tecnología internacional con soporte técnico completo.</p>
        </div>
      </div>
      <Divisor margen="0 0 88px" />
      <div className="g3" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0 56px", marginBottom:96 }}>
        {pilares.map((p,i) => (
          <div key={p.num} className={`reveal rv${i+1}`} style={{ borderTop:`2px solid ${i===0?P.terracota:P.linea}`, paddingTop:32 }}>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:400, letterSpacing:".24em", color:P.dorado, display:"block", marginBottom:20 }}>{p.num}</span>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:26, color:P.negro, marginBottom:16 }}>{p.titulo}</h3>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.85, color:P.cuerpo }}>{p.texto}</p>
          </div>
        ))}
      </div>
      <div style={{ borderTop:`1px solid ${P.linea}`, paddingTop:80 }}>
        <div className="reveal" style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:28, marginBottom:72 }}>
          <div>
            <Etiqueta>Equipo</Etiqueta>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(36px,4vw,56px)", lineHeight:1.05, color:P.negro }}>Las personas detrás<br /><span style={{ fontStyle:"italic", color:P.dorado }}>de cada proyecto</span></h2>
          </div>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.9, letterSpacing:".02em", color:P.suave, maxWidth:400 }}>Somos un equipo interdisciplinario que trabaja de manera integrada. Cada proyecto recibe atención directa de los profesionales a cargo — sin intermediarios, sin capas innecesarias.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:2 }}>
          {equipo.map((p,i) => (
            <div key={p.nombre} className={`reveal rv${(i%4)+1}`} style={{ background:P.fondoSec, padding:"30px 26px 34px", borderTop:`2px solid ${i===0?P.terracota:P.linea}` }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".26em", textTransform:"uppercase", color:P.terracota, display:"block", marginBottom:12 }}>{p.rol}</span>
              <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:21, letterSpacing:".02em", color:P.negro, marginBottom:14 }}>{p.nombre}</h4>
              <div style={{ width:22, height:1, background:P.dorado, marginBottom:14, opacity:.65 }} />
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12, lineHeight:1.75, color:P.suave }}>{p.esp}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop:48, paddingTop:32, borderTop:`1px solid ${P.linea}`, display:"flex", alignItems:"flex-start", gap:20 }}>
          <div style={{ width:3, flexShrink:0, alignSelf:"stretch", background:`linear-gradient(to bottom,${P.terracota},transparent)`, minHeight:40 }} />
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12.5, lineHeight:1.85, letterSpacing:".03em", color:P.suave, maxWidth:700 }}>Según la naturaleza de cada proyecto, el equipo se amplía con colaboradores especializados — estructuristas, paisajistas, expertos en eficiencia energética y especialistas en materiales — garantizando la mejor respuesta técnica en cada etapa.</p>
        </div>
      </div>
    </section>
  );
}
