# AGNEXUSUIO - Sitio Web Corporativo

Sitio web profesional para **AGNEXUSUIO**, empresa especializada en instalación de cargadores para vehículos eléctricos en Ecuador.

## 🚀 Vista Previa

El sitio incluye:
- Diseño moderno y responsive
- Optimizado para conversión a WhatsApp
- SEO configurado para Ecuador
- Animaciones profesionales
- Formulario de contacto funcional

---

## 📁 Estructura del Proyecto

```
AGNEXUSUIO/
│
├── index.html          # Página principal
├── README.md           # Este archivo
│
├── css/
│   └── styles.css      # Estilos personalizados
│
├── js/
│   └── script.js       # Funcionalidad JavaScript
│
├── images/
│   └── README.md       # Instrucciones para imágenes
│
└── assets/
    └── favicon.svg     # Icono del sitio
```

---

## 🛠️ Cómo Usar Este Proyecto

### 1. Descargar/Clonar el Proyecto

**Opción A - Clonar desde GitHub:**
```bash
git clone https://github.com/tu-usuario/agnexusuio.git
cd agnexusuio
```

**Opción B - Descargar ZIP:**
1. Ve al repositorio en GitHub
2. Haz clic en "Code" → "Download ZIP"
3. Extrae el archivo en tu computadora

**Opción C - Uso local:**
Simplemente haz doble clic en `index.html` para abrirlo en tu navegador.

---

### 2. Modificar Datos de Contacto

Abre `index.html` y busca estos elementos para actualizar:

**Teléfono y WhatsApp:**
```html
<!-- Busca y reemplaza en todo el archivo -->
https://wa.me/593992217314
+593 99 221 7314
```

**Correo electrónico:**
```html
<!-- Busca y reemplaza -->
mailto:contacto@agnexusuio.com
contacto@agnexusuio.com
```

---

### 3. Reemplazar Imágenes

Las imágenes actuales son de demostración (Unsplash). Para usar tus propias imágenes:

1. Guarda tus imágenes en la carpeta `images/`
2. Nómbralas descriptivamente:
   - `hero-ev.webp`
   - `installation.webp`
   - `home-charger.webp`
   - `business-charger.webp`

3. En `index.html`, actualiza las rutas:
```html
<!-- Cambia esto -->
<img src="https://images.unsplash.com/photo-..." 

<!-- Por esto -->
<img src="images/hero-ev.webp" alt="Descripción">
```

**Ver más detalles en:** `images/README.md`

---

### 4. Modificar Colores

Los colores están configurados en Tailwind dentro de `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'agn-dark': '#0a1628',      // Azul oscuro
                'agn-blue': '#1e3a5f',      // Azul medio
                'agn-tech': '#2563eb',      // Azul tecnológico
                'agn-green': '#10b981',     // Verde eléctrico
                'agn-gray': '#64748b',      // Gris
                'agn-light': '#f8fafc'      // Blanco grisáceo
            }
        }
    }
}
```

Para cambios más avanzados, edita `css/styles.css`.

---

### 5. Modificar Textos

Todos los textos están en `index.html`. Busca y reemplaza:

**Títulos de sección:**
```html
<h1>La energía que mueve tu futuro</h1>
<h2>Soluciones de carga para cada necesidad</h2>
```

**Descripciones de servicios:**
```html
<p>Instalación de cargadores para viviendas y garajes particulares.</p>
```

**FAQ:**
```html
<div class="faq-question">¿Puedo instalar un cargador en mi casa?</div>
```

---

## 🌐 Publicar en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Inicia sesión en [GitHub](https://github.com)
2. Haz clic en "+" → "New repository"
3. Nombre: `agnexusuio` (o el nombre que prefieras)
4. Visibility: Público
5. Haz clic en "Create repository"

### Paso 2: Subir Archivos

**Opción A - Usando Git:**
```bash
git init
git add .
git commit -m "Initial commit - AGNEXUSUIO website"
git branch -M main
git remote add origin https://github.com/tu-usuario/agnexusuio.git
git push -u origin main
```

**Opción B - Interfaz Web:**
1. En tu repositorio, haz clic en "uploading an existing file"
2. Arrastra todos los archivos del proyecto
3. Haz clic en "Commit changes"

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en **Save**

### Paso 4: Acceder a tu Sitio

Después de 1-2 minutos, tu sitio estará disponible en:
```
https://tu-usuario.github.io/agnexusuio/
```

---

## 🔗 Configurar Dominio Personalizado

### Paso 1: Comprar un Dominio

Adquiere tu dominio en:
- Namecheap
- GoDaddy
- Google Domains
- Otro proveedor

Ejemplo: `agnexusuio.com`

### Paso 2: Configurar DNS

En tu proveedor de dominio, agrega estos registros:

**Registro A:**
```
Tipo: A
Nombre: @
Valor: 185.199.108.153
TTL: 3600
```

(Repite para las otras IPs de GitHub Pages: 185.199.109.153, 185.199.110.153, 185.199.111.153)

**Registro CNAME:**
```
Tipo: CNAME
Nombre: www
Valor: tu-usuario.github.io
TTL: 3600
```

### Paso 3: Configurar en GitHub

1. Ve a Settings → Pages
2. En "Custom domain", escribe: `agnexusuio.com`
3. Haz clic en **Save**
4. Marca "Enforce HTTPS" (después de que se active)

### Paso 4: Verificación

Tu sitio ahora estará disponible en:
```
https://agnexusuio.com
www.agnexusuio.com
```

---

## ✨ Características del Sitio

### ✅ SEO Optimizado
- Meta tags configurados
- Open Graph para redes sociales
- Twitter Cards
- Keywords para Ecuador
- HTML semántico

### ✅ Responsive Design
- Mobile first
- Funciona en iPhone, Android, tablets, laptops
- Menú hamburguesa en móvil

### ✅ Conversión a WhatsApp
- Botones estratégicos
- Formulario que genera mensaje de WhatsApp
- Botón flotante siempre visible

### ✅ Animaciones Profesionales
- Fade in / Slide up
- Hover effects
- Smooth scrolling
- Microinteracciones

### ✅ Rendimiento
- Lazy loading de imágenes
- CSS optimizado
- JavaScript mínimo
- Sin dependencias pesadas

---

## 📱 URLs de WhatsApp Configuradas

**Mensaje predeterminado:**
```
https://wa.me/593992217314?text=Hola%20AGNEXUSUIO,%20estoy%20interesado%20en%20instalar%20un%20cargador%20para%20veh%C3%ADculo%20el%C3%A9ctrico.
```

**Formulario de contacto:** Genera automáticamente un mensaje con los datos del cliente.

---

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **JavaScript** - Interactividad
- **Tailwind CSS (CDN)** - Framework de utilidades
- **Font Awesome (CDN)** - Iconos
- **Google Fonts** - Tipografía Inter

---

## 📞 Soporte

Para modificar o actualizar el sitio:

1. Edita los archivos locales
2. Haz commit de los cambios
3. Push a GitHub
4. GitHub Pages actualiza automáticamente en 1-2 minutos

---

## 📄 Licencia

Este proyecto es propiedad de **AGNEXUSUIO**. Todos los derechos reservados © 2026.

---

## 🎯 Próximos Pasos Recomendados

1. [ ] Reemplazar imágenes de demostración por fotos reales
2. [ ] Verificar todos los enlaces de WhatsApp
3. [ ] Probar el formulario de contacto
4. [ ] Configurar dominio personalizado (opcional)
5. [ ] Compartir el sitio en redes sociales
6. [ ] Monitorear tráfico con Google Analytics (opcional)

---

**Creado para AGNEXUSUIO - E-Mobility Solutions**

📧 contacto@agnexusuio.com | 📱 +593 99 221 7314
