import { P } from "../theme";
import { Etiqueta, Divisor } from "./ui";

/* ─── NOSOTROS ───────────────────────────────────── */
export function Nosotros() {
  const pilares = [
    { num:"01", titulo:"Misión", texto:"Desarrollar soluciones integrales de arquitectura e ingeniería que respondan con precisión a las dimensiones técnicas, estéticas y humanas de cada proyecto." },
    { num:"02", titulo:"Visión", texto:"Convertirnos en una consultora de referencia en América Latina para el diseño, gestión y construcción de proyectos de alto valor técnico y cultural." },
    { num:"03", titulo:"Filosofía", texto:"Creemos que el rigor y la belleza no se contradicen. Cada decisión — material, espacial, estructural — se toma con la misma atención a la precisión y al propósito." },
  ];
  const equipo = [
    { nombre:"Martín Álvarez", rol:"Director · Arquitecto", esp:"Diseño arquitectónico y dirección de proyectos de gran escala.", foto:"https://picsum.photos/seed/ns-team-m1/400/533" },
    { nombre:"Lucía Ferreyra", rol:"Socia · Ingeniería Estructural", esp:"Estructuras en hormigón, acero y sistemas constructivos innovadores.", foto:"https://picsum.photos/seed/ns-team-f1/400/533" },
    { nombre:"Santiago Möller", rol:"Director Técnico · Consultoría", esp:"Gestión de proyectos, documentación ejecutiva y due diligence.", foto:"https://picsum.photos/seed/ns-team-m2/400/533" },
    { nombre:"Valentina Cruz", rol:"Coordinadora · Sistemas y Materiales", esp:"Integración de sistemas constructivos internacionales y sustentabilidad.", foto:"https://picsum.photos/seed/ns-team-f2/400/533" },
  ];
  return (
    <section id="nosotros" style={{ background:P.tiza, padding:"130px 64px 110px" }}>
      <div className="reveal" style={{ marginBottom:88 }}>
        <Etiqueta>Quiénes somos</Etiqueta>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:32 }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(40px,5vw,68px)", lineHeight:1.05, color:P.negro, maxWidth:520 }}>Una práctica fundada<br />en disciplina y profundidad</h2>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.85, letterSpacing:".02em", color:P.cuerpo, maxWidth:400, paddingBottom:8 }}>NUM Systems nació para tender un puente entre el diseño visionario y la excelencia técnica. Operamos en la intersección de la arquitectura, la ingeniería y la innovación constructiva — siempre con precisión, siempre con propósito.</p>
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
        <div className="geq" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0 2px" }}>
          {equipo.map((p,i) => (
            <div key={p.nombre} className={`reveal rv${i+1}`} style={{ background:P.fondoSec, overflow:"hidden" }}>
              <div style={{ overflow:"hidden", aspectRatio:"3/4", position:"relative" }}>
                <img src={p.foto} alt={p.nombre} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", filter:"saturate(.55) brightness(.96)", transition:"transform .75s cubic-bezier(.25,.46,.45,.94),filter .5s" }} onMouseEnter={e => { e.currentTarget.style.transform="scale(1.04)"; e.currentTarget.style.filter="saturate(.82) brightness(1.02)"; }} onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.filter="saturate(.55) brightness(.96)"; }} />
                <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:`linear-gradient(to right,${P.dorado},transparent 70%)`, opacity:.55 }} />
              </div>
              <div style={{ padding:"26px 26px 34px" }}>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".26em", textTransform:"uppercase", color:P.terracota, display:"block", marginBottom:10 }}>{p.rol}</span>
                <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:500, fontSize:20, letterSpacing:".02em", color:P.negro, marginBottom:14 }}>{p.nombre}</h4>
                <div style={{ width:22, height:1, background:P.dorado, marginBottom:14, opacity:.65 }} />
                <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:12, lineHeight:1.75, color:P.suave }}>{p.esp}</p>
              </div>
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
