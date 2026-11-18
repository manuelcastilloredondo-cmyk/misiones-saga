/* materia-03 · Estados y cambios de estado */
(function () {
  Motor.registrar('materia-03', {
    orbe: 'Orbe de los Estados',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Sólido, líquido y gas',
       iconos:[{e:'🧊',t:'Sólido'},{e:'💧',t:'Líquido'},{e:'💨',t:'Gas'}],
       html:'La materia tiene <span class="clave">tres estados de agregación</span>:<br>🧊 <b>Sólido</b>: volumen y forma <b>fijos</b>. No fluye.<br>💧 <b>Líquido</b>: volumen fijo, pero <b>forma no fija</b>. Fluye.<br>💨 <b>Gas</b>: <b>ni volumen ni forma fijos</b>. Fluye.<br>Los líquidos y los gases pueden <b>fluir</b> (ir por tuberías), por eso se llaman <span class="clave">fluidos</span>.',
       truco:{tipo:'Compáralo con algo que conoces', html:'🧊 <b>Sólido</b> = un balón 🏀: siempre igual.<br>💧 <b>Líquido</b> = el agua de tu botella: coge la forma del vaso.<br>💨 <b>Gas</b> = un olor: se reparte por toda la habitación.'}},
      {tipo:'leer', fase:0, titulo:'Cambios progresivos',
       iconos:[{e:'🔥',t:'Con calor'},{e:'⬆️',t:'Suben de nivel'}],
       html:'Los <span class="clave">cambios progresivos</span> ocurren al <b>calentar</b> 🔥 (absorben calor):<br>🧊→💧 <b>Fusión</b>: de sólido a líquido.<br>💧→💨 <b>Vaporización</b>: de líquido a gas. Si pasa solo en la superficie y a cualquier temperatura, es <b>evaporación</b>; si pasa en todo el líquido, con burbujas, es <b>ebullición</b>.<br>🧊→💨 <b>Sublimación</b>: de sólido a gas, sin pasar por líquido.',
       truco:{tipo:'Subir de nivel', html:'Piensa en niveles de poder ⚡: <span class="letra">sólido = nivel 1</span>, <span class="letra">líquido = nivel 2</span>, <span class="letra">gas = nivel 3</span>.<br><b>PRO</b>gresivo = <b>sube de nivel</b>, y para subir hace falta energía: <b>calor 🔥</b>.'}},
      {tipo:'leer', fase:0, titulo:'Cambios regresivos',
       iconos:[{e:'❄️',t:'Con frío'},{e:'⬇️',t:'Bajan de nivel'}],
       html:'Los <span class="clave">cambios regresivos</span> ocurren al <b>enfriar</b> ❄️ (desprenden calor):<br>💧→🧊 <b>Solidificación</b>: de líquido a sólido.<br>💨→💧 <b>Condensación</b>: de gas a líquido.<br>💨→🧊 <b>Sublimación regresiva</b> (también se llama sublimación inversa o deposición): de gas a sólido, sin pasar por líquido.',
       truco:{tipo:'Bajar de nivel', html:'<b>RE</b>gresivo = <b>regresa</b> hacia abajo, al nivel 1 🧊. Para bajar, la sustancia <b>pierde energía: frío ❄️</b>.<br>Cada cambio progresivo tiene su «pareja» regresiva: fusión ↔ solidificación · vaporización ↔ condensación · sublimación ↔ sublimación regresiva.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué estado no tiene ni forma ni volumen fijos?', a:'<span class="emo">💨</span>El gas'},
         {f:'¿Por qué líquidos y gases se llaman fluidos?', a:'<span class="emo">🌊</span>Porque pueden fluir'},
         {f:'¿Cómo se llama el paso de sólido a líquido?', a:'<span class="emo">🧊→💧</span>Fusión'},
         {f:'¿Cómo se llama el paso de gas a líquido?', a:'<span class="emo">💨→💧</span>Condensación'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada cambio con lo que pasa',
       ayuda:'Toca un cambio de estado y después lo que pasa.',
       pares:[
         {c:'Fusión',e:'🔥',d:'Sólido → líquido',p:'Es lo que le pasa al hielo cuando se derrite.'},
         {c:'Vaporización',e:'🔥',d:'Líquido → gas',p:'Es lo que pasa cuando hierve el agua.'},
         {c:'Sublimación',e:'🔥',d:'Sólido → gas',p:'Se salta el líquido, subiendo.'},
         {c:'Solidificación',e:'❄️',d:'Líquido → sólido',p:'Es lo que pasa en el congelador.'},
         {c:'Condensación',e:'❄️',d:'Gas → líquido',p:'Como las gotas en el espejo del baño.'},
         {c:'Sublimación regresiva',e:'❄️',d:'Gas → sólido',p:'Se salta el líquido, bajando.'}
       ],
       bien:'¡Ya conoces los 6 cambios de estado!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Progresivo o regresivo?',
       ayuda:'Lee lo que pasa y toca si es un cambio progresivo (con calor) o regresivo (con frío).',
       grupos:[{id:'p',n:'Progresivo',e:'🔥'},{id:'r',n:'Regresivo',e:'❄️'}],
       items:[
         {t:'Un cubito de hielo se derrite',e:'🧊',g:'p',p:'De sólido a líquido: ¿sube o baja de nivel?'},
         {t:'El agua se congela en el congelador',e:'🥶',g:'r',p:'De líquido a sólido: ¿sube o baja?'},
         {t:'Un charco se seca al sol',e:'☀️',g:'p',p:'El agua pasa a gas con el calor del sol.'},
         {t:'Salen gotas en el espejo del baño',e:'🪞',g:'r',p:'El vapor se enfría y pasa a líquido.'},
         {t:'El agua hierve en la olla',e:'🍲',g:'p',p:'Con el fuego, el líquido pasa a gas.'},
         {t:'Se forma escarcha en una noche fría',e:'❄️',g:'r',p:'El vapor del aire pasa directo a hielo.'}
       ],
       regla:'Recuerda: 🔥 progresivo = sube de nivel (🧊→💧→💨). ❄️ regresivo = baja de nivel (💨→💧→🧊).',
       bien:'Ya distingues los cambios progresivos y regresivos.'},
      {tipo:'test', fase:2, pregunta:'¿Qué estado tiene volumen fijo pero no forma fija?',
       opciones:[{t:'El sólido',ok:false},{t:'El líquido',ok:true},{t:'El gas',ok:false}],
       pistas:['Coge la forma del vaso.','Piensa en el agua de tu botella 💧.'],
       bien:'El líquido.'},
      {tipo:'test', fase:2, pregunta:'¿Cómo se llama el paso de sólido a gas sin pasar por líquido?',
       opciones:[{t:'Condensación',ok:false},{t:'Fusión',ok:false},{t:'Sublimación',ok:true}],
       pistas:['Es un cambio progresivo que se salta un nivel.','Del nivel 1 al nivel 3 directamente.'],
       bien:'Sublimación.'},
      {tipo:'test', fase:2, pregunta:'Los cambios regresivos ocurren cuando...',
       opciones:[{t:'Enfriamos la sustancia',ok:true},{t:'Calentamos la sustancia',ok:false},{t:'Agitamos la sustancia',ok:false}],
       pistas:['Regresivo = baja de nivel.','Para bajar de nivel se pierde energía.'],
       bien:'Al enfriar ❄️.'},
      {tipo:'fin', fase:3, orbe:'Orbe de los Estados'}
    ]
  });
})();
