import { useEffect } from "react";
import { P, NAVBAR_H } from "../theme";

/* ─── ESTILOS GLOBALES ───────────────────────────── */
export function EstilosGlobales() {
  useEffect(() => {
    const id = "ns-global";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@200;300;400;500&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      html{scroll-behavior:smooth;}
      body{font-family:'Montserrat',sans-serif;background:${P.tiza};color:${P.negro};-webkit-font-smoothing:antialiased;overflow-x:hidden;}
      ::-webkit-scrollbar{width:3px;}
      ::-webkit-scrollbar-thumb{background:${P.arena};}
      section[id]{scroll-margin-top:${NAVBAR_H}px;}
      .reveal{opacity:0;transform:translateY(28px);transition:opacity .85s cubic-bezier(.16,1,.3,1),transform .85s cubic-bezier(.16,1,.3,1);}
      .reveal.visible{opacity:1;transform:translateY(0);}
      .rv1{transition-delay:.06s;}.rv2{transition-delay:.14s;}.rv3{transition-delay:.22s;}
      .rv4{transition-delay:.30s;}.rv5{transition-delay:.38s;}.rv6{transition-delay:.46s;}
      .nav-link{font-size:11px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;color:${P.negro};position:relative;padding-bottom:3px;transition:color .25s;}
      .nav-link::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:${P.dorado};transition:width .35s;}
      .nav-link:hover{color:${P.dorado};}.nav-link:hover::after{width:100%;}
      .btn-oscuro{display:inline-block;border:1px solid ${P.negro};color:${P.negro};background:transparent;font-family:'Montserrat',sans-serif;font-weight:400;font-size:10px;letter-spacing:.22em;text-transform:uppercase;padding:14px 38px;text-decoration:none;cursor:pointer;transition:background .3s,color .3s;}
      .btn-oscuro:hover{background:${P.negro};color:${P.tiza};}
      .btn-claro{display:inline-block;border:1px solid rgba(242,238,232,.5);color:${P.tiza};background:transparent;font-family:'Montserrat',sans-serif;font-weight:400;font-size:10px;letter-spacing:.22em;text-transform:uppercase;padding:14px 38px;text-decoration:none;cursor:pointer;transition:background .3s,border-color .3s;}
      .btn-claro:hover{background:rgba(242,238,232,.1);border-color:${P.tiza};}
      .btn-dorado{display:inline-block;border:1px solid ${P.dorado};color:${P.dorado};background:transparent;font-family:'Montserrat',sans-serif;font-weight:400;font-size:10px;letter-spacing:.22em;text-transform:uppercase;padding:14px 38px;text-decoration:none;cursor:pointer;transition:background .3s,color .3s;}
      .btn-dorado:hover{background:${P.dorado};color:${P.tiza};}
      .proy-card{position:relative;overflow:hidden;cursor:pointer;aspect-ratio:4/3;}
      .proy-card img{display:block;width:100%;height:100%;object-fit:cover;filter:saturate(.78) brightness(.9);transition:transform .8s cubic-bezier(.25,.46,.45,.94),filter .5s;}
      .proy-card:hover img{transform:scale(1.05);filter:saturate(.9) brightness(.85);}
      .proy-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(37,35,34,.9) 0%,rgba(37,35,34,.35) 52%,transparent 78%);opacity:.55;transition:opacity .4s;}
      .proy-card:hover .proy-overlay{opacity:1;}
      .proy-info{position:absolute;bottom:0;left:0;right:0;padding:26px 28px 30px;transform:translateY(52px);transition:transform .5s cubic-bezier(.16,1,.3,1);}
      .proy-card:hover .proy-info{transform:translateY(0);}
      .serv-card{background:white;border:1px solid ${P.linea};padding:48px 40px 44px;transition:box-shadow .3s,border-color .3s;}
      .serv-card:hover{box-shadow:0 12px 40px rgba(37,35,34,.08);border-color:${P.arena};}
      .mat-card{overflow:hidden;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);transition:transform .35s,box-shadow .35s;}
      .mat-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(37,35,34,.18);}
      .mat-card img{width:100%;height:200px;object-fit:cover;filter:saturate(.55) brightness(.95);transition:transform .6s;}
      .mat-card:hover img{transform:scale(1.04);}
      .ns-input{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(200,192,184,.4);padding:14px 0;font-family:'Montserrat',sans-serif;font-weight:300;font-size:13px;color:${P.tiza};outline:none;letter-spacing:.03em;transition:border-color .3s;}
      .ns-input::placeholder{color:rgba(200,192,184,.35);}
      .ns-input:focus{border-bottom-color:${P.dorado};}
      .ns-textarea{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(200,192,184,.4);padding:14px 0;font-family:'Montserrat',sans-serif;font-weight:300;font-size:13px;color:${P.tiza};outline:none;resize:none;min-height:110px;letter-spacing:.03em;transition:border-color .3s;}
      .ns-textarea::placeholder{color:rgba(200,192,184,.35);}
      .ns-textarea:focus{border-bottom-color:${P.dorado};}
      @keyframes heroUp{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
      @media(max-width:900px){.g3{grid-template-columns:1fr 1fr!important;}.geq{grid-template-columns:1fr 1fr!important;}}
      @media(max-width:640px){.g3{grid-template-columns:1fr!important;}.gp{grid-template-columns:1fr!important;}.geq{grid-template-columns:1fr 1fr!important;}.nav-desk{display:none!important;}.split{flex-direction:column!important;}.csplit{flex-direction:column!important;gap:48px!important;}.fcols{flex-direction:column!important;gap:40px!important;}}
    `;
    document.head.appendChild(el);
  }, []);
  return null;
}
