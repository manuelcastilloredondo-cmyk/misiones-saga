/* materia-02 · ¿Flota o se hunde? */
(function () {
  Motor.registrar('materia-02', {
    orbe: 'Orbe de la Flotación',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Un sólido en un líquido',
       iconos:[{e:'⬇️',t:'Se hunde'},{e:'⬆️',t:'Flota'}],
       html:'La <span class="clave">densidad</span> 🪨 nos dice si algo flota o se hunde.<br>Si echamos un sólido en un líquido:<br>⬇️ <b>Se hunde</b> si el sólido es <b>más denso</b> que el líquido.<br>⬆️ <b>Flota</b> si el sólido es <b>menos denso</b> que el líquido.<br>Ejemplo: una bola de hierro (7,8 g/cm³) se hunde en agua (1,0 g/cm³), pero <b>flota en mercurio</b> (13,6 g/cm³).',
       truco:{tipo:'La regla del ascensor', html:'<span class="letra">El más denso baja</span> al sótano ⬇️.<br><span class="letra">El menos denso sube</span> arriba ⬆️.<br>Compara los dos números: el más grande se va abajo.'}},
      {tipo:'leer', fase:0, titulo:'Dos líquidos juntos',
       iconos:[{e:'🫗',t:'Capas'},{e:'💧',t:'Agua: 1,0'}],
       html:'Si mezclamos dos líquidos, el <span class="clave">menos denso flota</span> sobre el más denso:<br>🫒 El <b>aceite</b> (0,92 g/cm³) flota sobre el agua (1,0 g/cm³).<br>🧪 El <b>tetracloruro de carbono</b> (1,6 g/cm³) se hunde en el agua.<br>🔥 El <b>agua caliente</b> (menos densa) flota sobre el <b>agua fría</b> (más densa).',
       truco:{tipo:'El agua es la referencia', html:'Apréndete que el <span class="letra">agua = 1,0 g/cm³</span> 💧.<br>Menos de 1 → flota en agua ⬆️. Más de 1 → se hunde ⬇️.'}},
      {tipo:'leer', fase:0, titulo:'Dos gases juntos',
       iconos:[{e:'🎈',t:'Globos'},{e:'♨️',t:'Aire caliente'}],
       html:'Con los gases pasa lo mismo: el <span class="clave">menos denso sube</span> y el más denso baja.<br>🎈 Los <b>globos aerostáticos</b> suben porque se llenan de <b>aire caliente</b>, que es menos denso.<br>🎈 Los <b>globos de helio</b> suben porque el helio es menos denso que el aire.',
       truco:{tipo:'Calor = sube', html:'Lo <span class="letra">caliente sube</span> ♨️: el aire caliente del globo y el agua caliente sobre la fría. Al calentarse, se vuelven <b>menos densos</b>.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Cuándo se hunde un sólido en un líquido?', a:'<span class="emo">⬇️</span>Cuando es más denso que el líquido'},
         {f:'¿Cuál es la densidad del agua?', a:'<span class="emo">💧</span>1,0 g/cm³'},
         {f:'¿Por qué flota el aceite en el agua?', a:'<span class="emo">🫒</span>Porque es menos denso (0,92 g/cm³)'},
         {f:'¿Por qué sube un globo aerostático?', a:'<span class="emo">🎈</span>Porque el aire caliente es menos denso'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'En agua (1,0 g/cm³), ¿flota o se hunde?',
       ayuda:'Compara la densidad con la del agua y toca la respuesta.',
       grupos:[{id:'f',n:'Flota',e:'⬆️'},{id:'h',n:'Se hunde',e:'⬇️'}],
       items:[
         {t:'Aceite · 0,92 g/cm³',e:'🫒',g:'f',p:'¿0,92 es más o menos que 1?'},
         {t:'Hierro · 7,8 g/cm³',e:'🔩',g:'h',p:'¿7,8 es más o menos que 1?'},
         {t:'Hielo · 0,92 g/cm³',e:'🧊',g:'f',p:'Igual que el aceite: menos de 1.'},
         {t:'Tetracloruro de carbono · 1,6 g/cm³',e:'🧪',g:'h',p:'1,6 es más que 1.'},
         {t:'Aluminio · 2,7 g/cm³',e:'🥫',g:'h',p:'¿2,7 es más o menos que 1?'},
         {t:'Corcho · 0,24 g/cm³',e:'🍾',g:'f',p:'0,24 es mucho menos que 1.'}
       ],
       regla:'Recuerda: agua = 1,0. Menos de 1 → flota ⬆️. Más de 1 → se hunde ⬇️.',
       bien:'¡Dominas la flotación!'},
      {tipo:'ordenar', fase:1, pregunta:'Las capas del vaso',
       ayuda:'Echamos 4 líquidos en un vaso. Toca de la capa de arriba a la capa de abajo.',
       orden:['Aceite · 0,92 g/cm³','Agua · 1,0 g/cm³','Tetracloruro de carbono · 1,6 g/cm³','Mercurio · 13,6 g/cm³'],
       pistas:['Arriba se queda el menos denso: el número más pequeño.','Después viene la referencia de siempre: 1,0.','Ahora el que tiene 1,6.','Abajo del todo, el más denso de todos.'],
       bien:'El menos denso arriba y el más denso abajo.'},
      {tipo:'test', fase:2, pregunta:'Una bola de hierro (7,8 g/cm³) en mercurio (13,6 g/cm³)...',
       opciones:[{t:'Se hunde',ok:false},{t:'Flota',ok:true},{t:'Se derrite',ok:false}],
       pistas:['Compara los dos números.','El hierro es menos denso que el mercurio. El menos denso...'],
       bien:'Flota, porque 7,8 es menos que 13,6.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué sube un globo de helio?',
       opciones:[{t:'Porque el helio es menos denso que el aire',ok:true},{t:'Porque el helio está frío',ok:false},{t:'Porque el globo es de plástico',ok:false}],
       pistas:['Con los gases, el menos denso sube.','El helio pesa menos que el mismo volumen de aire.'],
       bien:'El helio es menos denso que el aire.'},
      {tipo:'test', fase:2, pregunta:'Si mezclas aceite y agua, ¿qué pasa?',
       opciones:[{t:'El agua se queda encima',ok:false},{t:'Se mezclan del todo',ok:false},{t:'El aceite flota encima del agua',ok:true}],
       pistas:['El aceite tiene 0,92 g/cm³ y el agua 1,0 g/cm³.','El menos denso sube.'],
       bien:'El aceite flota porque es menos denso.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Flotación'}
    ]
  });
})();
