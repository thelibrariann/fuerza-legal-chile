# 🏛️ Fuerza Legal - Landing Page

Landing page moderna y profesional para el Estudio Jurídico Fuerza Legal.

## 📋 Características

- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (mobile-first)
- ✅ HTML y CSS puro (sin frameworks)
- ✅ Sección individual para cada servicio
- ✅ Integración de redes sociales
- ✅ Enlaces a WhatsApp y agendamiento
- ✅ Optimización SEO
- ✅ Animaciones suaves
- ✅ Botón flotante de WhatsApp

## 🎨 Secciones

1. **Header/Navegación** - Menú fijo con navegación suave
2. **Hero** - Sección principal con call-to-action
3. **Nosotros** - Información sobre el estudio
4. **Servicios** - 3 servicios detallados en tarjetas individuales
5. **Videos/Redes Sociales** - Integración con Instagram, TikTok, YouTube
6. **Contacto** - Información y botones de acción
7. **Footer** - Enlaces y redes sociales

## 🔧 Personalización Requerida

### 1. Enlaces de Redes Sociales

Reemplazar en `index.html` los siguientes enlaces:

```html
<!-- Instagram -->
https://www.instagram.com/tuusuario

<!-- TikTok -->
https://www.tiktok.com/@tuusuario

<!-- YouTube -->
https://www.youtube.com/@tucanal

<!-- Facebook -->
https://www.facebook.com/tupagina
```

### 2. WhatsApp

Reemplazar el número de teléfono (actualmente +56912345678):

```html
https://wa.me/56912345678
```

Por tu número real en formato internacional (sin +, espacios ni guiones).

### 3. Agendamiento de Horas

Reemplazar el enlace de Calendly:

```html
https://calendly.com/tuusuario
```

Puedes usar:
- Calendly
- Google Calendar
- SimplyCast
- O cualquier sistema de agendamiento

### 4. Información de Contacto

En la sección de contacto, actualizar:

```html
<p>Región del Maule, Chile</p>
<a href="tel:+56912345678">+569 1234 5678</a>
<a href="mailto:contacto@fuerzalegalchile.com">contacto@fuerzalegalchile.com</a>
```

### 5. Embedimiento de Videos

Para mostrar videos reales, reemplazar los `.video-placeholder` con:

#### Instagram (Opción 1 - Link directo):
Ya está implementado con botones que dirigen a las redes.

#### Instagram (Opción 2 - Embed real):
```html
<blockquote class="instagram-media" data-instgrm-permalink="URL_DEL_POST"></blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

#### TikTok:
```html
<blockquote class="tiktok-embed" cite="URL_DEL_VIDEO" data-video-id="ID_DEL_VIDEO"></blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```

#### YouTube:
```html
<iframe width="100%" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen>
</iframe>
```

### 6. Logo o Imagen

Para añadir un logo real, reemplazar:

```html
<div class="logo">
    <i class="fas fa-balance-scale"></i>
    <span>Fuerza Legal</span>
</div>
```

Por:

```html
<div class="logo">
    <img src="ruta/al/logo.png" alt="Fuerza Legal" style="height: 50px;">
</div>
```

### 7. Imagen en "Nosotros"

Reemplazar el placeholder por una imagen real:

```html
<div class="about-image">
    <img src="ruta/imagen-oficina.jpg" alt="Oficina Fuerza Legal" style="border-radius: 20px; box-shadow: var(--shadow-xl);">
</div>
```

## 🎨 Personalización de Colores

En `styles.css`, modificar las variables CSS:

```css
:root {
    --primary-color: #1a237e;      /* Azul principal */
    --secondary-color: #c62828;     /* Rojo secundario */
    --accent-color: #ffd700;        /* Dorado/amarillo */
}
```

## 📱 Redes Sociales Recomendadas

Para el estudio jurídico, considera crear contenido en:

- **Instagram**: Posts educativos, casos de éxito, tips legales
- **TikTok**: Videos cortos informativos (30-60 seg)
- **YouTube**: Videos detallados sobre procedimientos legales
- **Facebook**: Noticias y actualizaciones

## 🚀 Optimización SEO

Ya incluida en el HTML:

- Meta tags apropiados
- Títulos descriptivos
- Alt text en imágenes
- Estructura semántica HTML5
- Enlaces descriptivos

### Mejoras adicionales recomendadas:

1. **Google Analytics**: Agregar código de seguimiento
2. **Google Search Console**: Verificar el sitio
3. **Schema Markup**: Agregar datos estructurados para abogados
4. **Sitemap**: Crear sitemap.xml
5. **Robots.txt**: Configurar archivo robots.txt

## 📊 Métricas Recomendadas

Herramientas para medir rendimiento:

- Google PageSpeed Insights
- GTmetrix
- Google Analytics
- Google Search Console
- Hotjar (mapas de calor)

## 🔒 Seguridad

Recomendaciones:

1. Usar HTTPS (certificado SSL)
2. Implementar Content Security Policy (CSP)
3. Validar formularios en servidor
4. Protección contra spam en formularios

## 📦 Archivos Incluidos

```
/
├── index.html      # Estructura principal
├── styles.css      # Estilos y diseño
├── script.js       # Funcionalidad JavaScript
└── README.md       # Este archivo
```

## 🌐 Hosting Recomendado

Opciones gratuitas/económicas:

1. **Netlify** - Recomendado (gratis, fácil)
2. **Vercel** - Alternativa excelente
3. **GitHub Pages** - Para proyectos simples
4. **Firebase Hosting** - Google
5. **Hostinger** - Hosting tradicional (pagado)

## 📝 Pasos para Publicar

### Opción 1: Netlify (Recomendado)

1. Crear cuenta en netlify.com
2. Arrastrar carpeta del proyecto
3. ¡Listo! Obtienes URL automática
4. Opcional: Conectar dominio personalizado

### Opción 2: Hosting Tradicional

1. Contratar hosting
2. Subir archivos vía FTP
3. Configurar dominio

## 🔄 Actualizaciones Futuras Sugeridas

- [ ] Formulario de contacto funcional
- [ ] Blog de artículos legales
- [ ] Chat en vivo
- [ ] Testimonios de clientes
- [ ] Calculadora de honorarios
- [ ] Portal de clientes
- [ ] Sistema de casos

## 💡 Tips de Contenido

### Para Servicios:
- Agregar más detalles específicos
- Incluir casos de éxito
- Agregar FAQs por servicio

### Para Redes Sociales:
- Publicar 3-5 veces por semana
- Responder comentarios rápidamente
- Usar hashtags relevantes: #DerechoChile #Maule #AsesoriaLegal

### Para SEO Local:
- Mencionar ubicación específica (ciudad)
- Crear perfil Google My Business
- Conseguir reseñas de clientes

## 📞 Soporte

Para modificaciones o dudas sobre el código, revisar:
- Comentarios en el código
- Documentación de HTML/CSS/JavaScript en MDN

## ⚖️ Legal

Este código es de uso libre para Fuerza Legal.
Recomendación: Agregar política de privacidad y términos de uso.

---

**Desarrollado para Fuerza Legal - Estudio Jurídico**
