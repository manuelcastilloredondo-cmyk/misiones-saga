/* feudo-08 · Las cruzadas */
(function () {
  Motor.registrar('feudo-08', {
    orbe: 'Orbe de la Cruzada',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'¿Qué fueron las cruzadas?',
       iconos:[{e:'✝️',t:'Cruzadas'},{e:'📍',t:'Tierra Santa'},{e:'📅',t:'1095–1291'}],
       html:'Las <span class="clave">cruzadas</span> ✝️ fueron <b>expediciones militares</b>. Las impulsaban los <b>Papas</b> y las hacían los <b>caballeros</b> de la Europa cristiana.<br>Hubo <b>8 cruzadas</b>; las 4 primeras fueron las más importantes. Fueron entre <b>1095 y 1291</b>.<br>Su objetivo principal era <span class="clave">liberar Tierra Santa</span> 📍 de la ocupación musulmana. También lucharon contra judíos, cristianos ortodoxos, mongoles o cátaros.',
       truco:{tipo:'Partir la palabra', html:'<span class="letra">CRUZ</span>ada viene de <span class="letra">CRUZ</span> ✝️: los caballeros llevaban una <b>cruz de tela</b> cosida en la ropa.<br>Fechas: de <b>1095</b> a <b>1291</b> → casi <b>200 años</b>.'}},
      {tipo:'leer', fase:0, titulo:'Los motivos',
       iconos:[{e:'🙏',t:'Religiosos'},{e:'🚢',t:'Económicos'}],
       html:'Hubo <span class="clave">dos tipos de motivos</span>:<br>🙏 <b>Religiosos</b>: frenar la expansión del Islam y recuperar los <b>Santos Lugares</b>, que estaban en manos de los turcos porque el Imperio Bizantino se había debilitado.<br>🚢 <b>Económicos</b>: controlar las <b>rutas comerciales</b> con Oriente y abrir el comercio en el Mediterráneo. Además, los caballeros podían conseguir <b>riquezas y tierras</b>.',
       truco:{tipo:'Dos palabras clave', html:'🙏 <span class="letra">REZAR</span> → motivos religiosos.<br>🚢 <span class="letra">GANAR</span> → motivos económicos (comercio, riquezas y tierras).'}},
      {tipo:'leer', fase:0, titulo:'Las consecuencias',
       iconos:[{e:'🗺️',t:'Conquista'},{e:'🗡️',t:'Órdenes militares'},{e:'🚢',t:'Comercio'}],
       html:'Las cruzadas tuvieron <span class="clave">tres consecuencias</span>:<br>🗺️ La <b>conquista de Jerusalén</b> y la creación de los <b>reinos latinos</b> en Palestina, que fueron europeos hasta finales del siglo XIII.<br>🗡️ Las <b>órdenes militares</b>: monjes-soldados que defendían los Santos Lugares y a los peregrinos. Las más conocidas: los <b>Hospitalarios</b> y el <b>Temple</b>.<br>🚢 <b>Más comercio</b> en el Mediterráneo, gracias a ciudades italianas y a la Corona de Aragón.',
       truco:{tipo:'Las 3 C de las consecuencias', html:'🗺️ <span class="letra">C</span>onquista de Jerusalén<br>🗡️ <span class="letra">C</span>aballeros-monjes (órdenes militares)<br>🚢 <span class="letra">C</span>omercio en el Mediterráneo'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿De dónde viene el nombre «cruzadas»?', a:'<span class="emo">✝️</span>De la cruz de tela que llevaban en la ropa'},
         {f:'¿Cuál era el objetivo principal?', a:'<span class="emo">📍</span>Liberar Tierra Santa de la ocupación musulmana'},
         {f:'¿Cuáles son los dos tipos de motivos?', a:'<span class="emo">🙏 🚢</span>Religiosos y económicos'},
         {f:'¿Cuáles son las 3 C de las consecuencias?', a:'<span class="emo">🗺️ 🗡️ 🚢</span>Conquista, caballeros-monjes y comercio'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Motivo religioso o económico?',
       ayuda:'Lee el motivo y toca de qué tipo es.',
       grupos:[{id:'r',n:'Religioso',e:'🙏'},{id:'e',n:'Económico',e:'🚢'}],
       items:[
         {t:'Recuperar los Santos Lugares',e:'📍',g:'r',p:'Los Santos Lugares son importantes para la religión.'},
         {t:'Controlar las rutas comerciales con Oriente',e:'🧭',g:'e',p:'Comercio = ganar.'},
         {t:'Frenar la expansión del Islam',e:'🛑',g:'r',p:'Tiene que ver con las religiones.'},
         {t:'Conseguir riquezas y tierras',e:'💎',g:'e',p:'Riquezas = ganar.'},
         {t:'Abrir el comercio en el Mediterráneo',e:'⚓',g:'e',p:'Comercio = ganar.'},
         {t:'Liberar Tierra Santa',e:'✝️',g:'r',p:'Era el objetivo principal, y era religioso.'}
       ],
       regla:'Recuerda: 🙏 REZAR → religiosos (Santos Lugares, Islam, Tierra Santa). 🚢 GANAR → económicos (comercio, riquezas, tierras).',
       bien:'Ya distingues los dos tipos de motivos.'},
      {tipo:'multi', fase:1, pregunta:'¿Qué consecuencias tuvieron las cruzadas?',
       ayuda:'Elige las 3 consecuencias verdaderas y pulsa «Comprobar».',
       opciones:[
         {t:'La conquista de Jerusalén y los reinos latinos',ok:true},
         {t:'Desaparecieron todos los castillos',ok:false},
         {t:'Se crearon órdenes militares, como el Temple',ok:true},
         {t:'Se acabó la nobleza',ok:false},
         {t:'Aumentó el comercio en el Mediterráneo',ok:true}
       ],
       pistaMal:'Los castillos y la nobleza siguieron existiendo.',
       pistaTruco:'Recuerda las 3 C: Conquista, Caballeros-monjes y Comercio.',
       pistaGuia:'es una de las 3 C',
       bien:'Conquista, caballeros-monjes y comercio.'},
      {tipo:'test', fase:2, pregunta:'¿Quién impulsaba las cruzadas?',
       opciones:[{t:'Los campesinos',ok:false},{t:'Los Papas',ok:true},{t:'Los comerciantes italianos',ok:false}],
       pistas:['Era alguien muy importante de la Iglesia.','Las impulsaban los Papas y las hacían los caballeros.'],
       bien:'Las impulsaban los Papas.'},
      {tipo:'test', fase:2, pregunta:'¿Cuál era el objetivo principal de las cruzadas?',
       opciones:[{t:'Liberar Tierra Santa de la ocupación musulmana',ok:true},{t:'Construir monasterios en Europa',ok:false},{t:'Conquistar América',ok:false}],
       pistas:['Es un lugar muy importante 📍.','Mira la primera ficha: «Tierra...».'],
       bien:'Liberar Tierra Santa.'},
      {tipo:'test', fase:2, pregunta:'¿Qué eran las órdenes militares?',
       opciones:[{t:'Grupos de campesinos que pagaban impuestos',ok:false},{t:'Reglas de los monasterios',ok:false},{t:'Monjes-soldados que defendían los Santos Lugares y a los peregrinos',ok:true}],
       pistas:['Es la segunda C: caballeros-monjes 🗡️.','Eran a la vez religiosos y guerreros.'],
       bien:'Eran monjes-soldados, como los Hospitalarios y el Temple.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Cruzada'}
    ]
  });
})();
