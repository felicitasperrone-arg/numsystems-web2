import { useState } from "react";
import { P } from "../theme";
import { Etiqueta } from "./ui";

/* ─── CONTACTO ───────────────────────────────────── */
export function Contacto() {
  const [form, setForm] = useState({ nombre:"", email:"", mensaje:"" });
  const [enviado, setEnviado] = useState(false);
  const submit = e => { e.preventDefault(); if (form.nombre && form.email && form.mensaje) setEnviado(true); };
  return (
    <section id="contacto" style={{ background:"#1E1C1A", padding:"130px 64px 110px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"50%", right:20, transform:"translateY(-50%)", fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"clamp(160px,28vw,440px)", fontWeight:300, color:"rgba(201,169,110,.03)", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>N</div>
      <div className="reveal" style={{ marginBottom:80 }}>
        <Etiqueta claro>Trabajemos juntos</Etiqueta>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:"clamp(40px,5vw,64px)", lineHeight:1.05, color:P.tiza }}>Contanos sobre tu proyecto</h2>
      </div>
      <div className="csplit" style={{ display:"flex", gap:100, alignItems:"flex-start", position:"relative" }}>
        <div className="reveal" style={{ flex:"0 0 300px" }}>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, lineHeight:1.85, color:"rgba(201,169,110,.55)", marginBottom:56 }}>Trabajamos con clientes que valoran la precisión, la calidad y una relación de confianza a largo plazo.</p>
          {[["Email","hola@numsystems.com"],["Teléfono","+54 11 5555-7890"],["Estudio","Puerto Madero, Buenos Aires"],["Horario","Lun–Vie  9:00 — 18:00"]].map(([lab,val]) => (
            <div key={lab} style={{ display:"flex", gap:24, marginBottom:26, alignItems:"baseline" }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".26em", color:P.terracota, textTransform:"uppercase", minWidth:56 }}>{lab}</span>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:13, letterSpacing:".04em", color:"rgba(201,169,110,.65)" }}>{val}</span>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ flex:1, maxWidth:580 }}>
          {enviado ? (
            <div style={{ paddingTop:24 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:400, fontSize:36, color:P.tiza, marginBottom:14 }}>Gracias por escribirnos.</h3>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:14, color:"rgba(201,169,110,.55)", letterSpacing:".04em" }}>Nos pondremos en contacto a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:40 }}>
              <div><label style={{ display:"block", fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".3em", color:"rgba(201,169,110,.4)", textTransform:"uppercase", marginBottom:10 }}>Nombre completo</label><input className="ns-input" type="text" placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({...form, nombre:e.target.value})} required /></div>
              <div><label style={{ display:"block", fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".3em", color:"rgba(201,169,110,.4)", textTransform:"uppercase", marginBottom:10 }}>Correo electrónico</label><input className="ns-input" type="email" placeholder="tu@email.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})} required /></div>
              <div><label style={{ display:"block", fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:400, letterSpacing:".3em", color:"rgba(201,169,110,.4)", textTransform:"uppercase", marginBottom:10 }}>Tu proyecto</label><textarea className="ns-textarea" placeholder="Contanos sobre tu proyecto — tipo, escala, ubicación y etapa actual." value={form.mensaje} onChange={e => setForm({...form, mensaje:e.target.value})} required /></div>
              <div><button type="submit" className="btn-dorado">Enviar mensaje</button></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
