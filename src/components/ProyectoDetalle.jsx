import { useEffect, useRef } from "react";
import { P } from "../theme";
import { Etiqueta, Divisor } from "./ui";
import { CATS } from "../data/proyectos";

/* ─── DETALLE DE PROYECTO (OVERLAY SPA) ──────────── */
export function ProyectoDetalle({ proyecto, onClose }) {
  // Scroll de la capa al tope al abrir, y cierre con tecla Escape.
  // No se toca el scroll del body: el home queda intacto detrás.
  const capaRef = useRef(null);
  useEffect(() => {
    if (capaRef.current) capaRef.current.scrollTop = 0;
    const onKey = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [proyecto, onClose]);

  const cat = CATS[proyecto.cat] || { label: proyecto.cat, color: P.dorado };
  // Galería placeholder por ahora.
  const galeria = [proyecto.img, proyecto.img, proyecto.img, proyecto.img];

  return (
    <div
      ref={capaRef}
      role="dialog"
      aria-modal="true"
      style={{
        position:"fixed", inset:0, zIndex:300, background:P.tiza,
        overflowY:"auto", overscrollBehavior:"contain",
        animation:"heroUp .5s ease forwards",
      }}
    >
      {/* Botón Volver, arriba a la izquierda, fijo dentro de la capa */}
      <div style={{ position:"sticky", top:0, zIndex:2, background:P.tiza, borderBottom:`1px solid ${P.linea}`, padding:"22px 64px" }}>
        <button
          onClick={onClose}
          className="btn-oscuro"
          style={{ fontSize:9, padding:"10px 22px", background:"transparent" }}
        >
          ← Volver
        </button>
      </div>

      <div style={{ padding:"72px 64px 110px", maxWidth:1100, margin:"0 auto" }}>
        {/* Encabezado: categoría/tipo, título, ubicación */}
        <div style={{ marginBottom:56 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
            <div style={{ width:8, height:8, background:cat.color, flexShrink:0 }} />
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".30em", textTransform:"uppercase", color:P.suave }}>{cat.label}</span>
          </div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(40px,5.5vw,76px)", lineHeight:1.02, letterSpacing:"-.01em", color:P.negro, marginBottom:24 }}>{proyecto.titulo}</h1>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"14px 48px" }}>
            <div>
              <span style={{ display:"block", fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".26em", textTransform:"uppercase", color:P.terracota, marginBottom:7 }}>Ubicación</span>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, letterSpacing:".03em", color:P.cuerpo }}>{proyecto.lugar}</span>
            </div>
            <div>
              <span style={{ display:"block", fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".26em", textTransform:"uppercase", color:P.terracota, marginBottom:7 }}>Tipo de proyecto</span>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, letterSpacing:".03em", color:P.cuerpo }}>{proyecto.tipo}</span>
            </div>
          </div>
        </div>

        <Divisor margen="0 0 56px" />

        {/* Sección galería de imágenes (placeholder) */}
        <div style={{ marginBottom:80 }}>
          <Etiqueta>Galería</Etiqueta>
          <div className="g3" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:3 }}>
            {galeria.map((src, idx) => (
              <div key={idx} style={{ overflow:"hidden", aspectRatio:"4/3", background:P.fondoSec }}>
                <img
                  src={src}
                  alt={`${proyecto.titulo} — imagen ${idx+1}`}
                  loading="lazy"
                  onError={e => { if (proyecto.imgFallback && e.currentTarget.src !== proyecto.imgFallback) e.currentTarget.src = proyecto.imgFallback; }}
                  style={{ width:"100%", height:"100%", objectFit:"cover", filter:"saturate(.78) brightness(.92)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sección descripción (placeholder) */}
        <div style={{ maxWidth:720 }}>
          <Etiqueta>Descripción</Etiqueta>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(22px,3vw,32px)", lineHeight:1.35, color:P.negro, marginBottom:32 }}>{proyecto.resumen}</p>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.9, letterSpacing:".02em", color:P.cuerpo, marginBottom:22 }}>
            Contenido de descripción de ejemplo. Esta sección presentará el desarrollo completo del proyecto: alcance del trabajo, decisiones técnicas, materiales empleados y etapas de ejecución. Por ahora se utiliza texto de marcador de posición.
          </p>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.9, letterSpacing:".02em", color:P.cuerpo }}>
            Texto placeholder adicional para ilustrar la extensión típica de esta sección. El contenido real se completará en una etapa posterior, una vez definida la navegación interna del proyecto.
          </p>
        </div>
      </div>
    </div>
  );
}
