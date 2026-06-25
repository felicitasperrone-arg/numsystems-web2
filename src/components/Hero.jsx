import { P, NAVBAR_H } from "../theme";
import { scrollTo } from "../utils";

/* ─── HERO ───────────────────────────────────────── */
export function Hero() {
  // Foto de portada: usa /hero.jpg si está subida en public; si no,
  // muestra una imagen neutra de respaldo. Para cambiarla, subí tu
  // propia foto a public con el nombre hero.jpg
  const respaldo = "https://picsum.photos/seed/ns-hero-arch/1920/1080";
  return (
    <section style={{ position:"relative", marginTop:NAVBAR_H, height:`calc(100vh - ${NAVBAR_H}px)`, minHeight:560, overflow:"hidden", display:"flex", alignItems:"flex-end", paddingBottom:88 }}>
      <img
        src="/hero.jpg"
        alt="Arquitectura"
        onError={e => { if (e.currentTarget.src !== respaldo) e.currentTarget.src = respaldo; }}
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%", filter:"brightness(.45) saturate(.6)" }}
      />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(37,35,34,.92) 0%,rgba(37,35,34,.35) 45%,rgba(37,35,34,.05) 100%)" }} />
      <div style={{ position:"absolute", top:40, left:64, right:64, height:1, background:"rgba(242,238,232,.10)" }} />
      <div style={{ position:"relative", padding:"0 64px", maxWidth:960 }}>
        <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:400, fontSize:10, letterSpacing:".38em", textTransform:"uppercase", color:P.arena, marginBottom:28, opacity:0, animation:"heroUp 1s .2s ease forwards" }}>Arquitectura · Ingeniería · Sistemas Constructivos Internacionales</p>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(52px,8vw,112px)", lineHeight:.96, letterSpacing:"-.02em", color:P.tiza, marginBottom:12, opacity:0, animation:"heroUp 1.1s .4s ease forwards" }}>Un solo equipo,</h1>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(52px,8vw,112px)", lineHeight:.96, letterSpacing:"-.02em", color:P.arena, marginBottom:48, opacity:0, animation:"heroUp 1.1s .55s ease forwards" }}>todo el proceso</h1>
        <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.8, letterSpacing:".03em", color:"rgba(201,169,110,.75)", maxWidth:480, marginBottom:56, opacity:0, animation:"heroUp 1s .75s ease forwards" }}>Las áreas de arquitectura, ingeniería y sistemas constructivos trabajan integradas para dar una respuesta confiable a proyectos de alta complejidad, del diseño a la entrega, con materiales y tecnología internacional.</p>
        <a href="#contacto" className="btn-claro" style={{ opacity:0, animation:"heroUp 1s .95s ease forwards" }} onClick={e => { e.preventDefault(); scrollTo("contacto"); }}>Iniciar un proyecto</a>
      </div>
      <div style={{ position:"absolute", bottom:40, right:64, display:"flex", gap:32 }}>
        <span style={{ fontSize:10, letterSpacing:".2em", color:"rgba(201,169,110,.45)", fontWeight:300 }}>+10 AÑOS DE EXPERIENCIA</span>
        <span style={{ color:"rgba(201,169,110,.2)" }}>—</span>
        <span style={{ fontSize:10, letterSpacing:".2em", color:"rgba(201,169,110,.45)", fontWeight:300 }}>BUENOS AIRES</span>
      </div>
    </section>
  );
}
