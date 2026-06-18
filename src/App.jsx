import { useState } from "react";
import { useReveal } from "./hooks/useReveal";
import { EstilosGlobales } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Nosotros } from "./components/Nosotros";
import { Servicios } from "./components/Servicios";
import { Proyectos } from "./components/Proyectos";
import { Materiales } from "./components/Materiales";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { ProyectoDetalle } from "./components/ProyectoDetalle";

/* ─── APP ────────────────────────────────────────── */
export default function App() {
  useReveal();
  const [proyectoActivo, setProyectoActivo] = useState(null);
  return (
    <>
      <EstilosGlobales />
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Proyectos onOpen={setProyectoActivo} />
      <Materiales />
      <Contacto />
      <Footer />
      {proyectoActivo && (
        <ProyectoDetalle proyecto={proyectoActivo} onClose={() => setProyectoActivo(null)} />
      )}
    </>
  );
}
