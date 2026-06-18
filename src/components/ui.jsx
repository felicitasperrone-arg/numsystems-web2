import { P } from "../theme";

export function Etiqueta({ children, claro }) {
  return <p style={{ fontSize: 9, fontWeight: 400, letterSpacing: ".34em", textTransform: "uppercase", color: claro ? P.arena : P.dorado, marginBottom: 14 }}>{children}</p>;
}

export function Divisor({ margen }) {
  return <div style={{ height: 1, background: P.linea, margin: margen || "0" }} />;
}
