/* verso-07 · Escribo mi poema (taller: lo escrito se guarda en el aparato) */
(function () {
  const verso = (n, ej) => ({ id: 'v' + n, num: n, etiqueta: 'Verso ' + n, ejemplo: ej || 'Escribe el verso ' + n });
  Motor.registrar('verso-07', {
    orbe: 'Orbe de la Pluma',
    meta: 120,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Hoy escribes tú',
       iconos:[{e:'✍️',t:'Escribir'},{e:'💾',t:'Se guarda'}],
       html:'En esta misión vas a <span class="clave">escribir tu poema</span>: <b>3 estrofas</b> de <b>4 versos</b>.<br>Todo lo que escribas <b>se guarda solo</b> en este aparato. Puedes salir y volver cuando quieras: lo encontrarás tal cual.<br>No tiene que quedar perfecto a la primera. Primero escribe; luego lo mejoras.',
       truco:{tipo:'El plan', html:'«<span class="letra">AS, PA, MH</span>»: Estrofa 1 → Anáfora + Símil · Estrofa 2 → Personificación + Aliteración · Estrofa 3 → Metáfora + Hipérbole.<br>Riman los versos <b>pares</b>: 2-4, 6-8 y 10-12.'}},
      {tipo:'escribir', fase:0, titulo:'Mi idea',
       ayudaTit:'Piensa antes de escribir',
       ayuda:'Puedes <b>inventarlo</b>: no tiene que contar algo que te haya pasado. Ideas de tema: un partido, la música, el mar, una tormenta, un amigo...',
       campos:[
         {id:'titulo', etiqueta:'Título del poema', ejemplo:'Ej.: El último segundo'},
         {id:'tema', etiqueta:'Tema: ¿de qué trata?', ejemplo:'Ej.: un partido de baloncesto'},
         {id:'transmitir', etiqueta:'¿Qué quiero transmitir?', ejemplo:'Ej.: los nervios antes de lanzar'}
       ]},
      {tipo:'escribir', fase:1, titulo:'Estrofa 1 · versos 1 a 4',
       ayudaTit:'Anáfora 🔁 + símil 👯 · rima consonante 🟰',
       ayuda:'🔁 <b>Anáfora</b>: empieza al menos <b>dos versos</b> con la misma palabra.<br>👯 <b>Símil</b>: compara usando <b>«como»</b>.<br>🟰 Riman los versos <b>2 y 4</b> con rima <b>consonante</b> (todo igual desde la vocal fuerte). Ayuda: canción / corazón; camino / destino.',
       campos:[
         {id:'rima1', etiqueta:'Mis palabras finales (versos 2 y 4)', ejemplo:'Ej.: canción / corazón'},
         verso(1), verso(2), verso(3), verso(4)
       ]},
      {tipo:'escribir', fase:1, titulo:'Estrofa 2 · versos 5 a 8',
       ayudaTit:'Personificación 🗣️ + aliteración 🔊 · rima asonante 🔉',
       ayuda:'🗣️ <b>Personificación</b>: da una <b>acción humana</b> a algo que no es humano.<br>🔊 <b>Aliteración</b>: <b>repite un sonido</b> para sugerir una sensación.<br>🔉 Riman los versos <b>6 y 8</b> con rima <b>asonante</b> (solo las vocales). Ayuda: casa / rama; cielo / secreto.',
       campos:[
         {id:'rima2', etiqueta:'Mis palabras finales (versos 6 y 8)', ejemplo:'Ej.: casa / rama'},
         verso(5), verso(6), verso(7), verso(8)
       ]},
      {tipo:'escribir', fase:1, titulo:'Estrofa 3 · versos 9 a 12',
       ayudaTit:'Metáfora 🪄 + hipérbole 🤯 · tú eliges la rima',
       ayuda:'🪄 <b>Metáfora</b>: relaciona dos cosas por su parecido, <b>sin «como»</b>.<br>🤯 <b>Hipérbole</b>: <b>exagera</b> para dar fuerza a una idea.<br>Riman los versos <b>10 y 12</b>: elige <b>consonante 🟰</b> o <b>asonante 🔉</b>.',
       campos:[
         {id:'rimatipo3', etiqueta:'¿Qué rima eliges?', ejemplo:'Consonante o asonante'},
         {id:'rima3', etiqueta:'Mis palabras finales (versos 10 y 12)', ejemplo:'Ej.: camino / destino'},
         verso(9), verso(10), verso(11), verso(12)
       ]},
      {tipo:'releer', fase:2, titulo:'Releo mi poema',
       tituloId:'titulo',
       estrofas:[['v1','v2','v3','v4'],['v5','v6','v7','v8'],['v9','v10','v11','v12']],
       ayuda:'Léelo en voz alta (o pulsa Escuchar) y marca lo que ya cumple. Si falta algo, pulsa <b>«Cambiar algo»</b> y corrígelo: no se pierde nada.',
       lista:['Tiene 3 estrofas de 4 versos','He usado las 2 figuras de cada estrofa','He comprobado las parejas de rima (2-4, 6-8 y 10-12)'],
       bien:'¡Poema terminado! Ahora puedes pasarlo a la ficha y analizarlo.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Pluma'}
    ]
  });
})();
