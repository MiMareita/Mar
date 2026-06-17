# Cómo agregar tu canción

1. Coloca tu archivo de audio (mp3, wav, ogg) en esta carpeta
2. Renómbralo como `song.mp3` (o actualiza la ruta en MainScene.jsx)
3. Actualiza los tiempos en `textTimestamps` en MainScene.jsx para sincronizar el texto con tu canción

## Ejemplo de tiempos:
```javascript
const textTimestamps = [
  { time: 3, text: "Primera línea", x: "15%", y: "35%" },
  { time: 7, text: "Segunda línea", x: "55%", y: "45%" },
  // Agrega más según tu canción...
];
```

El tiempo debe estar en segundos desde el inicio de la canción.
