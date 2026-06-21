# Mi Portafolio - Sebastian Guzman Giron

Un portafolio web moderno, responsivo y personalizable creado con HTML5, CSS3 y JavaScript vanilla.

## 📋 Características

✅ Diseño moderno en Dark Mode con tema azul profesional  
✅ Completamente responsivo (mobile, tablet, desktop)  
✅ Navegación fija con efectos suaves  
✅ Secciones: Inicio, Sobre Mí, Proyectos, Contacto  
✅ Formulario de contacto con validación  
✅ Animaciones y transiciones suaves  
✅ Enlaces a redes sociales  
✅ Iconos con Font Awesome  

## 🎨 Estructura de Archivos

```
mi-portafolio/
├── index.html              # Estructura HTML
├── styles.css              # Estilos CSS (2500+ líneas)
├── script.js               # JavaScript interactivo
├── f9389307-dc2a-4859-b49e-587e195c977e.jpg  # Tu foto de perfil
├── favicon.svg             # Ícono de la página
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### 1. **Personalizar tu Información**

#### En `index.html`:

- **Nombre y Título**: Busca "Sebastian Guzman Giron" y reemplaza con tu nombre
- **Redes Sociales**: Actualiza los enlaces en las secciones Inicio y Footer
  - GitHub: `https://github.com/tuusuario`
  - LinkedIn: `https://linkedin.com/in/tuusuario`
  - Twitter: `https://twitter.com/tuusuario`

- **Proyectos**: Modifica los 4 proyectos en la sección "Proyectos Destacados"
  - Cambiar títulos, descripciones y tecnologías
  - Actualizar enlaces a tus proyectos

- **Contacto**: Actualiza tu email y teléfono
  ```html
  <p><i class="fas fa-envelope"></i> tuemail@ejemplo.com</p>
  <p><i class="fas fa-phone"></i> +57 300 123 4567</p>
  ```

### 2. **Personalizar Colores**

En `styles.css`, busca `:root` y modifica las variables de color:

```css
:root {
    --primary: #0066cc;           /* Azul principal */
    --primary-dark: #0052a3;      /* Azul oscuro */
    --primary-light: #3385ff;     /* Azul claro */
    --dark-bg: #0a0e27;           /* Fondo oscuro */
    --dark-secondary: #1a1f3a;    /* Fondo secundario */
    --text-light: #e0e0e0;        /* Texto claro */
    --text-muted: #a0a0a0;        /* Texto mutado */
    --accent: #00d4ff;            /* Color de acento */
}
```

### 3. **Actualizar Foto de Perfil**

- Reemplaza `f9389307-dc2a-4859-b49e-587e195c977e.jpg` por tu foto
- O renombra tu foto con ese nombre
- La foto aparecerá en la sección Inicio y como favicon

### 4. **Cambiar Habilidades**

En la sección "Sobre Mí", actualiza tus habilidades en:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <ul>
        <li>Tu habilidad 1</li>
        <li>Tu habilidad 2</li>
        ...
    </ul>
</div>
```

## 🌐 Subir a GitHub Pages

1. Crea un repositorio en GitHub llamado `tuusuario.github.io`
2. Clona el repositorio en tu computadora
3. Copia todos los archivos de mi-portafolio a ese repositorio
4. Haz commit y push:
   ```bash
   git add .
   git commit -m "Mi portafolio personal"
   git push origin main
   ```
5. Tu portafolio estará disponible en: `https://tuusuario.github.io`

## 📱 Características Responsivas

- **Desktop**: Layout completo con dos columnas
- **Tablet**: Ajustes de espaciado y tamaños
- **Mobile**: Menú hamburguesa, columna única

## 🛠️ Funcionalidades JavaScript

- ✅ Menú móvil toggle
- ✅ Navegación activa según scroll
- ✅ Validación de formulario de contacto
- ✅ Notificaciones de éxito/error
- ✅ Animaciones de entrada
- ✅ Scroll suave

## 📧 Formulario de Contacto

El formulario incluye:
- Validación de campos obligatorios
- Validación de formato de email
- Notificaciones visuales de éxito/error
- Limpieza automática después de enviar

**Nota**: Actualmente es una demostración. Para que funcione con backend:
- Configura un servicio de correo (EmailJS, Formspree, etc.)
- O crea tu propio backend

## 🎯 Siguientes Pasos

1. [ ] Personalizar información personal
2. [ ] Actualizar redes sociales
3. [ ] Agregar tus proyectos reales
4. [ ] Cambiar colores según tu marca
5. [ ] Probar en diferentes dispositivos
6. [ ] Subir a GitHub Pages
7. [ ] Compartir en tus redes sociales

## 📝 Notas

- El código está optimizado para rendimiento
- Incluye animaciones suaves sin afectar performance
- Totalmente responsive
- Accesible con estándares WCAG

## 👨‍💻 Autor

Creado por: Sebastian Guzman Giron  
Año: 2026

---

¿Preguntas? Contacta a través del formulario en el portafolio. 🚀
