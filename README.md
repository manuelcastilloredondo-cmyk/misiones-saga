# misiones-saga
Misiones de estudio gamificadas (2.º ESO). Web estática: HTML, CSS y JS, sin build.

## Estructura
- `index.html` — mapa de sagas y progreso.
- `mision.html?m=<id>` — pantalla de misión (p. ej. `mision.html?m=feudo-01`).
- `css/estilo.css` — todo el diseño, en un solo sitio.
- `js/motor.js` — motor común (pantallas, pistas, voz, progreso).
- `js/sagas.js` — catálogo de sagas y misiones.
- `misiones/<id>.js` — solo datos de cada misión.

## Probar en local
```bash
python3 -m http.server 8000
```
Abrir http://localhost:8000/ (también funciona abriendo `index.html` directamente).

## Añadir una misión
1. Crear `misiones/<saga>-NN.js` con `Motor.registrar('<saga>-NN', {...})` (copiar `feudo-02.js` como plantilla).
2. Añadir su `id` y `titulo` en `js/sagas.js`.

El progreso se guarda en `localStorage` (clave `misionesLuc`).
