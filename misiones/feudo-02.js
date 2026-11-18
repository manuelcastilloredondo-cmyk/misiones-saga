/* feudo-02 */
(function () {
  const IMG = Motor.img;
  Motor.registrar('feudo-02', {
    orbe: 'Orbe del Pacto',
    meta: 170,
    pantallas: [
    {tipo:'leer', fase:0, titulo:'Señor y vasallo',
     iconos:[{e:'👑',t:'Señor'},{e:'🤝',t:'Pacto'},{e:'🛡️',t:'Vasallo'}],
     html:'El feudalismo era un <span class="clave">pacto entre nobles</span> (hombres libres).<br>El <b>señor</b> 👑 era el noble con <b>más poder</b>: protegía al otro.<br>El <b>vasallo</b> 🛡️ era el noble con <b>menos poder</b>: ayudaba y aconsejaba a su señor.',
     truco:{tipo:'Compáralo con algo que conoces', html:'Piensa en un equipo de baloncesto 🏀: el <b>entrenador</b> es el señor (protege y reparte minutos) y el <b>jugador</b> es el vasallo (ayuda al equipo y le hace caso). Los dos se necesitan.'}},
    {tipo:'leer', fase:0, titulo:'La ceremonia de vasallaje',
     iconos:[{e:'🙇',t:'1. Homenaje'},{e:'🎁',t:'2. Investidura'}],
     img:IMG('Maior6.jpg'), ajustada:true,
     pie:'Ceremonia de homenaje: un vasallo ante su señor. «Liber Feudorum Maior», siglo XII. Dominio público (Wikimedia Commons).',
     html:'El pacto se cerraba con una <b>ceremonia</b> de dos partes:<br>1️⃣ <span class="clave">Homenaje</span> 🙇: el <b>vasallo jura</b> fidelidad a su señor y promete ayudarle y aconsejarle.<br>2️⃣ <span class="clave">Investidura</span> 🎁: el <b>señor da</b> un beneficio al vasallo.',
     truco:{tipo:'El abecedario', html:'La <span class="letra">H</span> va antes que la <span class="letra">I</span>: primero <b>H</b>omenaje y después <b>I</b>nvestidura.<br>Homenaje → <b>jura el vasallo</b>. Investidura → <b>da el señor</b>.'}},
    {tipo:'leer', fase:0, titulo:'El feudo y la traición',
     iconos:[{e:'🏰',t:'Feudo'},{e:'⚔️',t:'Traición'}],
     html:'El beneficio solía ser un <span class="clave">feudo</span> 🏰: un <b>lote de tierras</b>.<br>El pacto <b>no se podía romper</b>. Si el señor o el vasallo lo rompían, era <span class="clave">traición</span> ⚔️.',
     truco:{tipo:'Historia en 3 dibujos', html:'🙇 El vasallo jura → 🏰 el señor le da tierras → 🔗 quedan unidos.<br>Si alguien rompe la cadena: ⚔️ <b>¡traición!</b>'}},
    {tipo:'flash', fase:0, titulo:'Tarjetas flash',
     ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
     cartas:[
       {f:'¿Quién tenía más poder: el señor o el vasallo?', a:'<span class="emo">👑</span>El señor'},
       {f:'¿Qué es el homenaje?', a:'<span class="emo">🙇</span>El juramento de fidelidad del vasallo'},
       {f:'¿Qué es la investidura?', a:'<span class="emo">🎁</span>El señor da un beneficio al vasallo'},
       {f:'¿Qué es un feudo?', a:'<span class="emo">🏰</span>Un lote de tierras'}
     ]},
    {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
     ayuda:'Toca una palabra de la izquierda y después su significado de la derecha.',
     pares:[
       {c:'Señor',e:'👑',d:'Noble con más poder que protege',p:'Piensa en el entrenador del equipo.'},
       {c:'Vasallo',e:'🛡️',d:'Noble con menos poder que ayuda y aconseja',p:'Es el jugador del equipo: ayuda y hace caso.'},
       {c:'Homenaje',e:'🙇',d:'Juramento de fidelidad del vasallo',p:'H, la primera parte: el vasallo jura.'},
       {c:'Investidura',e:'🎁',d:'El señor entrega un beneficio',p:'I, la segunda parte: el señor da.'},
       {c:'Feudo',e:'🏰',d:'Lote de tierras',p:'Es el beneficio más habitual: tierra.'}
     ],
     bien:'Has unido todas las parejas.'},
    {tipo:'clasificar', fase:1, pregunta:'¿Quién lo hace?',
     ayuda:'Lee la acción y toca quién la hace: el señor o el vasallo.',
     grupos:[{id:'s',n:'Señor',e:'👑'},{id:'v',n:'Vasallo',e:'🛡️'}],
     items:[
       {t:'Jura fidelidad',e:'🙇',g:'v',p:'En el homenaje, ¿quién jura?'},
       {t:'Protege al otro',e:'☂️',g:'s',p:'El que tiene más poder cuida del otro.'},
       {t:'Da un feudo',e:'🎁',g:'s',p:'En la investidura, ¿quién da?'},
       {t:'Aconseja',e:'💬',g:'v',p:'El vasallo promete ayudar y aconsejar.'},
       {t:'Recibe tierras',e:'🌾',g:'v',p:'Si el señor da las tierras, ¿quién las recibe?'},
       {t:'Ayuda en la guerra',e:'⚔️',g:'v',p:'Ayudar es lo que promete el vasallo.'}
     ],
     regla:'Recuerda: el señor 👑 protege y da. El vasallo 🛡️ jura, ayuda y aconseja.',
     bien:'Ya sabes qué hace cada uno.'},
    {tipo:'test', fase:2, pregunta:'¿Entre quiénes era el pacto de vasallaje?',
     opciones:[{t:'Entre un noble y un campesino',ok:false},{t:'Entre dos nobles',ok:true},{t:'Entre el rey y el Papa',ok:false}],
     pistas:['El pacto era entre hombres libres.','El señor y el vasallo eran del mismo grupo: la nobleza.'],
     bien:'El señor y el vasallo eran nobles.'},
    {tipo:'test', fase:2, pregunta:'¿Qué pasaba si alguien rompía el pacto?',
     opciones:[{t:'No pasaba nada',ok:false},{t:'Pagaba una multa',ok:false},{t:'Se consideraba traición',ok:true}],
     pistas:['El pacto no se podía romper.','Recuerda la historia en 3 dibujos: si se rompe la cadena...'],
     bien:'Romper el pacto era traición.'},
    {tipo:'test', fase:2, pregunta:'¿Qué parte de la ceremonia hace el señor?',
     opciones:[{t:'La investidura',ok:true},{t:'El homenaje',ok:false},{t:'El juramento',ok:false}],
     pistas:['El señor no jura: el señor da.','Usa el abecedario: la H es la primera parte (jura el vasallo) y la I es la segunda...'],
     bien:'En la investidura, el señor da el beneficio.'},
    {tipo:'fin', fase:3, orbe:'Orbe del Pacto'}
    ]
  });
})();
