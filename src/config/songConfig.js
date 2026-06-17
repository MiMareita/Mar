/**
 * Configuración de timestamps para sincronización de audio y texto
 * Todos los tiempos están en segundos desde el inicio de la canción
 */

import songFile from '../audio/song.mp3';

export const SONG_CONFIG = {
  // Ruta al archivo de audio
  audioPath: songFile,
  
  // Tiempos de aparición de textos (en segundos)
  textTimestamps: [
    {
      time: 0.5,
      text: "En un barco de papel",
      x: "15%",
      y: "15%",
    },
     {
      time: 4,
      text: "yo volveré",
      x: "40%",
      y: "20%",
    },
    {
      time: 8,
      text: "Por ti mi amor",
      x: "45%",
      y: "30%",
    },
    {
      time: 11,
      text: "Francés limón",
      x: "50%",
      y: "50%",
    },
    {
      time: 15,
      text: "Las luces de la ciudad ",
      x: "35%",
      y: "60%",
    },
    {
      time: 19,
      text: "se apagarán",
      x: "50%",
      y: "70%",
    },
    {
      time: 24,
      text: "Te besaré,",
      x: "30%",
      y: "80%",
    },
    {
      time: 27,
      text: "me besarás",
      x: "20%",
      y: "90%",
    },
  ],

  // Ruta del barco entre islas (interpolación suave)
  islandRoute: [
    { x: 5, y: 30 },   // Punto inicial (cerca isla 1)
    { x: 35, y: 20 },  // Punto intermedio 1
    { x: 65, y: 25 },  // Punto intermedio 2
    { x: 90, y: 35 },  // Punto final (cerca isla 2)
  ],

  // Configuración de islas
  islands: [
    {
      x: "5%",
      y: "80",
      size: "medium",
      label: "Inicio",
    },
    {
      x: "85%",
      y: "70",
      size: "large",
      label: "Destino",
    },
  ],
};

/**
 * INSTRUCCIONES PARA AJUSTAR LOS TIEMPOS:
 * 
 * 1. Abre tu archivo de audio en un reproductor que muestre tiempos
 * 2. Identifica cuándo comienza cada frase que quieres mostrar
 * 3. Actualiza el valor de "time" en los objetos textTimestamps
 * 
 * Ejemplo:
 * Si la frase "En un barco..." comienza en el segundo 3.5:
 * { time: 3.5, text: "En un barco...", ... }
 * 
 * TIPS:
 * - Los decimales son permitidos (ej: 3.5, 7.2, etc)
 * - Puedes agregar más textos copiando la estructura
 * - El x, y son porcentajes relativos a la pantalla (0% = izquierda/arriba, 100% = derecha/abajo)
 */
