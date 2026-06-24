import { useEffect, useRef, useState } from "react";
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

  // ─── Galería automática ───────────────────────────
  // Busca /{id}-1.jpg … /{id}-9.jpg en la carpeta public y muestra
  // solo las que existan, ordenadas. Si no hay ninguna numerada,
  // usa la foto de portada como respaldo. No requiere editar código:
  // alcanza con subir las fotos bien nombradas.
  const MAX_FOTOS = 9;
  const [galeria, setGaleria] = useState([]);
  useEffect(() => {
    let cancelado = false;
    setGaleria([]);
    const encontradas = [];
    let pendientes = MAX_FOTOS;
    const finalizar = () => {
      if (cancelado) return;
      encontradas.sort((a, b) => a.n - b.n);
      setGaleria(encontradas.map(e => e.src));
    };
    for (let n = 1; n <= MAX_FOTOS; n++) {
      const src = `/${proyecto.id}-${n}.jpg`;
      const im = new Image();
      im.onload = () => { encontradas.push({ n, src }); if (--pendientes === 0) finalizar(); };
      im.onerror = () => { if (--pendientes === 0) finalizar(); };
      im.src = src;
    }
    return () => { cancelado = true; };
  }, [proyecto.id]);

  // Mientras no haya fotos numeradas, mostramos la portada como respaldo.
  const fotos = galeria.length > 0 ? galeria : [proyecto.img];

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

        {/* Sección galería de imágenes (automática) */}
        <div style={{ marginBottom:80 }}>
          <Etiqueta>Galería</Etiqueta>
          <div className="g3" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:3 }}>
            {fotos.map((src, idx) => (
              <div key={src + idx} style={{ overflow:"hidden", aspectRatio:"4/3", background:P.fondoSec }}>
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

        {/* Sección descripción */}
        <div style={{ maxWidth:720 }}>
          <Etiqueta>Descripción</Etiqueta>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontStyle:"italic", fontSize:"clamp(22px,3vw,32px)", lineHeight:1.35, color:P.negro, marginBottom:32 }}>{proyecto.resumen}</p>
          {(proyecto.ampliado || []).map((parrafo, i) => (
            <p key={i} style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.9, letterSpacing:".02em", color:P.cuerpo, marginBottom:22 }}>
              {parrafo}
            </p>
          ))}

          {/* Participación profesional */}
          {proyecto.participacion && proyecto.participacion.length > 0 && (
            <div style={{ marginTop:46 }}>
              <Etiqueta>Participación profesional</Etiqueta>
              <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                {proyecto.participacion.map((item, i) => (
                  <li key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"9px 0", borderBottom:`1px solid ${P.linea}`, fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13.5, lineHeight:1.6, letterSpacing:".02em", color:P.cuerpo }}>
                    <span style={{ width:5, height:5, marginTop:8, background:P.terracota, flexShrink:0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
