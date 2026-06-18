import { NAVBAR_H } from "./theme";

/* ─── UTILS ──────────────────────────────────────── */
export function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAVBAR_H, behavior: "smooth" });
}
