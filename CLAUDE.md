# Luc Z · web de estudio

Web de estudio y repaso para un alumno de 2.º de ESO ("Luc" es un pseudónimo).
Alumno que necesita una estructura muy clara, frases cortas, apoyos visuales y pocos estímulos.
Todo el contenido y la interfaz, siempre en español.

## Privacidad (obligatorio)
- Nunca aparece el nombre real del alumno, ni fotos suyas, ni datos personales.
- No se escriben datos de salud ni diagnósticos del alumno en ningún archivo del repositorio ni en la web.

## Estructura deseada
- Una sola web estática para GitHub Pages: HTML, CSS y JS sin frameworks ni build.
- Un motor común (`js/motor.js` + `css/estilo.css`) y un archivo de datos por misión (`misiones/feudo-01.js`, etc.).
- Página de inicio con mapa de sagas: "Saga del Feudo" (Historia, 9 misiones) y "Saga de la Materia" (Física y Química, 7 misiones). La última misión de cada saga es un "Jefe final" de repaso (`jefe: true` en js/sagas.js), con 5 preguntas de reto.
- Progreso (orbes y nivel de poder) guardado en localStorage, siempre dentro de try/catch.
- Cambiar el diseño en un solo sitio debe cambiarlo en todas las misiones.

## Estructura de cada misión
Agenda visual fija con 4 pasos: 📖 Aprende → 🎮 Juega → ⚔️ Reto → 🔶 Orbe.
- Aprende: 3 fichas cortas (una idea por pantalla) + tarjetas flash (responder de memoria y luego girar).
- Juega: 2 juegos (tipos: ordenar, unir parejas, clasificar, elegir varias).
- Reto: 3 preguntas cerradas, sin límite de tiempo.
- Orbe: recompensa + descanso sugerido (batería 🥁 o baloncesto 🏀).
- Duración objetivo: 10–15 minutos.

## Reglas pedagógicas
- Una sola tarea por pantalla. Frases cortas. Palabras clave resaltadas.
- Cada ficha de Aprende lleva un "Truco de memoria" claro y concreto (acrónimo, partir la palabra, comparación con baloncesto, historia en dibujos...). Nada abstracto ni lioso.
- Cada concepto tiene SIEMPRE el mismo emoji en todas las pantallas y misiones (p. ej. señor 👑, vasallo 🛡️, feudo 🏰, homenaje 🙇, investidura 🎁, traición ⚔️, estamento 🧱, nobleza 🏇, clero ⛪, campesinos 👨‍🌾, privilegio ⭐, impuestos 💰, paje 🧒, escudero 🪖, caballero 🐴, dama 👸, dote 🪙, cultura 📖, juglares y trovadores 🎶, diezmo 🔟, alto clero ⬆️, bajo clero ⬇️, clero secular 🏘️, clero regular 📏, monasterio 🔔, peregrinos 🥾, votos 🤞, siervo ⛓️, libre 🕊️, protección ☂️, reserva señorial 👑, manso 🏡, barbecho 💤, cruzadas ✝️, motivos religiosos 🙏, motivos económicos / comercio 🚢, órdenes militares 🗡️; materia ⚛️, masa 🏋️, volumen 📦, densidad 🪨, sólido 🧊, líquido 💧, gas 💨, progresivo 🔥, regresivo ❄️, partículas 🔵, cero absoluto 🥶). Ojo: «investidura» de caballero (misión 4) no es la investidura feudal 🎁.
- Errores: nunca restan puntos. Pistas en 3 niveles: 1) general, 2) concreta, 3) se ilumina la respuesta correcta.
- Botón "💡 Pedir pista" disponible antes de fallar.
- Nada de vidas, cronómetros ni comparación con otros.

## Accesibilidad y estímulos
- Sin sonidos automáticos ni animaciones automáticas. Respetar prefers-reduced-motion.
- Botones grandes (mínimo 56 px de alto), letra base de 20–21 px.
- Botón "🔊 Escuchar" en cada pantalla (Web Speech API). Selector de voz que elige la más natural disponible (neural/natural/mejorada/Google) y la recuerda.
- La voz convierte los números romanos a cifras (siglo XII → "siglo 12").

## Estilo visual
- Estilo de Manu en clase: fondo claro (nube #F4F7FA), paneles blancos con sombra suave, barra superior fija con menú, titulares en mayúsculas cursivas condensadas con una palabra en color, antetítulos espaciados.
- Nombre de la web: «Luc Z» (con la Z en naranja). No usar «Dragon Ball» ni palabras de la serie.
- Logo y favicon: diseño propio de Manolo (img/logo-luc-z.png, favicon-32/64.png, apple-touch-icon.png). No añadir más elementos de la serie.
- Colores energía: naranja #FF8A00, azul eléctrico #2F7BFF, amarillo #FFD60A, verde #22C55E, noche #16213A. Texto en tinta #1E2A3A.
- Un color por asignatura (atributo data-asig): Historia = naranja; Física y Química = azul eléctrico (botones con texto blanco). Verde = aciertos y completado. Amarillo = pistas y trucos de memoria.
- Nunca rojo para errores: los fallos se tachan en gris.
- Títulos: Barlow Condensed. Texto: Barlow (máximo 2 tipografías).
- Toque de anime de combate solo en el vocabulario y los orbes, SIN personajes, logos ni objetos reconocibles de ninguna franquicia.
- Vocabulario de juego: "nivel de poder" (puntos), "orbes" (uno por misión), "sagas" (temas), "jefe final" (repaso).

## Imágenes
- Solo de dominio público o licencia libre (Wikimedia Commons), con pie de foto y licencia.
- Si una imagen no carga, se oculta sin romper la pantalla.

## Contenido
- Fuente: apuntes del colegio. Corregir erratas en la versión web.
- Física y Química: en el cambio de la temperatura de fusión con la presión, indicar que el agua es la excepción.
- Erratas corregidas de los apuntes: «Europa cristina», «liberal la Tierra Santa», «hombre libres»; el aceite de oliva tiene 0,92 g/cm³ (los apuntes dicen 0,8 en un ejemplo).

## Flujo de trabajo
- GitHub Pages está activo desde la rama main (https://manuelcastilloredondo-cmyk.github.io/misiones-saga/). Todo lo que se sube a main se publica: trabajar en otra rama y pasar a main solo con el visto bueno de Manolo.
- Antes de dar algo por terminado, comprobar que no hay errores de JavaScript.
