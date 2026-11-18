/* feudo-07 · El feudo por dentro */
(function () {
  Motor.registrar('feudo-07', {
    orbe: 'Orbe del Feudo',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'El señor del feudo',
       iconos:[{e:'🏰',t:'Feudo'},{e:'👑',t:'Señor'},{e:'⚖️',t:'Juez'}],
       html:'El <span class="clave">feudo</span> 🏰 era el lote de tierras que el señor daba a su vasallo.<br>El noble que lo recibía pasaba a ser el <b>señor de ese territorio</b>. Todas las personas que vivían allí dependían de él:<br>⚖️ Era su <b>juez</b>.<br>🌾 Cobraba sus <b>impuestos</b>, casi siempre en productos del campo.<br>☂️ A cambio, debía <b>defenderlos y darles refugio</b> si había un ataque.',
       truco:{tipo:'Un trato con dos partes', html:'Los campesinos <b>dan</b>: impuestos 🌾.<br>El señor <b>da</b>: protección 🏰.<br>Como en un equipo 🏀: tú entrenas y el club te da la cancha.'}},
      {tipo:'leer', fase:0, titulo:'Las dos partes del feudo',
       iconos:[{e:'👑',t:'Reserva señorial'},{e:'🏡',t:'Mansos'}],
       html:'El feudo tenía <span class="clave">dos partes principales</span>:<br>👑 <b>Reserva señorial</b>: las tierras del señor. Los campesinos las trabajaban <b>gratis</b> y <b>todo</b> lo que se cosechaba era para el señor.<br>🏡 <b>Mansos</b>: tierras que el señor dejaba a los campesinos para sacar <b>su comida</b>. De lo que cosechaban, tenían que darle un <b>impuesto</b> al señor.',
       truco:{tipo:'Palabras que se parecen', html:'<span class="letra">RESERVA</span> = <b>reservada para el señor</b> 👑. Todo para él.<br><span class="letra">MANSO</span> suena a <span class="letra">MANO</span>: la tierra que el señor deja <b>en mano</b> del campesino 🏡.'}},
      {tipo:'leer', fase:0, titulo:'Pagar por usar y el barbecho',
       iconos:[{e:'⚙️',t:'Molino'},{e:'🌉',t:'Puente'},{e:'🌲',t:'Bosque'},{e:'💤',t:'Barbecho'}],
       html:'En el feudo también había <b>prados, bosques, molinos y puentes</b>. Para usarlos, los campesinos tenían que <span class="clave">pagar un impuesto</span>.<br>Se cosechaba <b>poco</b>, porque las técnicas eran muy simples.<br>Se usaba el <span class="clave">barbecho</span> 💤: cuando una tierra se agotaba, se dejaba <b>sin cultivar</b> durante un tiempo para que se recuperara.',
       truco:{tipo:'Compáralo con algo que conoces', html:'El <span class="letra">BARBECHO</span> 💤 es como un jugador cansado que se sienta en el <b>banquillo</b> 🏀 para recuperar fuerzas y luego vuelve a jugar.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué hacía el señor a cambio de los impuestos?', a:'<span class="emo">☂️</span>Defender a los campesinos y darles refugio'},
         {f:'¿Qué es la reserva señorial?', a:'<span class="emo">👑</span>Las tierras del señor, trabajadas gratis'},
         {f:'¿Qué son los mansos?', a:'<span class="emo">🏡</span>Tierras para la comida del campesino, que paga un impuesto'},
         {f:'¿Qué es el barbecho?', a:'<span class="emo">💤</span>Dejar la tierra sin cultivar para que descanse'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Reserva señorial o manso?',
       ayuda:'Lee la frase y toca de qué parte del feudo habla.',
       grupos:[{id:'r',n:'Reserva',e:'👑'},{id:'m',n:'Manso',e:'🏡'}],
       items:[
         {t:'Todo lo que se cosecha es para el señor',e:'🧺',g:'r',p:'Reserva = reservada para el señor.'},
         {t:'El campesino saca de ahí su comida',e:'🥣',g:'m',p:'Es la tierra que queda en mano del campesino.'},
         {t:'El campesino la trabaja gratis',e:'🆓',g:'r',p:'Trabajar gratis para el señor... ¿en qué tierras?'},
         {t:'El campesino paga un impuesto de lo que cosecha',e:'🌾',g:'m',p:'Se quedaba la cosecha, pero daba una parte al señor.'},
         {t:'Son las tierras del propio señor',e:'🏰',g:'r',p:'Las tierras del señor son su reserva.'},
         {t:'Tierras que el señor deja a los campesinos',e:'🤲',g:'m',p:'Manso suena a mano.'}
       ],
       regla:'Recuerda: RESERVA 👑 = todo para el señor y trabajo gratis. MANSO 🏡 = comida para el campesino, que paga un impuesto.',
       bien:'Ya conoces las dos partes del feudo.'},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
       ayuda:'Toca una palabra de la izquierda y después su significado de la derecha.',
       pares:[
         {c:'Feudo',e:'🏰',d:'Lote de tierras que el señor da a su vasallo',p:'Es el beneficio de la investidura.'},
         {c:'Reserva señorial',e:'👑',d:'Tierras del señor trabajadas gratis',p:'Reservada para el señor.'},
         {c:'Manso',e:'🏡',d:'Tierra para la comida del campesino',p:'Suena a mano.'},
         {c:'Barbecho',e:'💤',d:'Dejar la tierra sin cultivar para que descanse',p:'Es el banquillo de la tierra.'},
         {c:'Molino',e:'⚙️',d:'Para usarlo había que pagar un impuesto',p:'Lo mismo pasaba con puentes y bosques.'}
       ],
       bien:'Has unido todas las parejas.'},
      {tipo:'test', fase:2, pregunta:'¿Qué tenía que hacer el señor a cambio de los impuestos?',
       opciones:[{t:'Darles tierras propias a todos',ok:false},{t:'Defenderlos y darles refugio si había un ataque',ok:true},{t:'Enseñarles a leer',ok:false}],
       pistas:['Es un trato con dos partes: los campesinos dan impuestos y el señor da...','Piensa en el castillo 🏰: protección.'],
       bien:'El señor los protegía.'},
      {tipo:'test', fase:2, pregunta:'¿Qué era el barbecho?',
       opciones:[{t:'Un impuesto por usar el molino',ok:false},{t:'La comida de los campesinos',ok:false},{t:'Dejar la tierra sin cultivar para que se recupere',ok:true}],
       pistas:['Piensa en el banquillo 💤.','La tierra se cansaba. ¿Qué hacían para que recuperara fuerzas?'],
       bien:'El barbecho deja descansar la tierra.'},
      {tipo:'test', fase:2, pregunta:'¿Qué pasaba si un campesino usaba el molino del señor?',
       opciones:[{t:'Tenía que pagar un impuesto',ok:true},{t:'Lo usaba gratis',ok:false},{t:'Se convertía en siervo',ok:false}],
       pistas:['En el feudo, casi todo se pagaba.','Prados, bosques, molinos y puentes: para usarlos había que...'],
       bien:'Por usar el molino se pagaba un impuesto.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Feudo'}
    ]
  });
})();
