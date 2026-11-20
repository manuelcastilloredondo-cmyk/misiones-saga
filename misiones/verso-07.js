/* verso-07 · Jefe final del Verso (repaso de toda la saga) */
(function () {
  Motor.registrar('verso-07', {
    orbe: 'Gran Orbe del Verso',
    meta: 230,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Plan de combate',
       iconos:[{e:'📝',t:'Verso'},{e:'🎵',t:'Rima'},{e:'👏',t:'Medida'},{e:'🪄',t:'Figuras'}],
       html:'Este es el <span class="clave">jefe final</span>: un repaso de <b>toda la Saga del Verso</b>.<br>Vas a ver versos y estrofas, rima, medida y figuras literarias.<br>Tranquilo: <b>no hay tiempo límite</b> y las pistas siguen funcionando.',
       truco:{tipo:'Tus armas', html:'🟰 gemelos / 🔉 primos · 👏 palmadas: aguda <b>+1</b>, llana <b>0</b>, esdrújula <b>−1</b> · 👯 «como» = símil · 🌗 anti = contrario'}},
      {tipo:'flash', fase:0, titulo:'Calentamiento',
       ayuda:'Responde <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 6.',
       cartas:[
         {f:'¿Qué es una estrofa?', a:'<span class="emo">🗂️</span>Un grupo de versos separado por un espacio en blanco'},
         {f:'¿Qué coincide en la rima asonante?', a:'<span class="emo">🔉</span>Solo las vocales, desde la última vocal tónica'},
         {f:'¿Qué es la sinalefa?', a:'<span class="emo">🔗</span>Contar juntas vocal final y vocal inicial'},
         {f:'¿Qué figura quita las «y»?', a:'<span class="emo">🏎️</span>El asíndeton'},
         {f:'¿Qué diferencia una metáfora de una metáfora pura?', a:'<span class="emo">✨</span>En la pura no se nombra la cosa real'},
         {f:'¿Qué es arte mayor?', a:'<span class="emo">🙌</span>Versos de 9 sílabas o más'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada figura con su ejemplo',
       ayuda:'Toca una figura y después su ejemplo.',
       pares:[
         {c:'Anáfora',e:'🔁',d:'Tú llenas mis días. Tú habitas mis sueños.',p:'Se repite la palabra del principio.'},
         {c:'Hipérbaton',e:'🔀',d:'De tu voz guardo el eco',p:'Orden normal: «Guardo el eco de tu voz».'},
         {c:'Polisíndeton',e:'🐌',d:'Y cae la tarde y cae la lluvia',p:'Muchas «y».'},
         {c:'Metáfora pura',e:'✨',d:'Las perlas de tu boca brillan al sonreír',p:'No se nombran los dientes.'},
         {c:'Símil',e:'👯',d:'La nube es como algodón',p:'Lleva «como».'}
       ],
       bien:'¡Figuras dominadas!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Consonante o asonante?',
       ayuda:'Mira desde la vocal fuerte y toca el tipo de rima.',
       grupos:[{id:'c',n:'Consonante',e:'🟰'},{id:'a',n:'Asonante',e:'🔉'}],
       items:[
         {t:'tejado / lado',e:'🏠',g:'c',p:'-ado y -ado.'},
         {t:'tarde / aire',e:'🌇',g:'a',p:'Solo coinciden a-e.'},
         {t:'camino / destino',e:'🛤️',g:'c',p:'-ino y -ino.'},
         {t:'casa / rama',e:'🏡',g:'a',p:'Solo coinciden a-a.'}
       ],
       regla:'Recuerda: todo igual → consonante 🟰. Solo vocales → asonante 🔉.',
       bien:'¡Oído de poeta!'},
      {tipo:'test', fase:2, pregunta:'¿Cuántos versos y estrofas tiene este poema?', texto:'La luna mira el jardín.<br>El viento mueve las flores.<br>La noche guarda mi voz.<span class="hueco"></span>El río sigue su viaje.<br>La rama toca el cristal.<br>La casa duerme en silencio.',
       opciones:[{t:'6 versos y 2 estrofas',ok:true},{t:'2 versos y 6 estrofas',ok:false},{t:'3 versos y 1 estrofa',ok:false}],
       pistas:['Cuenta las líneas: son los versos.','Cuenta los huecos y suma 1: son las estrofas.'],
       bien:'6 versos y 2 estrofas de 3 versos.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántas sílabas métricas tiene este verso?', texto:'Suena mi canción.',
       opciones:[{t:'5',ok:false},{t:'6',ok:true},{t:'4',ok:false}],
       pistas:['Separa: Sue-na-mi-can-ción. Son 5.','«canción» es aguda: suma 1.'],
       bien:'5 + 1 = 6 sílabas métricas.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'Huyo, corro, tropiezo, caigo;<br>la noche viene detrás.',
       opciones:[{t:'Polisíndeton',ok:false},{t:'Asíndeton',ok:true},{t:'Anáfora',ok:false}],
       pistas:['¿Hay alguna «y» entre los verbos?','Sin «y» = a-síndeton 🏎️.'],
       bien:'Asíndeton: sin «y», el ritmo se acelera.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'El reloj me regaña<br>desde la pared del aula.',
       opciones:[{t:'Hipérbole',ok:false},{t:'Antítesis',ok:false},{t:'Personificación',ok:true}],
       pistas:['¿Un reloj puede regañar?','Regañar es algo que hacen las personas.'],
       bien:'Personificación.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'Tan cerca vives de mis ojos,<br>tan lejos quedas de mis manos.',
       opciones:[{t:'Antítesis',ok:true},{t:'Símil',ok:false},{t:'Aliteración',ok:false}],
       pistas:['Busca una pareja de palabras contrarias.','Cerca / lejos: anti = contrario.'],
       bien:'Antítesis: cerca y lejos se oponen.'},
      {tipo:'fin', fase:3, orbe:'Gran Orbe del Verso'}
    ]
  });
})();
