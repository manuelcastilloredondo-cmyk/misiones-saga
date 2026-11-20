/* Catálogo de sagas. Para añadir una misión: crear misiones/<id>.js y añadir aquí su id y título.
   asig: color de la asignatura (ver css/estilo.css → [data-asig]). jefe: misión final de repaso. */
window.SAGAS = [
  { id: 'feudo', asig: 'historia', asigNombre: 'Historia', nombre: 'Saga del Feudo', emoji: '🏰', total: 9,
    misiones: [
      { id: 'feudo-01', titulo: 'El origen' },
      { id: 'feudo-02', titulo: 'Señor y vasallo' },
      { id: 'feudo-03', titulo: 'La sociedad estamental' },
      { id: 'feudo-04', titulo: 'Los nobles: caballeros y damas' },
      { id: 'feudo-05', titulo: 'El clero y los monasterios' },
      { id: 'feudo-06', titulo: 'Los campesinos' },
      { id: 'feudo-07', titulo: 'El feudo por dentro' },
      { id: 'feudo-08', titulo: 'Las cruzadas' },
      { id: 'feudo-09', titulo: 'Jefe final del Feudo', jefe: true }
    ] },
  { id: 'materia', asig: 'fyq', asigNombre: 'Física y Química', nombre: 'Saga de la Materia', emoji: '🧪', total: 7,
    misiones: [
      { id: 'materia-01', titulo: 'Masa, volumen y densidad' },
      { id: 'materia-02', titulo: '¿Flota o se hunde?' },
      { id: 'materia-03', titulo: 'Estados y cambios de estado' },
      { id: 'materia-04', titulo: 'Fusión y ebullición' },
      { id: 'materia-05', titulo: 'La teoría cinética' },
      { id: 'materia-06', titulo: 'La escala Kelvin' },
      { id: 'materia-07', titulo: 'Jefe final de la Materia', jefe: true }
    ] },
  { id: 'verso', asig: 'lengua', asigNombre: 'Lengua', nombre: 'Saga del Verso', emoji: '✍️', total: 7,
    misiones: [
      { id: 'verso-01', titulo: 'Verso y estrofa' },
      { id: 'verso-02', titulo: 'La rima' },
      { id: 'verso-03', titulo: 'Medir los versos' },
      { id: 'verso-04', titulo: 'Figuras de sonido y orden' },
      { id: 'verso-05', titulo: 'Figuras de ideas e imágenes' },
      { id: 'verso-06', titulo: 'Preparo mi poema' },
      { id: 'verso-07', titulo: 'Jefe final del Verso', jefe: true }
    ] }
];
