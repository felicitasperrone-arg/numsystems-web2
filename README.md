# NUM Systems

Sitio one-page (React + Vite) del estudio NUM Systems.

## Requisitos
- Node.js 18+

## Uso
```bash
npm install
npm run dev      # entorno de desarrollo
npm run build    # build de producción -> dist/
npm run preview  # previsualizar el build
```

## Estructura
```
num-systems/
├── index.html
├── package.json
├── vite.config.js
├── public/                 # estáticos servidos tal cual (ej: bloquera-ab.jpg)
└── src/
    ├── main.jsx            # punto de entrada
    ├── App.jsx             # composición + estado de navegación SPA (overlay de detalle)
    ├── theme.js            # paleta P + NAVBAR_H
    ├── utils.js            # scrollTo
    ├── assets/             # imágenes/recursos importados desde JS
    ├── hooks/
    │   └── useReveal.js    # animaciones al hacer scroll (IntersectionObserver)
    ├── styles/
    │   └── GlobalStyles.jsx # fuentes, reset y clases globales inyectadas
    ├── data/
    │   └── proyectos.js    # CATS + PROYECTOS
    └── components/
        ├── Logo.jsx        # LogoClaro / LogoOscuro
        ├── ui.jsx          # Etiqueta / Divisor
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Nosotros.jsx
        ├── Servicios.jsx
        ├── Proyectos.jsx       # grilla 3x3; cada card abre el detalle
        ├── Materiales.jsx
        ├── Contacto.jsx
        ├── Footer.jsx
        └── ProyectoDetalle.jsx # overlay SPA con "← Volver"
```

## Navegación interna (Experiencia)
Al hacer click en una card de la sección Experiencia se monta `ProyectoDetalle`
como capa `position: fixed` por encima del home. El home no se desmonta ni se
mueve, por lo que "← Volver" (o la tecla Escape) devuelve al usuario a la misma
posición de scroll. No hay recargas ni nuevas pestañas.
