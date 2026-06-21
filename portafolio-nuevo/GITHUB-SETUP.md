# Guía Rápida: Subir Portafolio a GitHub Pages

## Opción 1: Con GitHub Desktop (Más Fácil)

1. **Descarga GitHub Desktop** desde https://desktop.github.com
2. **Inicia sesión** con tu cuenta de GitHub
3. **Crea un nuevo repositorio**:
   - Nombre: `tuusuario.github.io` (reemplaza "tuusuario" con tu usuario de GitHub)
   - Descripción: "Mi portafolio personal"
   - Selecciona la carpeta `mi-portafolio`
4. **Publica el repositorio** (botón "Publish repository")
5. **¡Listo!** Tu portafolio estará en: https://tuusuario.github.io

## Opción 2: Con Línea de Comandos

### Paso 1: Crear repositorio en GitHub
- Entra a https://github.com/new
- Nombre: `tuusuario.github.io`
- Descripción: "Mi portafolio personal"
- Selecciona "Public"
- Crea el repositorio

### Paso 2: Configurar Git en tu computadora

Abre la terminal/PowerShell y ejecuta:

```bash
# Navega a la carpeta del portafolio
cd c:\mi-portafolio

# Inicializa Git
git init

# Añade todos los archivos
git add .

# Crea el primer commit
git commit -m "Portafolio inicial"

# Agrega el repositorio remoto (reemplaza tuusuario)
git remote add origin https://github.com/tuusuario/tuusuario.github.io.git

# Sube los archivos (usa main como rama)
git branch -M main
git push -u origin main
```

### Paso 3: Verificar en GitHub
- Entra a https://github.com/tuusuario/tuusuario.github.io
- Verifica que todos los archivos estén ahí
- Tu portafolio estará disponible en https://tuusuario.github.io (puede tardar 1-2 minutos)

## Actualizar el Portafolio (Después)

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

## Solucionar Problemas

### No aparece la página
- Verifica que el repositorio sea público
- Asegúrate de que el nombre sea `tuusuario.github.io`
- Espera 2-3 minutos después de hacer push
- Revisa en Settings > Pages si está activado

### Errores de Git
```bash
# Ver estatus
git status

# Ver configuración
git config -l

# Configurar usuario (si es primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## Usar Tu Dominio Personal

Si tienes un dominio propio:

1. En GitHub:
   - Entra a tu repositorio
   - Settings > Pages
   - Custom domain: `tudominio.com`

2. En tu proveedor de dominio:
   - DNS: Apunta a `tuusuario.github.io`

## Consejos

✅ Actualiza regularmente tus proyectos  
✅ Revisa los cambios antes de hacer push  
✅ Usa mensajes de commit descriptivos  
✅ Mantén tu portafolio fresco con nuevos proyectos  

---

¿Necesitas ayuda? Revisa: https://docs.github.com/es/pages
