# Imágenes del Proyecto

Este directorio contiene las imágenes utilizadas en el sitio web de AGNEXUSUIO.

## Imágenes Actuales

El sitio utiliza imágenes de demostración cargadas desde Unsplash directamente en el código HTML. Estas son URLs externas que funcionan correctamente pero pueden ser reemplazadas por imágenes locales si lo deseas.

## Cómo Reemplazar las Imágenes

1. **Obtén tus propias imágenes** relacionadas con:
   - Vehículos eléctricos
   - Cargadores EV
   - Instalaciones eléctricas
   - Garajes residenciales
   - Estaciones de carga
   - Instalaciones empresariales

2. **Optimiza las imágenes**:
   - Convierte a formato WebP para mejor rendimiento
   - Tamaño recomendado para hero: 1920x1080px
   - Tamaño recomendado para tarjetas: 600x400px
   - Comprime las imágenes usando herramientas como TinyPNG o Squoosh

3. **Guarda las imágenes en este directorio** con nombres descriptivos:
   ```
   images/hero-ev.webp
   images/home-charger.webp
   images/business-charger.webp
   images/installation.webp
   images/tech-background.webp
   ```

4. **Actualiza las rutas en index.html**:
   
   Busca estas líneas y reemplaza las URLs de Unsplash:
   
   ```html
   <!-- Hero Section -->
   <img src="images/hero-ev.webp" alt="Vehículo eléctrico cargando">
   
   <!-- Why Section -->
   <img src="images/installation.webp" alt="Instalación de cargador eléctrico">
   
   <!-- Client Types Section -->
   <img src="images/home-charger.webp" alt="Hogar con cargador eléctrico">
   <img src="images/business-charger.webp" alt="Empresa con cargador eléctrico">
   
   <!-- CTA Section -->
   <img src="images/tech-background.webp" alt="Fondo tecnológico">
   ```

## Recomendaciones

- **Formato**: Usa WebP para mejor compresión y calidad
- **Tamaño máximo**: 500KB por imagen
- **Lazy loading**: Ya está implementado en el código
- **Alt text**: Siempre incluye texto alternativo para accesibilidad y SEO
- **Responsive**: Considera usar diferentes tamaños para mobile y desktop

## Imágenes de Stock Gratuitas

Si necesitas imágenes de stock, puedes encontrarlas en:
- Unsplash.com
- Pexels.com
- Pixabay.com

Busca términos como:
- "electric vehicle charging"
- "EV charger installation"
- "electric car home charging"
- "sustainable energy"
- "modern garage"
