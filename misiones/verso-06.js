/* verso-06 · Preparo mi poema */
(function () {
  Motor.registrar('verso-06', {
    orbe: 'Orbe del Poeta',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'El plan del poema',
       iconos:[{e:'🗂️',t:'3 estrofas'},{e:'📝',t:'12 versos'},{e:'💡',t:'Mi idea'}],
       html:'Tu poema tendrá <span class="clave">3 estrofas</span> de <span class="clave">4 versos</span>: <b>12 versos</b> en total.<br>💡 Antes de escribir, piensa tu idea:<br>· <b>Tema</b>: de qué trata.<br>· <b>Qué quiero transmitir</b>: qué quieres que sienta quien lo lea.<br>Puedes <b>inventarlo</b>: no tiene que ser algo que te haya pasado.',
       truco:{tipo:'Como un partido', html:'3 estrofas = <b>3 cuartos</b> de un partido 🏀, y cada cuarto tiene <b>4 jugadas</b> (versos). <span class="letra">3 × 4 = 12</span>.'}},
      {tipo:'leer', fase:0, titulo:'Las figuras de cada estrofa',
       iconos:[{e:'1️⃣',t:'🔁 + 👯'},{e:'2️⃣',t:'🗣️ + 🔊'},{e:'3️⃣',t:'🪄 + 🤯'}],
       html:'En cada estrofa usas <span class="clave">2 figuras</span>:<br>1️⃣ <b>Estrofa 1</b> (versos 1 a 4): <b>anáfora</b> 🔁 + <b>símil</b> 👯.<br>2️⃣ <b>Estrofa 2</b> (versos 5 a 8): <b>personificación</b> 🗣️ + <b>aliteración</b> 🔊.<br>3️⃣ <b>Estrofa 3</b> (versos 9 a 12): <b>metáfora</b> 🪄 + <b>hipérbole</b> 🤯.',
       truco:{tipo:'Las iniciales', html:'Estrofa 1: <span class="letra">A + S</span> (Anáfora + Símil).<br>Estrofa 2: <span class="letra">P + A</span> (Personificación + Aliteración).<br>Estrofa 3: <span class="letra">M + H</span> (Metáfora + Hipérbole).<br>Dilo seguido: <b>«AS, PA, MH»</b>.'}},
      {tipo:'leer', fase:0, titulo:'La rima de cada estrofa',
       iconos:[{e:'🟰',t:'Consonante'},{e:'🔉',t:'Asonante'}],
       html:'En cada estrofa riman el <b>segundo</b> y el <b>cuarto</b> verso:<br>1️⃣ Versos <b>2 y 4</b>: rima <b>consonante</b> 🟰. Ayuda: canción / corazón; camino / destino.<br>2️⃣ Versos <b>6 y 8</b>: rima <b>asonante</b> 🔉. Ayuda: casa / rama; cielo / secreto.<br>3️⃣ Versos <b>10 y 12</b>: <b>eliges tú</b> el tipo de rima.<br>Los otros versos pueden quedar <b>sin rima</b>, y no hace falta que todos midan lo mismo.',
       truco:{tipo:'Los pares', html:'Riman los versos <span class="letra">PARES</span>: 2-4, 6-8 y 10-12. Los impares, libres.<br>Primero busca las <b>palabras finales</b> que riman y luego escribe el verso hacia atrás.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Cuántas estrofas y versos tiene tu poema?', a:'<span class="emo">🗂️</span>3 estrofas de 4 versos: 12 versos'},
         {f:'¿Qué figuras van en la estrofa 2?', a:'<span class="emo">🗣️ 🔊</span>Personificación y aliteración'},
         {f:'¿Qué versos riman en la estrofa 1 y con qué rima?', a:'<span class="emo">🟰</span>El 2 y el 4, con rima consonante'},
         {f:'¿Qué tienes que comprobar al releer?', a:'<span class="emo">✅</span>3 estrofas de 4 versos, 2 figuras en cada una y las rimas'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿En qué estrofa va cada figura?',
       ayuda:'Toca la estrofa donde tienes que usar cada figura.',
       grupos:[{id:'1',n:'Estrofa 1',e:'1️⃣'},{id:'2',n:'Estrofa 2',e:'2️⃣'},{id:'3',n:'Estrofa 3',e:'3️⃣'}],
       items:[
         {t:'Anáfora',e:'🔁',g:'1',p:'AS, PA, MH: la A de la primera pareja.'},
         {t:'Personificación',e:'🗣️',g:'2',p:'AS, PA, MH: la P de la segunda.'},
         {t:'Metáfora',e:'🪄',g:'3',p:'AS, PA, MH: la M de la tercera.'},
         {t:'Símil',e:'👯',g:'1',p:'AS: la S va con la anáfora.'},
         {t:'Hipérbole',e:'🤯',g:'3',p:'MH: la H va con la metáfora.'},
         {t:'Aliteración',e:'🔊',g:'2',p:'PA: la A va con la personificación.'}
       ],
       regla:'Recuerda: «AS, PA, MH» → 1: Anáfora + Símil · 2: Personificación + Aliteración · 3: Metáfora + Hipérbole.',
       bien:'¡Tienes el plan de tu poema!'},
      {tipo:'ordenar', fase:1, pregunta:'Los pasos para hacer tu poema',
       ayuda:'Toca los pasos en orden, de la idea al análisis.',
       orden:['Elijo el tema y lo que quiero transmitir','Busco las palabras finales que riman','Escribo las 3 estrofas con sus figuras','Releo: estrofas, figuras y rimas','Analizo: señalo las figuras, la rima y mido los versos'],
       pistas:['Todo empieza por la idea 💡.','Antes de escribir, prepara las parejas de rima.','Ahora sí: a escribir.','Cuando lo tengas, revísalo.','Lo último es la hoja de análisis.'],
       bien:'Planifico, escribo y analizo.'},
      {tipo:'test', fase:2, pregunta:'¿Qué versos tienen que rimar en la estrofa 2?',
       opciones:[{t:'El 5 y el 7',ok:false},{t:'El 6 y el 8',ok:true},{t:'Todos',ok:false}],
       pistas:['Riman los versos pares.','La estrofa 2 va del verso 5 al 8. ¿Cuáles son pares?'],
       bien:'El 6 y el 8, con rima asonante.'},
      {tipo:'test', fase:2, pregunta:'¿Qué dos figuras van en la estrofa 3?',
       opciones:[{t:'Anáfora y símil',ok:false},{t:'Personificación y aliteración',ok:false},{t:'Metáfora e hipérbole',ok:true}],
       pistas:['AS, PA, MH: ¿cuál es la tercera pareja?','M + H.'],
       bien:'Metáfora e hipérbole.'},
      {tipo:'test', fase:2, pregunta:'Para analizar los versos, ¿qué es arte menor?',
       opciones:[{t:'Versos de hasta 8 sílabas',ok:true},{t:'Versos de 9 sílabas o más',ok:false},{t:'Versos sin rima',ok:false}],
       pistas:['Menor = pocas sílabas.','Arte menor 🤏: como mucho 8.'],
       bien:'Arte menor: hasta 8 sílabas. Arte mayor: 9 o más.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Poeta'}
    ]
  });
})();
