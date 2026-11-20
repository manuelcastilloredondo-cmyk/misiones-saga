/* verso-02 · La rima */
(function () {
  Motor.registrar('verso-02', {
    orbe: 'Orbe de la Rima',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Dónde empieza la rima',
       iconos:[{e:'🎵',t:'Rima'},{e:'📣',t:'Vocal tónica'}],
       html:'La <span class="clave">rima</span> 🎵 es la repetición de sonidos al <b>final</b> de los versos.<br>Se escucha desde la <span class="clave">última vocal tónica</span> 📣: la vocal que suena <b>con más fuerza</b> en la última palabra.<br>Ejemplo: en <i>te-<b>JA</b>-do</i>, la vocal tónica es la <b>a</b>. La rima es <b>-ado</b>.',
       truco:{tipo:'Dilo gritando', html:'Di la palabra como si la gritaras en un partido 🏀: <i>¡te-JAAA-do!</i>. La vocal que <b>alargas</b> es la <span class="letra">tónica</span>. Desde ahí hasta el final está la rima.'}},
      {tipo:'leer', fase:0, titulo:'Rima consonante',
       iconos:[{e:'🟰',t:'Consonante'}],
       html:'En la <span class="clave">rima consonante</span> 🟰 coinciden <b>vocales y consonantes</b> desde la última vocal tónica.<div class="poema">La luna mira al tej<mark>ado</mark>,<br>el viento duerme a su l<mark>ado</mark>.</div><b>tejado / lado</b> → <b>ado = ado</b>. Se repiten todos los sonidos: <b>a, d, o</b>.',
       truco:{tipo:'Gemelos idénticos', html:'Rima <span class="letra">CONSONANTE</span> = <b>gemelos idénticos</b> 🟰: desde la vocal fuerte, <b>todo</b> es igual. co<b>lor</b> / ca<b>lor</b>.'}},
      {tipo:'leer', fase:0, titulo:'Rima asonante',
       iconos:[{e:'🔉',t:'Asonante'}],
       html:'En la <span class="clave">rima asonante</span> 🔉 coinciden <b>solo las vocales</b> desde la última vocal tónica.<div class="poema">La luna mira mi c<mark>a</mark>s<mark>a</mark>,<br>el viento mueve una r<mark>a</mark>m<mark>a</mark>.</div><b>casa / rama</b> → <b>a-a = a-a</b>. Coinciden las vocales, pero las consonantes <b>s</b> y <b>m</b> son distintas.',
       truco:{tipo:'Primos que se parecen', html:'Rima <span class="letra">ASONANTE</span> = <b>primos</b> 🔉: solo se parecen en las <b>vocales</b>. ci<b>e</b>l<b>o</b> / secr<b>e</b>t<b>o</b> → e-o.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Desde dónde se mira la rima?', a:'<span class="emo">📣</span>Desde la última vocal tónica'},
         {f:'¿Qué coincide en la rima consonante?', a:'<span class="emo">🟰</span>Vocales y consonantes'},
         {f:'¿Qué coincide en la rima asonante?', a:'<span class="emo">🔉</span>Solo las vocales'},
         {f:'color / calor, ¿qué rima es?', a:'<span class="emo">🟰</span>Consonante: -or = -or'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con la que rima',
       ayuda:'Toca una palabra de la izquierda y después la que rima con ella.',
       pares:[
         {c:'canción',e:'🎵',d:'corazón',p:'Las dos terminan en -ón.'},
         {c:'camino',e:'🛤️',d:'destino',p:'Las dos terminan en -ino.'},
         {c:'tejado',e:'🏠',d:'lado',p:'Las dos terminan en -ado.'},
         {c:'casa',e:'🏡',d:'rama',p:'Vocales a-a.'},
         {c:'cielo',e:'☁️',d:'secreto',p:'Vocales e-o.'}
       ],
       bien:'¡Tienes buen oído para la rima!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Consonante o asonante?',
       ayuda:'Mira las dos palabras desde la vocal fuerte y toca el tipo de rima.',
       grupos:[{id:'c',n:'Consonante',e:'🟰'},{id:'a',n:'Asonante',e:'🔉'}],
       items:[
         {t:'color / calor',e:'🌡️',g:'c',p:'-or y -or: ¿es todo igual?'},
         {t:'casa / rama',e:'🏡',g:'a',p:'-asa y -ama: ¿las consonantes son iguales?'},
         {t:'camino / destino',e:'🛤️',g:'c',p:'-ino y -ino: todo igual.'},
         {t:'cielo / secreto',e:'☁️',g:'a',p:'-elo y -eto: solo coinciden e-o.'},
         {t:'canción / corazón',e:'💓',g:'c',p:'-ón y -ón: todo igual.'},
         {t:'luna / duda',e:'🌙',g:'a',p:'-una y -uda: solo coinciden u-a.'}
       ],
       regla:'Recuerda: todo igual desde la vocal fuerte → consonante 🟰 (gemelos). Solo vocales iguales → asonante 🔉 (primos).',
       bien:'¡Ya distingues los dos tipos de rima!'},
      {tipo:'test', fase:2, pregunta:'¿Qué palabras riman en estos versos?', texto:'La tarde pierde su color,<br>el campo guarda su calor.',
       opciones:[{t:'tarde / campo',ok:false},{t:'color / calor',ok:true},{t:'pierde / guarda',ok:false}],
       pistas:['La rima está siempre al final del verso.','Mira la última palabra de cada línea.'],
       bien:'color / calor riman.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué la rima de «color / calor» es consonante?', texto:'La tarde pierde su color,<br>el campo guarda su calor.',
       opciones:[{t:'Porque coinciden vocales y consonantes: -or',ok:true},{t:'Porque solo coinciden las vocales',ok:false},{t:'Porque las dos palabras son largas',ok:false}],
       pistas:['Desde la o fuerte: co-LOR / ca-LOR.','¿La r también se repite?'],
       bien:'Coinciden la o y la r: rima consonante.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué la rima de «cielo / secreto» es asonante?', texto:'La luna baja del cielo,<br>la noche guarda un secreto.',
       opciones:[{t:'Porque coinciden vocales y consonantes',ok:false},{t:'Porque las dos palabras empiezan igual',ok:false},{t:'Porque solo coinciden las vocales: e-o',ok:true}],
       pistas:['Desde la e fuerte: CIE-lo / se-CRE-to.','La l y la t son distintas. ¿Qué coincide entonces?'],
       bien:'Solo coinciden e-o: rima asonante.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Rima'}
    ]
  });
})();
