# Tips y Trucos de Personalización

## 🎨 Temas de Color Predefinidos

### Tema Azul (Actual)
```css
--primary: #0066cc;
--primary-dark: #0052a3;
--primary-light: #3385ff;
--accent: #00d4ff;
```

### Tema Verde
```css
--primary: #10b981;
--primary-dark: #059669;
--primary-light: #34d399;
--accent: #6ee7b7;
```

### Tema Naranja
```css
--primary: #f97316;
--primary-dark: #ea580c;
--primary-light: #fb923c;
--accent: #fed7aa;
```

### Tema Púrpura
```css
--primary: #a855f7;
--primary-dark: #9333ea;
--primary-light: #d8b4fe;
--accent: #e9d5ff;
```

### Tema Rojo
```css
--primary: #dc2626;
--primary-dark: #b91c1c;
--primary-light: #f87171;
--accent: #fecaca;
```

## 🔤 Cambiar Tipografía

En `styles.css`, busca la regla `body` y cambia:

```css
/* Opción 1: Sans-serif moderno */
font-family: 'Inter', 'Segoe UI', sans-serif;

/* Opción 2: Serif elegante */
font-family: 'Georgia', 'Times New Roman', serif;

/* Opción 3: Monospace (para programadores) */
font-family: 'Fira Code', 'Courier New', monospace;
```

Para agregar fuentes de Google Fonts, añade antes de `</head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Y usa: `font-family: 'Poppins', sans-serif;`

## 📐 Ajustar Espaciados

```css
/* En :root, modifica estos valores */
--transition: all 0.3s ease;    /* Velocidad de transiciones */

/* En .hero, para cambiar altura */
min-height: 600px;              /* Más grande = 700-800px */

/* En secciones, para espaciado vertical */
padding: 100px 0;               /* Aumenta para más espacios */
```

## 🖼️ Cambiar Foto de Perfil

1. Guarda tu foto en la carpeta `mi-portafolio`
2. En `index.html`, reemplaza:
   ```html
   <img src="f9389307-dc2a-4859-b49e-587e195c977e.jpg" ...>
   ```
   por
   ```html
   <img src="tu-nueva-foto.jpg" ...>
   ```

3. También en el favicon:
   ```html
   <link rel="icon" type="image/jpeg" href="tu-nueva-foto.jpg">
   ```

## 🔗 Agregar Redes Sociales Adicionales

En la sección "Inicio", después de Twitter, agrega:

```html
<a href="https://instagram.com/tuusuario" target="_blank" title="Instagram">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://youtube.com/@tucanal" target="_blank" title="YouTube">
    <i class="fab fa-youtube"></i>
</a>
<a href="https://behance.net/tuusuario" target="_blank" title="Behance">
    <i class="fab fa-behance"></i>
</a>
```

## 📝 Agregar Más Secciones

### 1. Sección "Blog"

Agrega a la navegación:
```html
<li><a href="#blog" class="nav-link">Blog</a></li>
```

Añade la sección en HTML:
```html
<section id="blog" class="blog">
    <div class="container">
        <h2>Últimos Artículos</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <h3>Título del artículo</h3>
                <p>Descripción breve...</p>
                <a href="#">Leer más →</a>
            </article>
        </div>
    </div>
</section>
```

### 2. Sección "Testimonios"

```html
<section id="testimonios" class="testimonios">
    <div class="container">
        <h2>Qué Dicen de Mí</h2>
        <div class="testimonios-grid">
            <div class="testimonial">
                <p>"Excelente trabajo..."</p>
                <strong>Nombre Cliente</strong>
            </div>
        </div>
    </div>
</section>
```

## 🎯 Mejorar SEO

Actualiza en `index.html`:

```html
<meta name="description" content="Descripción corta de tu portafolio">
<meta property="og:title" content="Tu Nombre | Tu Título">
<meta property="og:image" content="https://tuusuario.github.io/tu-foto.jpg">
<link rel="canonical" href="https://tuusuario.github.io">
```

## 📱 Probar Responsividad

Abre Chrome DevTools (F12):
1. Presiona `Ctrl + Shift + M`
2. Prueba en: Móvil, Tablet, Desktop

## 🚀 Agregar Analytics

Antes de `</head>`, agrega Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
</script>
```

Obtén tu ID en: https://analytics.google.com

## 💾 Copia de Seguridad

Siempre haz backup:

```bash
# Crear carpeta de backup
Copy-Item -Path "c:\mi-portafolio" -Destination "c:\mi-portafolio-backup" -Recurse

# Comprimir para enviar
Compress-Archive -Path "c:\mi-portafolio" -DestinationPath "portafolio-backup.zip"
```

## ⚡ Optimizaciones de Rendimiento

- Comprime imágenes: https://tinypng.com
- Minifica CSS/JS: https://minifier.org
- Verifica velocidad: https://pagespeed.web.dev

---

¿Necesitas más ayuda? ¡Experimenta y diviértete personalizado tu portafolio! 🎨
