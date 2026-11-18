/* feudo-06 · Los campesinos */
(function () {
  const IMG = Motor.img;
  Motor.registrar('feudo-06', {
    orbe: 'Orbe del Campo',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Casi todos eran campesinos',
       iconos:[{e:'👨‍🌾',t:'Campesinos'},{e:'👥',t:'La mayoría'},{e:'🔤',t:'No sabían leer'}],
       img:IMG('Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juillet.jpg'),
       pie:'Campesinos segando el trigo y esquilando ovejas junto a un castillo. «Très Riches Heures», siglo XV. Dominio público (Wikimedia Commons).',
       html:'En la Edad Media, la <span class="clave">mayoría</span> de la gente eran campesinos 👨‍🌾: más o menos el <b>90 %</b> de la población.<br>Casi todos eran <span class="clave">analfabetos</span>: no sabían leer ni escribir.<br>Solo unos pocos tenían tierras propias. La mayoría <b>dependía de un señor feudal</b>.',
       truco:{tipo:'Hazlo con números pequeños', html:'90 % = <span class="letra">9 de cada 10</span>.<br>Si tu clase tuviera 10 alumnos, <b>9 serían campesinos</b> 👨‍🌾 y solo 1 sería noble o del clero.'}},
      {tipo:'leer', fase:0, titulo:'Siervos y libres',
       iconos:[{e:'⛓️',t:'Siervo'},{e:'🕊️',t:'Libre'}],
       html:'Había <span class="clave">dos tipos</span> de campesinos:<br>⛓️ <b>Siervos</b>: <b>no podían abandonar</b> el feudo. Estaban atados a esa tierra.<br>🕊️ <b>Libres</b>: <b>podían marcharse</b> del feudo, aunque casi nunca lo hacían.',
       truco:{tipo:'Palabras que se parecen', html:'<span class="letra">SIERVO</span> suena a <span class="letra">CIERRO</span>: el siervo está <b>cerrado</b> en el feudo ⛓️.<br><span class="letra">LIBRE</span> es como un pájaro 🕊️: puede irse, aunque casi nunca se iba.'}},
      {tipo:'leer', fase:0, titulo:'Una vida muy dura',
       iconos:[{e:'☀️',t:'De sol a sol'},{e:'🥣',t:'Poca comida'},{e:'🔨',t:'De todo'}],
       html:'La vida de los campesinos era <span class="clave">muy dura</span>:<br>☀️ Trabajaban <b>de sol a sol</b>, para alimentar a su familia y a los privilegiados.<br>🥣 Su comida era <b>escasa y pobre</b>.<br>🔨 Además de cultivar, hacían de <b>carpinteros, albañiles</b>... porque tenían que producir <b>todo lo que necesitaban</b>.',
       truco:{tipo:'Compáralo con algo que conoces', html:'El campesino era un jugador que juega <b>todo el partido sin descanso</b> 🏀 y además hace de entrenador, de utillero y de médico. <b>Lo hacía todo.</b>'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Cuántos campesinos había de cada 10 personas?', a:'<span class="emo">👨‍🌾</span>9 de cada 10 (el 90 %)'},
         {f:'¿Qué no podía hacer un siervo?', a:'<span class="emo">⛓️</span>Abandonar el feudo'},
         {f:'¿Qué es ser analfabeto?', a:'<span class="emo">🔤</span>No saber leer ni escribir'},
         {f:'¿Por qué hacían también de carpinteros y albañiles?', a:'<span class="emo">🔨</span>Porque tenían que producir todo lo que necesitaban'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Siervo o libre?',
       ayuda:'Lee la frase y toca de qué campesino habla.',
       grupos:[{id:'s',n:'Siervo',e:'⛓️'},{id:'l',n:'Libre',e:'🕊️'}],
       items:[
         {t:'No puede abandonar el feudo',e:'🚫',g:'s',p:'¿Quién estaba cerrado en el feudo?'},
         {t:'Puede marcharse del feudo',e:'🚶',g:'l',p:'¿Quién era como un pájaro?'},
         {t:'Está atado a esa tierra',e:'🪢',g:'s',p:'Atado = no se puede ir.'},
         {t:'Podría irse, pero casi nunca se va',e:'🏡',g:'l',p:'Si podía irse, era libre.'}
       ],
       regla:'Recuerda: SIERVO suena a CIERRO ⛓️ (no se puede ir). LIBRE 🕊️ (puede irse, aunque casi nunca lo hace).',
       bien:'Ya distingues siervos y libres.'},
      {tipo:'multi', fase:1, pregunta:'¿Cómo era la vida de los campesinos?',
       ayuda:'Elige las 4 frases verdaderas y pulsa «Comprobar».',
       opciones:[
         {t:'Trabajaban de sol a sol',ok:true},
         {t:'Pasaban el tiempo en torneos',ok:false},
         {t:'Su comida era escasa y pobre',ok:true},
         {t:'No pagaban impuestos',ok:false},
         {t:'Hacían también de carpinteros y albañiles',ok:true},
         {t:'Casi todos eran analfabetos',ok:true}
       ],
       pistaMal:'Los torneos eran de los nobles, y los campesinos sí pagaban impuestos.',
       pistaTruco:'Piensa en los iconos: ☀️ de sol a sol, 🥣 poca comida, 🔨 de todo y 🔤 no sabían leer.',
       pistaGuia:'es una de las verdaderas',
       bien:'Sol a sol, poca comida, de todo y sin saber leer.'},
      {tipo:'test', fase:2, pregunta:'¿Qué parte de la población eran campesinos?',
       opciones:[{t:'Muy pocos, solo 1 de cada 10',ok:false},{t:'Casi todos: 9 de cada 10',ok:true},{t:'Justo la mitad',ok:false}],
       pistas:['Eran la mayoría de la población.','Recuerda tu clase de 10 alumnos: ¿cuántos serían campesinos?'],
       bien:'El 90 %: 9 de cada 10.'},
      {tipo:'test', fase:2, pregunta:'¿Qué diferencia a un siervo de un campesino libre?',
       opciones:[{t:'El siervo no pagaba impuestos',ok:false},{t:'El siervo era un noble',ok:false},{t:'El siervo no podía abandonar el feudo',ok:true}],
       pistas:['Siervo suena a cierro.','El siervo estaba atado a la tierra ⛓️.'],
       bien:'El siervo no podía irse del feudo.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué los campesinos hacían también de carpinteros y albañiles?',
       opciones:[{t:'Porque tenían que producir todo lo que necesitaban',ok:true},{t:'Porque se lo pedía el Papa',ok:false},{t:'Porque así no pagaban impuestos',ok:false}],
       pistas:['Recuerda: el campesino lo hacía todo 🔨.','No podían comprar casi nada. ¿Qué tenían que hacer entonces?'],
       bien:'Tenían que fabricarse todo ellos mismos.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Campo'}
    ]
  });
})();
