# Plan de Implementación: Tecnicentro de Colima Web

Este plan detalla los pasos para construir y publicar el sitio web de Tecnicentro de Colima, enfocado en un diseño industrial robusto (estilo Milwaukee), facilidad de uso en móviles y conversión a ventas (WhatsApp/Visitas).

## Etapa 1: Cimientos y Estética Industrial
**Objetivo:** Crear la estructura base y definir el estilo visual "rudo" y profesional.
1.  **Configuración del Proyecto:**
    *   Iniciar proyecto con Next.js (tecnología moderna, rápida y buena para Google).
    *   Instalar Tailwind CSS para el diseño.
2.  **Definición de Estilo (Design System):**
    *   Configurar la paleta de colores: Fondos oscuros (Gris Carbón/Negro), Textos blancos/gris claro, y Botones en color de acento (Naranja/Amarillo Seguridad o el color exacto de tu logo).
    *   Seleccionar tipografías: Fuentes gruesas y legibles (ej. 'Inter' o 'Roboto Slab') para títulos.
3.  **Estructura Principal:**
    *   Crear Barra de Navegación (Navbar) simplificada: Logo + Botón de WhatsApp.
    *   Crear "Hero Section" (Pantalla principal): Imagen de fondo impactante, Título grande ("MAQUINARIA Y AFILADO"), y Botón de llamada a la acción.

## Etapa 2: Servicios y Conexión Local
**Objetivo:** Mostrar qué haces y dónde estás de forma clara y rápida.
1.  **Sección de Servicios (Tarjetas Visuales):**
    *   Diseñar tarjetas grandes para: "Venta de Maquinaria", "Afilado de Sierras", "Reparación".
    *   Uso de iconos o imágenes representativas para cada uno.
2.  **Sección de "Promociones" (Flexible):**
    *   Crear un espacio destacado para ofertas de temporada.
    *   *Opción A:* Widget de Facebook integrado (si es técnicamente viable sin mantenimiento complejo).
    *   *Opción B:* Una imagen de "Oferta del Mes" fácil de cambiar.
3.  **Ubicación y Contacto:**
    *   Integrar Mapa de Google interactivo.
    *   Botón "Cómo llegar" que abra Waze/Maps directamente.
    *   Botones grandes de contacto: "Llamar ahora" y "Mandar WhatsApp".

## Etapa 3: Optimización y Lanzamiento
**Objetivo:** Que la página vuele en celulares y aparezca en Google.
1.  **Optimización Móvil:**
    *   Asegurar que los botones sean fáciles de tocar con dedos grandes (diseño "fat finger friendly").
    *   Verificar que las letras se lean bien en pantallas pequeñas sin hacer zoom.
2.  **SEO Local (Posicionamiento):**
    *   Configurar títulos y descripciones: "Afiladuría en Colima", "Venta de Sierras", etc.
    *   Optimizar velocidad de carga.
3.  **Despliegue en Vercel:**
    *   Subir el código a la nube.
    *   Conectar tu dominio (si tienes uno, o usar el gratuito de Vercel por mientras).
    *   Pruebas finales en vivo.
