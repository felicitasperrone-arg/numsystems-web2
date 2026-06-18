import { useState } from "react";
import { P, NAVBAR_H } from "../theme";
import { LogoClaro } from "./Logo";
import { scrollTo } from "../utils";

/* ─── NAVBAR ─────────────────────────────────────── */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Nosotros","nosotros"],["Servicios","servicios"],["Experiencia","proyectos"],["Materiales","materiales"],["Contacto","contacto"]];
  const go = (e, id) => { e.preventDefault(); setOpen(false); scrollTo(id); };
  return (
    <>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, height:NAVBAR_H, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 64px", background:P.tiza, borderBottom:`1px solid ${P.linea}`, boxShadow:"0 1px 0 rgba(37,35,34,.06),0 4px 16px rgba(37,35,34,.04)" }}>
        <div style={{ cursor:"pointer" }} onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>
          <LogoClaro height={38} />
        </div>
        <div className="nav-desk" style={{ display:"flex", gap:40 }}>
          {links.map(([l,id]) => <a key={id} href={"#"+id} className="nav-link" onClick={e => go(e,id)}>{l}</a>)}
        </div>
        <div className="nav-desk">
          <a href="#contacto" className="btn-oscuro" style={{ fontSize:9, padding:"10px 22px" }} onClick={e => go(e,"contacto")}>Iniciar proyecto</a>
        </div>
        <button onClick={() => setOpen(!open)} style={{ display:"none", background:"none", border:"none", cursor:"pointer", flexDirection:"column", gap:5, padding:8 }} className="nav-mob">
          <div style={{ width:22, height:1, background:P.negro, transition:"transform .3s", transform: open ? "translateY(6px) rotate(45deg)" : "none" }} />
          <div style={{ width:22, height:1, background:P.negro, opacity: open ? 0 : 1, transition:"opacity .3s" }} />
          <div style={{ width:22, height:1, background:P.negro, transition:"transform .3s", transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>
      {open && (
        <div style={{ position:"fixed", top:NAVBAR_H, left:0, right:0, zIndex:199, background:P.tiza, borderBottom:`1px solid ${P.linea}`, padding:"24px 40px 32px", boxShadow:"0 8px 32px rgba(37,35,34,.10)" }}>
          {links.map(([l,id]) => (
            <a key={id} href={"#"+id} onClick={e => go(e,id)} style={{ display:"block", fontFamily:"'Montserrat',sans-serif", fontWeight:400, fontSize:13, letterSpacing:".14em", textTransform:"uppercase", color:P.negro, textDecoration:"none", padding:"16px 0", borderBottom:`1px solid ${P.linea}` }}>{l}</a>
          ))}
        </div>
      )}
      <style>{`@media(max-width:640px){.nav-mob{display:flex!important;}}`}</style>
    </>
  );
}
