/* feudo-04 · Los nobles: caballeros y damas */
(function () {
  const IMG = Motor.img;
  Motor.registrar('feudo-04', {
    orbe: 'Orbe del Caballero',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Los nobles',
       iconos:[{e:'🏇',t:'Nobleza'},{e:'⭐',t:'Privilegios'}],
       html:'Los nobles eran <span class="clave">pocos</span>: una minoría de la población. Pero tenían <b>todo tipo de privilegios</b> ⭐.<br>Su función era <span class="clave">la guerra</span>, porque en la Edad Media había guerras muy a menudo.<br>En tiempos de paz se dedicaban a la <b>caza</b> y a los <b>torneos</b>.',
       truco:{tipo:'Pocos pero con poder', html:'Imagina un pabellón lleno 🏀: los nobles serían solo los que están en el palco VIP. <b>Pocos, pero con todos los privilegios.</b>'}},
      {tipo:'leer', fase:0, titulo:'De paje a caballero',
       iconos:[{e:'🧒',t:'1. Paje'},{e:'🪖',t:'2. Escudero'},{e:'🐴',t:'3. Caballero'}],
       img:IMG('Codex_Manesse_052r_Walther_von_Klingen.jpg'),
       pie:'Un caballero en un torneo, mientras unas damas lo miran. Códice Manesse, hacia 1300. Dominio público (Wikimedia Commons).',
       html:'Para ser caballero había que pasar <span class="clave">3 etapas</span>, desde niño:<br>1️⃣ <b>Paje</b> 🧒: servía a un tutor (un caballero), que le enseñaba a comportarse y a manejar las armas.<br>2️⃣ <b>Escudero</b> 🪖: acompañaba a su señor a los torneos.<br>3️⃣ <b>Caballero</b> 🐴: lo nombraban en una ceremonia llamada <b>investidura</b>.<br><small>Ojo: es otra investidura distinta a la del feudo. Aquí es la ceremonia para ser caballero.</small>',
       truco:{tipo:'Compáralo con algo que conoces', html:'Es como subir en un club de baloncesto 🏀:<br>🧒 <b>Paje</b> = cantera: aprendes con un entrenador.<br>🪖 <b>Escudero</b> = vas con el primer equipo, pero aún no juegas.<br>🐴 <b>Caballero</b> = ya eres del primer equipo. Y fíjate: <span class="letra">CABALLERO</span> viene de <span class="letra">CABALLO</span>.'}},
      {tipo:'leer', fase:0, titulo:'Las damas',
       iconos:[{e:'💍',t:'Casamiento'},{e:'📖',t:'Cultura'},{e:'🔑',t:'Castillo'}],
       html:'La función principal de las <b>damas</b> 👸 era el <span class="clave">casamiento</span>. Para casarse debían aportar una <span class="clave">dote</span> 🪙: riquezas en tierras o dinero.<br>Educaban a los niños y tenían <b>más cultura</b> que muchos hombres: sabían leer, escribir y algo de música. Acogían en sus castillos a los <b>juglares y trovadores</b> 🎶.<br>Cuando los caballeros no estaban, ellas <b>defendían y organizaban el castillo</b> 🔑.',
       truco:{tipo:'Las 3 C de las damas', html:'💍 <span class="letra">C</span>asamiento (con su dote)<br>📖 <span class="letra">C</span>ultura (leer, escribir, música)<br>🔑 <span class="letra">C</span>astillo (lo defendían y organizaban)'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Cuáles son las 3 etapas para ser caballero?', a:'<span class="emo">🧒 🪖 🐴</span>Paje, escudero y caballero'},
         {f:'¿Qué hacía el escudero?', a:'<span class="emo">🪖</span>Acompañaba a su señor a los torneos'},
         {f:'¿Qué era la dote?', a:'<span class="emo">🪙</span>Tierras o dinero que aportaba la dama al casarse'},
         {f:'¿Cuáles son las 3 C de las damas?', a:'<span class="emo">💍 📖 🔑</span>Casamiento, cultura y castillo'}
       ]},
      {tipo:'ordenar', fase:1, pregunta:'El camino del caballero',
       ayuda:'Toca las frases en orden: desde que es un niño hasta que se convierte en caballero.',
       orden:['Nace en una familia noble','Es paje y aprende con un tutor','Es escudero y va a los torneos','Recibe la investidura en una ceremonia','Ya es caballero'],
       pistas:['Todo empieza al nacer. ¿En qué tipo de familia?',
               'La primera etapa es la de niño, cuando aprende con un tutor.',
               'La segunda etapa: acompaña a su señor a los torneos.',
               'Antes de ser caballero hay una ceremonia.',
               'Al final del camino ya va a caballo 🐴.'],
       bien:'¡Del 🧒 al 🐴!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Caballero o dama?',
       ayuda:'Lee la acción y toca quién la hace.',
       grupos:[{id:'c',n:'Caballero',e:'🐴'},{id:'d',n:'Dama',e:'👸'}],
       items:[
         {t:'Va a la guerra',e:'🗡️',g:'c',p:'Los nobles guerreros eran los caballeros.'},
         {t:'Aporta una dote al casarse',e:'🪙',g:'d',p:'Piensa en la primera C: casamiento.'},
         {t:'Sabe leer, escribir y algo de música',e:'📖',g:'d',p:'Piensa en la segunda C: cultura.'},
         {t:'Defiende el castillo cuando los caballeros no están',e:'🔑',g:'d',p:'Piensa en la tercera C: castillo.'},
         {t:'Compite en torneos',e:'🏇',g:'c',p:'Es lo que hacía en tiempos de paz el que va a caballo.'},
         {t:'Acoge a juglares y trovadores',e:'🎶',g:'d',p:'Tiene que ver con la música y la cultura.'}
       ],
       regla:'Recuerda: el caballero 🐴 lucha y hace torneos. La dama 👸 tiene las 3 C: casamiento, cultura y castillo.',
       bien:'Ya distingues a caballeros y damas.'},
      {tipo:'test', fase:2, pregunta:'¿Cuál es el orden correcto para llegar a caballero?',
       opciones:[{t:'Escudero → Paje → Caballero',ok:false},{t:'Caballero → Escudero → Paje',ok:false},{t:'Paje → Escudero → Caballero',ok:true}],
       pistas:['Se empezaba de niño, en la cantera.','Primero 🧒, después 🪖 y al final 🐴.'],
       bien:'Paje, escudero y caballero.'},
      {tipo:'test', fase:2, pregunta:'¿Qué era la dote?',
       opciones:[{t:'Un impuesto que pagaban los campesinos',ok:false},{t:'Tierras o dinero que aportaba la dama al casarse',ok:true},{t:'Un regalo del señor al vasallo',ok:false}],
       pistas:['Tiene que ver con la primera C de las damas: casamiento.','Es algo que aportaba la dama, no el señor ni los campesinos.'],
       bien:'La dote era lo que aportaba la dama al casarse.'},
      {tipo:'test', fase:2, pregunta:'¿Qué hacían las damas cuando los caballeros no estaban en el castillo?',
       opciones:[{t:'Se encargaban de su defensa y organización',ok:true},{t:'Se marchaban a otro castillo',ok:false},{t:'Pagaban impuestos al señor',ok:false}],
       pistas:['Piensa en la tercera C de las damas.','La C de castillo: tenían las llaves 🔑.'],
       bien:'Las damas defendían y organizaban el castillo.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Caballero'}
    ]
  });
})();
