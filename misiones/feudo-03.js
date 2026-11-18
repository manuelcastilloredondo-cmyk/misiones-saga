/* feudo-03 · La sociedad estamental */
(function () {
  const IMG = Motor.img;
  Motor.registrar('feudo-03', {
    orbe: 'Orbe de los Estamentos',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Una sociedad por pisos',
       iconos:[{e:'🧱',t:'Estamentos'},{e:'🔒',t:'Cerrada'}],
       img:IMG('Cleric-Knight-Workman.jpg'),
       pie:'Un clérigo, un caballero y un campesino: los tres grupos de la Edad Media. Manuscrito francés, siglo XIII. Dominio público (Wikimedia Commons).',
       html:'La sociedad medieval era <span class="clave">jerarquizada</span>: unos grupos estaban por encima de otros, como los pisos de un edificio.<br>También era <span class="clave">cerrada</span>: cada grupo, llamado <b>estamento</b> 🧱, no se podía mezclar con los demás.<br>Por eso se llama <span class="clave">sociedad estamental</span>.',
       truco:{tipo:'Palabras que se parecen', html:'<span class="letra">ESTAMENTO</span> suena a <span class="letra">ESTANCADO</span>: estás en tu grupo y te quedas ahí. 🔒'}},
      {tipo:'leer', fase:0, titulo:'Los privilegiados',
       iconos:[{e:'🏇',t:'Nobleza'},{e:'⛪',t:'Clero'},{e:'⭐',t:'Privilegio'}],
       html:'Dos estamentos tenían <span class="clave">privilegios</span> ⭐: <b>no pagaban impuestos</b>.<br>🏇 La <b>nobleza</b> podía llevar armas e impartir justicia. Se dedicaba a la <b>guerra</b>; en tiempos de paz, a la caza y a los torneos.<br>⛪ El <b>clero</b> se dedicaba a <b>rezar</b>. También trabajaba en los monasterios y <b>guardaba la cultura</b> (los libros).',
       truco:{tipo:'Compáralo con algo que conoces', html:'Un <b>privilegio</b> ⭐ es como un pase VIP 🎟️ en un partido de baloncesto: entras gratis. Nobleza y clero tenían pase VIP: <b>no pagaban impuestos</b>.'}},
      {tipo:'leer', fase:0, titulo:'Los no privilegiados',
       iconos:[{e:'👨‍🌾',t:'Campesinos'},{e:'💰',t:'Impuestos'}],
       html:'Los <b>campesinos</b> 👨‍🌾 eran el estamento <span class="clave">sin privilegios</span>: <b>pagaban impuestos</b> 💰.<br>Trabajaban la tierra y, con su trabajo, <span class="clave">sostenían</span> a los otros dos estamentos.',
       truco:{tipo:'Las tres palabras clave', html:'Cada estamento tenía su verbo:<br>🏇 Nobleza → <span class="letra">LUCHAN</span><br>⛪ Clero → <span class="letra">REZAN</span><br>👨‍🌾 Campesinos → <span class="letra">TRABAJAN</span><br>Los que trabajan están abajo y sostienen a los que luchan y rezan.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué es un estamento?', a:'<span class="emo">🧱</span>Un grupo social cerrado que no se podía mezclar'},
         {f:'¿Qué dos estamentos eran privilegiados?', a:'<span class="emo">🏇 ⛪</span>La nobleza y el clero'},
         {f:'¿Cuál era el privilegio principal?', a:'<span class="emo">⭐</span>No pagar impuestos'},
         {f:'¿Quién sostenía a los demás con su trabajo?', a:'<span class="emo">👨‍🌾</span>Los campesinos'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
       ayuda:'Toca una palabra de la izquierda y después su significado de la derecha.',
       pares:[
         {c:'Nobleza',e:'🏇',d:'Los que luchan',p:'Piensa en las armas, la guerra y los torneos.'},
         {c:'Clero',e:'⛪',d:'Los que rezan',p:'Piensa en la iglesia y los monasterios.'},
         {c:'Campesinos',e:'👨‍🌾',d:'Los que trabajan la tierra',p:'Piensa en el campo.'},
         {c:'Privilegio',e:'⭐',d:'No pagar impuestos',p:'Es el pase VIP de la nobleza y el clero.'},
         {c:'Estamento',e:'🧱',d:'Grupo social cerrado',p:'Suena a «estancado»: no te puedes cambiar.'}
       ],
       bien:'Has unido todas las parejas.'},
      {tipo:'clasificar', fase:1, pregunta:'¿Quién lo hace?',
       ayuda:'Lee la acción y toca el estamento que la hace.',
       grupos:[{id:'n',n:'Nobleza',e:'🏇'},{id:'c',n:'Clero',e:'⛪'},{id:'p',n:'Campesinos',e:'👨‍🌾'}],
       items:[
         {t:'Va a la guerra',e:'🗡️',g:'n',p:'¿Quiénes son «los que luchan»?'},
         {t:'Reza y bendice',e:'🙏',g:'c',p:'¿Quiénes son «los que rezan»?'},
         {t:'Trabaja la tierra',e:'🌱',g:'p',p:'¿Quiénes son «los que trabajan»?'},
         {t:'Paga impuestos',e:'💰',g:'p',p:'Nobleza y clero tenían pase VIP: no pagaban.'},
         {t:'Copia y guarda libros',e:'📜',g:'c',p:'Pasaba en los monasterios.'},
         {t:'Caza y hace torneos',e:'🏹',g:'n',p:'Es lo que hacían los guerreros en tiempos de paz.'}
       ],
       regla:'Recuerda los tres verbos: 🏇 nobleza → LUCHAN · ⛪ clero → REZAN · 👨‍🌾 campesinos → TRABAJAN.',
       bien:'Ya sabes qué hacía cada estamento.'},
      {tipo:'test', fase:2, pregunta:'¿Qué estamentos eran privilegiados?',
       opciones:[{t:'El clero y los campesinos',ok:false},{t:'La nobleza y el clero',ok:true},{t:'Solo los campesinos',ok:false}],
       pistas:['Los privilegiados no pagaban impuestos. ¿Quién sí pagaba?','Los campesinos pagaban. Entonces, los otros dos eran los privilegiados.'],
       bien:'La nobleza y el clero tenían privilegios.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué decimos que la sociedad estamental era «cerrada»?',
       opciones:[{t:'Porque las ciudades tenían murallas',ok:false},{t:'Porque nadie podía viajar',ok:false},{t:'Porque los estamentos no se podían mezclar',ok:true}],
       pistas:['«Cerrada» habla de los grupos de personas, no de los edificios.','Recuerda el truco: estamento suena a «estancado».'],
       bien:'Cada estamento era un grupo cerrado.'},
      {tipo:'test', fase:2, pregunta:'¿Quién sostenía con su trabajo a los demás estamentos?',
       opciones:[{t:'Los campesinos',ok:true},{t:'El clero',ok:false},{t:'La nobleza',ok:false}],
       pistas:['Busca a «los que trabajan».','Son los que trabajaban la tierra y pagaban impuestos.'],
       bien:'Los campesinos sostenían a la nobleza y al clero.'},
      {tipo:'fin', fase:3, orbe:'Orbe de los Estamentos'}
    ]
  });
})();
