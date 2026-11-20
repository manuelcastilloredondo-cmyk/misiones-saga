/* verso-03 · Medir los versos */
(function () {
  Motor.registrar('verso-03', {
    orbe: 'Orbe de la Medida',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Separar en sílabas',
       iconos:[{e:'👏',t:'Sílabas'},{e:'0️⃣',t:'Llana'}],
       html:'Para <span class="clave">medir un verso</span> contamos sus <b>sílabas métricas</b>. El primer paso es <b>separar las sílabas</b>.<div class="silabas"><span>La</span><span>lu</span><span>na</span><span>bri</span><span>lla</span></div><i>«La luna brilla»</i> tiene <b>5 sílabas</b>. La última palabra, <b>brilla</b>, es <b>llana</b> 0️⃣: el número <b>no cambia</b>. Total: <b>5 sílabas métricas</b>.',
       truco:{tipo:'Palmadas', html:'Di el verso en voz alta y da una <span class="letra">palmada 👏</span> por cada sílaba. Como un ritmo en la batería 🥁: un golpe por sílaba.'}},
      {tipo:'leer', fase:0, titulo:'La sinalefa',
       iconos:[{e:'🔗',t:'Sinalefa'}],
       html:'Cuando una palabra <b>termina en vocal</b> y la siguiente <b>empieza por vocal</b>, se pueden contar <b>juntas</b> como una sola sílaba. Eso es la <span class="clave">sinalefa</span> 🔗.<div class="silabas"><span>La</span><span>lu</span><span class="u">na_i</span><span>lu</span><span>mi</span><span>na</span></div><i>«La luna ilumina»</i>: unimos <b>a + i</b>. Final llana: <b>6 sílabas métricas</b>.',
       truco:{tipo:'Un solo golpe', html:'Vocal al <b>final</b> + vocal al <b>principio</b> = <span class="letra">una sola palmada</span> 👏🔗.'}},
      {tipo:'leer', fase:0, titulo:'La última palabra',
       iconos:[{e:'➕',t:'Aguda +1'},{e:'0️⃣',t:'Llana 0'},{e:'➖',t:'Esdrújula −1'}],
       html:'Al final, mira la <b>última palabra</b> del verso:<br>➕ <b>Aguda</b> (fuerza al final: can-<b>CIÓN</b>) → <b>suma 1</b>. <i>«Suena mi canción»</i>: 5 + 1 = <b>6</b>.<br>0️⃣ <b>Llana</b> (fuerza en la penúltima: <b>BRI</b>-lla) → <b>no cambia</b>.<br>➖ <b>Esdrújula</b> (fuerza en la antepenúltima: <b>MÚ</b>-si-ca) → <b>resta 1</b>. <i>«Suena la música»</i>: 6 − 1 = <b>5</b>.<br>Hasta 8 sílabas: <span class="clave">arte menor</span> 🤏. De 9 o más: <span class="clave">arte mayor</span> 🙌.',
       truco:{tipo:'Más, igual, menos', html:'<span class="letra">AGUDA → +1</span> · <span class="letra">LLANA → 0</span> · <span class="letra">ESDRÚJULA → −1</span>.<br>Arte <b>menor</b> 🤏 = como mucho 8, los dedos de las manos sin los pulgares.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué es la sinalefa?', a:'<span class="emo">🔗</span>Contar juntas la vocal final y la vocal inicial'},
         {f:'Si el verso acaba en palabra aguda...', a:'<span class="emo">➕</span>Se suma 1'},
         {f:'Si el verso acaba en palabra esdrújula...', a:'<span class="emo">➖</span>Se resta 1'},
         {f:'«La nube avanza», ¿cuántas sílabas métricas?', a:'<span class="emo">🔗</span>5: La-nu-be_a-van-za'}
       ]},
      {tipo:'ordenar', fase:1, pregunta:'Los pasos para medir un verso',
       ayuda:'Toca los pasos en orden.',
       orden:['Separo las sílabas','Uno las sinalefas','Miro la última palabra','Sumo 1, resto 1 o lo dejo igual','Escribo el total de sílabas métricas'],
       pistas:['Lo primero: las palmadas.','Ahora busca vocal final + vocal inicial.','Después, fíjate en el final del verso.','Aguda, llana o esdrújula: ¿qué hago con el número?','Al final, el resultado.'],
       bien:'¡Ya sabes medir versos!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Qué hago con esta palabra final?',
       ayuda:'Mira dónde está la fuerza de la palabra y toca qué le pasa al número.',
       grupos:[{id:'a',n:'Aguda +1',e:'➕'},{id:'l',n:'Llana 0',e:'0️⃣'},{id:'e',n:'Esdrújula −1',e:'➖'}],
       items:[
         {t:'can-CIÓN',e:'🎵',g:'a',p:'La fuerza está en la última sílaba.'},
         {t:'BRI-lla',e:'✨',g:'l',p:'La fuerza está en la penúltima sílaba.'},
         {t:'MÚ-si-ca',e:'🥁',g:'e',p:'La fuerza está en la antepenúltima sílaba.'},
         {t:'co-ra-ZÓN',e:'💓',g:'a',p:'La fuerza está al final.'},
         {t:'CAN-ta',e:'🎤',g:'l',p:'La fuerza está en la penúltima.'},
         {t:'SÁ-ba-do',e:'📅',g:'e',p:'Tres sílabas y la fuerza en la primera.'}
       ],
       regla:'Recuerda: fuerza al final → aguda ➕1 · en la penúltima → llana 0️⃣ · en la antepenúltima → esdrújula ➖1.',
       bien:'¡Dominas las palabras finales!'},
      {tipo:'test', fase:2, pregunta:'¿Cuántas sílabas métricas tiene este verso?', texto:'La noche canta.',
       opciones:[{t:'4',ok:false},{t:'5',ok:true},{t:'6',ok:false}],
       pistas:['Separa: La-no-che-can-ta.','«canta» es llana: el número no cambia.'],
       bien:'La-no-che-can-ta: 5 sílabas métricas.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántas sílabas métricas tiene este verso?', texto:'Late mi corazón.',
       opciones:[{t:'6',ok:false},{t:'5',ok:false},{t:'7',ok:true}],
       pistas:['Separa: La-te-mi-co-ra-zón. Son 6.','«corazón» es aguda: suma 1.'],
       bien:'6 + 1 = 7 sílabas métricas.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántas sílabas métricas tiene este verso?', texto:'Suena mi música.',
       opciones:[{t:'5',ok:true},{t:'6',ok:false},{t:'7',ok:false}],
       pistas:['Separa: Sue-na-mi-mú-si-ca. Son 6.','«música» es esdrújula: resta 1.'],
       bien:'6 − 1 = 5 sílabas métricas.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Medida'}
    ]
  });
})();
