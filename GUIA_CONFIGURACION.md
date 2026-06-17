# Guía de Configuración - Historia del Barco

## Lo que se ha mejorado:

### 1. **Navegación del Barco**
- El barco ahora navega entre dos islas siguiendo una ruta suave
- La animación es fluida y se adapta al progreso de la canción

### 2. **Sincronización de Audio**
- El sistema ahora se basa en la duración real de tu canción
- Los textos aparecen en momentos específicos basados en timestamps

### 3. **Islas Decorativas**
- Dos islas con palmeras que marcan el inicio y destino
- Las islas aparecen con animación elegante

## Cómo usar:

### Paso 1: Agrega tu Canción
1. Coloca tu archivo de audio (mp3, wav, ogg) en: `public/audio/`
2. Renómbralo como `song.mp3` (o actualiza `SONG_CONFIG.audioPath` en `src/config/songConfig.js`)

### Paso 2: Sincroniza los Textos
1. Abre `src/config/songConfig.js`
2. Modifica el array `textTimestamps`:

```javascript
textTimestamps: [
  {
    time: 3,        // Segundo donde aparece el texto
    text: "Tu texto aquí",
    x: "15%",       // Posición horizontal
    y: "35%",       // Posición vertical
  },
  // Agrega más líneas según necesites
]
```

### Paso 3: Ajusta la Ruta del Barco (Opcional)
Si quieres cambiar el camino que sigue el barco, modifica `islandRoute` en `songConfig.js`:

```javascript
islandRoute: [
  { x: 5, y: 30 },   // Punto inicial
  { x: 35, y: 20 },  // Punto intermedio
  { x: 65, y: 25 },  // Otro punto
  { x: 90, y: 35 },  // Punto final
]
```

Los valores x e y son porcentajes (0-100).

## Encontrar los Tiempos Correctos:

1. **Abre tu audio en un reproductor** que muestre tiempos (Audacity, VLC, etc.)
2. **Identifica cada frase** y anota el segundo donde comienza
3. **Copia el tiempo** al archivo `songConfig.js`

### Ejemplo:
Si tu canción dice "Te amo" en el segundo 2.5:
```javascript
{ time: 2.5, text: "Te amo", x: "50%", y: "50%" }
```

## Posicionamiento del Texto (x, y):

- **x**: Posición horizontal (0% = izquierda, 100% = derecha, 50% = centro)
- **y**: Posición vertical (0% = arriba, 100% = abajo)

Ejemplo: `x: "25%", y: "75%"` = cuarto izquierdo, más abajo

## Notas Importantes:

- ✓ Los decimales son permitidos: `3.5`, `7.25`, etc.
- ✓ Puedes agregar tantos textos como quieras
- ✓ La canción debe estar en `public/audio/`
- ✓ El archivo debe llamarse `song.mp3` o actualiza la ruta en `songConfig.js`
- ✓ Si la canción es más corta que los tiempos definidos, aparecerán solo los que apliquen

## Para Probarlo:

```bash
npm run dev
```

Luego abre `http://localhost:5173/mar/` en tu navegador y haz clic en "Reproducir Historia".
