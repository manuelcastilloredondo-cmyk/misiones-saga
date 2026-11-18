/* materia-04 · Fusión y ebullición */
(function () {
  Motor.registrar('materia-04', {
    orbe: 'Orbe del Termómetro',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Temperaturas que identifican',
       iconos:[{e:'🌡️',t:'Temperatura'},{e:'🧊',t:'T. de fusión'},{e:'♨️',t:'T. de ebullición'}],
       html:'Cada sustancia tiene su <span class="clave">temperatura de fusión</span> 🧊 (a la que se funde) y su <span class="clave">temperatura de ebullición</span> ♨️ (a la que hierve).<br>Son <b>propiedades características</b>: sirven para <b>identificar</b> sustancias. Ejemplo: el agua funde a 0 °C y hierve a 100 °C.<br>Las dos <b>cambian con la presión</b>. Si la presión baja, la temperatura de ebullición baja.<br>⚠️ Con la fusión, en casi todas las sustancias también baja. <b>Excepción: el agua</b>. En el agua, si la presión baja, la temperatura de fusión <b>sube un poquito</b>.',
       truco:{tipo:'Recuerda la excepción', html:'El <span class="letra">AGUA</span> 💧 es la «rebelde» de la fusión: hace lo <b>contrario</b> que las demás sustancias cuando baja la presión.'}},
      {tipo:'leer', fase:0, titulo:'Mientras cambia, no se calienta',
       iconos:[{e:'📈',t:'Sube'},{e:'➖',t:'Meseta'}],
       html:'Mientras una sustancia <span class="clave">se funde o hierve</span>, su temperatura <b>no cambia</b>, aunque sigas calentando.<br>Ejemplo: calentamos hielo a −20 °C.<br>1️⃣ Sube hasta <b>0 °C</b>.<br>2️⃣ A 0 °C el hielo se funde y la temperatura <b>se queda quieta en 0 °C</b>.<br>3️⃣ Cuando todo es agua, sube hasta <b>100 °C</b>.<br>4️⃣ A 100 °C hierve y la temperatura <b>se queda quieta en 100 °C</b> mientras quede líquido.',
       truco:{tipo:'Escalera con descansillos', html:'Imagina una <b>escalera</b> 📈: subes, <b>descansillo</b> en 0 °C (se funde), subes otra vez y <b>descansillo</b> en 100 °C (hierve). En los descansillos <b>el calor se gasta en cambiar de estado</b>, no en subir.'}},
      {tipo:'leer', fase:0, titulo:'¿En qué estado está?',
       iconos:[{e:'🧊',t:'Sólido'},{e:'💧',t:'Líquido'},{e:'💨',t:'Gas'}],
       html:'Para saber el estado de una sustancia, compara su temperatura con su T. de fusión y su T. de ebullición:<br>🧊 Por <b>debajo</b> de la T. de fusión → <b>sólido</b>.<br>💧 <b>Entre</b> la T. de fusión y la T. de ebullición → <b>líquido</b>.<br>💨 Por <b>encima</b> de la T. de ebullición → <b>gas</b>.<br>Ejemplo a 20 °C: el aluminio (funde a 660 °C) es sólido; el etanol (funde a −114 °C y hierve a 78,5 °C) es líquido; el butano (hierve a −0,5 °C) es gas.',
       truco:{tipo:'Un edificio de 3 pisos', html:'🏢 Piso de abajo: <span class="letra">sólido</span>. Piso del medio: <span class="letra">líquido</span>. Piso de arriba: <span class="letra">gas</span>.<br>Los suelos entre pisos son la <b>T. de fusión</b> y la <b>T. de ebullición</b>.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿A qué temperatura funde y hierve el agua?', a:'<span class="emo">💧</span>Funde a 0 °C y hierve a 100 °C'},
         {f:'¿Qué le pasa a la temperatura mientras algo hierve?', a:'<span class="emo">➖</span>No cambia, se queda quieta'},
         {f:'Si una sustancia está entre su T. de fusión y su T. de ebullición, ¿cómo está?', a:'<span class="emo">💧</span>Líquida'},
         {f:'¿Qué sustancia es la excepción en la fusión?', a:'<span class="emo">⚠️</span>El agua'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'A 20 °C, ¿sólido, líquido o gas?',
       ayuda:'Mira sus temperaturas y piensa en qué piso está 20 °C.',
       grupos:[{id:'s',n:'Sólido',e:'🧊'},{id:'l',n:'Líquido',e:'💧'},{id:'g',n:'Gas',e:'💨'}],
       items:[
         {t:'Agua · funde a 0 °C, hierve a 100 °C',e:'💧',g:'l',p:'¿20 está entre 0 y 100?'},
         {t:'Hierro · funde a 1540 °C',e:'🔩',g:'s',p:'20 °C está muy por debajo de 1540 °C.'},
         {t:'Butano · hierve a −0,5 °C',e:'🔥',g:'g',p:'20 °C está por encima de su T. de ebullición.'},
         {t:'Mercurio · funde a −39 °C, hierve a 357 °C',e:'🌡️',g:'l',p:'¿20 está entre −39 y 357?'},
         {t:'Nitrógeno · hierve a −196 °C',e:'🎈',g:'g',p:'20 °C está muy por encima de −196 °C.'},
         {t:'Plomo · funde a 328 °C',e:'⚓',g:'s',p:'20 °C está por debajo de 328 °C.'}
       ],
       regla:'Recuerda el edificio: por debajo de la T. de fusión → sólido · entre las dos → líquido · por encima de la T. de ebullición → gas.',
       bien:'¡Sabes leer las temperaturas!'},
      {tipo:'ordenar', fase:1, pregunta:'Calentamos hielo desde −20 °C',
       ayuda:'Toca lo que pasa, en orden.',
       orden:['El hielo se calienta de −20 °C a 0 °C','A 0 °C el hielo se funde y la temperatura no cambia','El agua líquida se calienta de 0 °C a 100 °C','A 100 °C el agua hierve y la temperatura no cambia','Todo es vapor y sigue calentándose'],
       pistas:['Primero el hielo tiene que llegar a 0 °C.','Ahora el primer descansillo: la fusión.','Después sube el agua líquida.','Ahora el segundo descansillo: la ebullición.','Al final ya solo queda gas.'],
       bien:'Escalera completa: dos subidas y dos descansillos.'},
      {tipo:'test', fase:2, pregunta:'¿Qué le pasa a la temperatura mientras el hielo se funde?',
       opciones:[{t:'Sube muy rápido',ok:false},{t:'Se queda en 0 °C',ok:true},{t:'Baja a −20 °C',ok:false}],
       pistas:['Piensa en la escalera con descansillos.','El primer descansillo está en 0 °C.'],
       bien:'Se queda en 0 °C hasta que todo el hielo se funde.'},
      {tipo:'test', fase:2, pregunta:'El etanol funde a −114 °C y hierve a 78,5 °C. A 20 °C es...',
       opciones:[{t:'Sólido',ok:false},{t:'Gas',ok:false},{t:'Líquido',ok:true}],
       pistas:['¿20 está entre −114 y 78,5?','Si está entre las dos temperaturas, está en el piso del medio.'],
       bien:'Líquido, porque 20 °C está entre las dos.'},
      {tipo:'test', fase:2, pregunta:'En casi todas las sustancias, si baja la presión, la temperatura de fusión baja. ¿Cuál es la excepción?',
       opciones:[{t:'El agua',ok:true},{t:'El hierro',ok:false},{t:'El butano',ok:false}],
       pistas:['Es la «rebelde» de la fusión.','Es la sustancia que funde a 0 °C 💧.'],
       bien:'El agua: en ella la temperatura de fusión sube un poquito.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Termómetro'}
    ]
  });
})();
