/* feudo-09 · Jefe final del Feudo (repaso de toda la saga) */
(function () {
  Motor.registrar('feudo-09', {
    orbe: 'Gran Orbe del Feudo',
    meta: 230,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Plan de combate',
       iconos:[{e:'🏰',t:'Feudo'},{e:'👑',t:'Señor'},{e:'🛡️',t:'Vasallo'},{e:'🧱',t:'Estamentos'},{e:'✝️',t:'Cruzadas'}],
       html:'Este es el <span class="clave">jefe final</span>: un repaso de <b>toda la Saga del Feudo</b>.<br>Vas a ver un poco de cada misión: el origen, señores y vasallos, los estamentos, nobles, clero, campesinos, el feudo y las cruzadas.<br>Tranquilo: <b>no hay tiempo límite</b> y las pistas siguen funcionando.',
       truco:{tipo:'Antes de empezar', html:'Si dudas, piensa en los <b>emojis</b>: cada palabra tiene el suyo. 👑 señor · 🛡️ vasallo · 🏇 nobleza · ⛪ clero · 👨‍🌾 campesinos · 🏰 feudo.'}},
      {tipo:'flash', fase:0, titulo:'Calentamiento',
       ayuda:'Responde <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 6.',
       cartas:[
         {f:'¿En qué siglos hubo feudalismo?', a:'<span class="emo">📅</span>Del X al XII (del 10 al 12)'},
         {f:'¿Qué dos partes tiene la ceremonia de vasallaje?', a:'<span class="emo">🙇 🎁</span>Homenaje e investidura'},
         {f:'¿Qué tres estamentos había?', a:'<span class="emo">🏇 ⛪ 👨‍🌾</span>Nobleza, clero y campesinos'},
         {f:'¿Qué era el diezmo?', a:'<span class="emo">🔟</span>El impuesto que los campesinos pagaban a la Iglesia'},
         {f:'¿Qué diferencia a un siervo de un libre?', a:'<span class="emo">⛓️ 🕊️</span>El siervo no podía abandonar el feudo'},
         {f:'¿Cuál fue el objetivo principal de las cruzadas?', a:'<span class="emo">📍</span>Liberar Tierra Santa'}
       ]},
      {tipo:'ordenar', fase:1, pregunta:'La gran cadena del feudalismo',
       ayuda:'Toca las frases en orden, de lo que pasó primero a lo último.',
       orden:['Se divide el Imperio Carolingio','Llegan las invasiones y hay inseguridad','La gente se refugia en el campo','El vasallo hace el homenaje','El señor le da un feudo en la investidura'],
       pistas:['Todo empezó cuando un gran imperio se partió.','Con el imperio débil llegaron los enemigos.','¿Adónde fue la gente a protegerse?','Primero jura el vasallo: H de homenaje.','Después da el señor: I de investidura.'],
       bien:'Del imperio roto al feudo.'},
      {tipo:'clasificar', fase:1, pregunta:'¿De qué estamento es?',
       ayuda:'Lee y toca el estamento correcto.',
       grupos:[{id:'n',n:'Nobleza',e:'🏇'},{id:'c',n:'Clero',e:'⛪'},{id:'p',n:'Campesinos',e:'👨‍🌾'}],
       items:[
         {t:'Paje, escudero y caballero',e:'🐴',g:'n',p:'Son las etapas de los que luchan.'},
         {t:'Monjes que copian libros',e:'📖',g:'c',p:'Los que rezan y viven en monasterios.'},
         {t:'Siervos que no pueden irse del feudo',e:'⛓️',g:'p',p:'Los que trabajan la tierra.'},
         {t:'Damas que aportan una dote',e:'🪙',g:'n',p:'Piensa en las 3 C de las damas.'},
         {t:'Pagan el diezmo',e:'🔟',g:'p',p:'Lo pagaban a la Iglesia los que trabajaban la tierra.'},
         {t:'Abades y obispos',e:'⬆️',g:'c',p:'Es el alto clero.'}
       ],
       regla:'Recuerda los tres verbos: 🏇 nobleza → LUCHAN · ⛪ clero → REZAN · 👨‍🌾 campesinos → TRABAJAN.',
       bien:'¡Dominas los estamentos!'},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
       ayuda:'Toca una palabra de la izquierda y después su significado.',
       pares:[
         {c:'Vasallo',e:'🛡️',d:'Noble con menos poder que ayuda y aconseja',p:'Es el jugador del equipo.'},
         {c:'Privilegio',e:'⭐',d:'No pagar impuestos',p:'Es el pase VIP.'},
         {c:'Clero regular',e:'📏',d:'Monjes que viven en un monasterio siguiendo una regla',p:'Regular viene de regla.'},
         {c:'Manso',e:'🏡',d:'Tierra para la comida del campesino',p:'Suena a mano.'},
         {c:'Barbecho',e:'💤',d:'Dejar la tierra sin cultivar para que descanse',p:'El banquillo de la tierra.'}
       ],
       bien:'Has unido todas las parejas.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué apareció el feudalismo?',
       opciones:[{t:'Porque había mucho comercio',ok:false},{t:'Por la inseguridad tras las invasiones',ok:true},{t:'Porque lo mandaron los Papas',ok:false}],
       pistas:['Recuerda: Muchos Enemigos Hacen Naufragar.','Con tantas invasiones, la gente tenía miedo y buscaba protección.'],
       bien:'La inseguridad llevó a la gente al campo.'},
      {tipo:'test', fase:2, pregunta:'¿Qué parte de la ceremonia hacía el vasallo?',
       opciones:[{t:'El homenaje',ok:true},{t:'La investidura',ok:false},{t:'El diezmo',ok:false}],
       pistas:['El vasallo jura.','H va antes que I: la H es la del vasallo.'],
       bien:'El vasallo hacía el homenaje.'},
      {tipo:'test', fase:2, pregunta:'¿Qué estamentos no pagaban impuestos?',
       opciones:[{t:'Los campesinos',ok:false},{t:'Solo el clero',ok:false},{t:'La nobleza y el clero',ok:true}],
       pistas:['Son los privilegiados ⭐.','Los que luchan y los que rezan.'],
       bien:'Nobleza y clero eran privilegiados.'},
      {tipo:'test', fase:2, pregunta:'¿Cuáles eran las 3 funciones de un monasterio?',
       opciones:[{t:'Castillo, mercado y puerto',ok:false},{t:'Granja, biblioteca y hotel para peregrinos',ok:true},{t:'Escuela, hospital y cárcel',ok:false}],
       pistas:['Piensa en los iconos 🌿 📖 🥾.','Nuevos cultivos, libros copiados y descanso para peregrinos.'],
       bien:'Granja, biblioteca y hotel.'},
      {tipo:'test', fase:2, pregunta:'¿Cuáles son las 3 C de las consecuencias de las cruzadas?',
       opciones:[{t:'Castillos, caza y cultura',ok:false},{t:'Campesinos, clero y caballeros',ok:false},{t:'Conquista, caballeros-monjes y comercio',ok:true}],
       pistas:['Una es la conquista de Jerusalén.','Las otras dos: las órdenes militares y el Mediterráneo.'],
       bien:'Conquista, caballeros-monjes y comercio.'},
      {tipo:'fin', fase:3, orbe:'Gran Orbe del Feudo'}
    ]
  });
})();
