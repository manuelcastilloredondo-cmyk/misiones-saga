/* materia-05 · La teoría cinética */
(function () {
  Motor.registrar('materia-05', {
    orbe: 'Orbe de las Partículas',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Las 4 ideas de la teoría',
       iconos:[{e:'🔵',t:'Partículas'},{e:'⬜',t:'Vacío'},{e:'🧲',t:'Fuerzas'},{e:'🏃',t:'Movimiento'}],
       html:'La <span class="clave">teoría cinética</span> explica cómo se comporta la materia con <b>4 ideas</b>:<br>🔵 La materia está formada por <b>partículas</b> muy pequeñas (átomos, moléculas...).<br>⬜ Entre las partículas <b>no hay nada</b>: hay vacío.<br>🧲 Hay <b>fuerzas</b> que tienden a juntar las partículas.<br>🏃 Las partículas <b>se mueven</b>. Cuanta <b>más temperatura</b>, <b>más rápido</b> se mueven.',
       truco:{tipo:'Compáralo con algo que conoces', html:'Imagina una cancha de baloncesto 🏀:<br>🔵 los <b>jugadores</b> son las partículas · ⬜ el <b>espacio libre</b> es el vacío · 🧲 la <b>defensa</b> que los junta son las fuerzas · 🏃 con más <b>energía</b>, corren más.'}},
      {tipo:'leer', fase:0, titulo:'Sólido, líquido y gas por dentro',
       iconos:[{e:'🧊',t:'Sólido'},{e:'💧',t:'Líquido'},{e:'💨',t:'Gas'}],
       html:'🧊 <b>Sólido</b>: fuerzas <b>muy grandes</b>. Partículas <b>muy juntas y ordenadas</b>. No están quietas: <b>vibran</b>.<br>💧 <b>Líquido</b>: situación <b>intermedia</b>. Partículas más separadas que en el sólido, pero mucho menos que en el gas.<br>💨 <b>Gas</b>: fuerzas <b>muy débiles</b>. Partículas <b>muy separadas</b>, moviéndose en todas direcciones y chocando.<br>Por eso los <b>sólidos</b> suelen tener densidad <b>alta</b> y los <b>gases</b>, densidad <b>baja</b>.',
       truco:{tipo:'Un equipo en tres momentos', html:'🧊 <b>Sólido</b> = el equipo en <b>formación</b> haciendo estiramientos: juntos y solo se balancean.<br>💧 <b>Líquido</b> = <b>calentando</b>: se mueven, pero cerca.<br>💨 <b>Gas</b> = el <b>recreo</b>: cada uno corriendo por todo el patio.'}},
      {tipo:'leer', fase:0, titulo:'Calor y presión',
       iconos:[{e:'🔥',t:'Calentar'},{e:'💥',t:'Choques'},{e:'🎈',t:'Presión'}],
       html:'🔥 Al <b>calentar</b>, damos energía: las partículas se mueven <b>más rápido</b>. Un sólido que se calienta vibra cada vez más, hasta que <b>funde</b>.<br>❄️ Al <b>enfriar</b>, se mueven <b>más despacio</b> y las fuerzas las juntan: el gas pasa a líquido y luego a sólido.<br>🎈 La <span class="clave">presión de un gas</span> se debe a los <b>choques</b> de sus partículas contra las paredes. Si <b>metemos más gas</b> o <b>subimos la temperatura</b>, hay más choques y <b>más presión</b>.',
       truco:{tipo:'Una cadena', html:'<span class="letra">Más calor → más rápido → más choques → más presión</span> 🎈.<br>Por eso un balón 🏀 que se queda al sol se pone más duro.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué hay entre las partículas?', a:'<span class="emo">⬜</span>Nada: vacío'},
         {f:'¿Qué pasa con las partículas si sube la temperatura?', a:'<span class="emo">🏃</span>Se mueven más rápido'},
         {f:'¿Cómo están las partículas en un sólido?', a:'<span class="emo">🧊</span>Muy juntas, ordenadas y vibrando'},
         {f:'¿De dónde viene la presión de un gas?', a:'<span class="emo">💥</span>De los choques de las partículas contra las paredes'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Sólido, líquido o gas?',
       ayuda:'Lee cómo están las partículas y toca el estado.',
       grupos:[{id:'s',n:'Sólido',e:'🧊'},{id:'l',n:'Líquido',e:'💧'},{id:'g',n:'Gas',e:'💨'}],
       items:[
         {t:'Partículas muy juntas y ordenadas',e:'🧱',g:'s',p:'Es el equipo en formación.'},
         {t:'Partículas muy separadas, con mucho vacío',e:'🌫️',g:'g',p:'Es el recreo: cada uno por su lado.'},
         {t:'Las partículas solo vibran',e:'〰️',g:'s',p:'Juntas y sin moverse del sitio.'},
         {t:'Chocan contra las paredes en todas direcciones',e:'💥',g:'g',p:'Así se produce la presión.'},
         {t:'Más separadas que en un sólido, pero menos que en un gas',e:'↔️',g:'l',p:'Es la situación intermedia.'},
         {t:'Fuerzas ni muy grandes ni muy débiles',e:'⚖️',g:'l',p:'Intermedio = el estado del medio.'}
       ],
       regla:'Recuerda: 🧊 formación (juntas, vibran) · 💧 calentando (intermedio) · 💨 recreo (separadas, chocan).',
       bien:'¡Ves la materia por dentro!'},
      {tipo:'ordenar', fase:1, pregunta:'Calentamos un gas en un recipiente cerrado',
       ayuda:'Toca lo que pasa, en orden.',
       orden:['Le damos calor (energía)','Las partículas se mueven más rápido','Chocan más contra las paredes','Aumenta la presión'],
       pistas:['Todo empieza con el calor.','Con más energía, las partículas...','Si van más rápido, chocan...','Más choques significa más...'],
       bien:'Más calor → más rápido → más choques → más presión.'},
      {tipo:'test', fase:2, pregunta:'¿Qué hay entre las partículas que forman la materia?',
       opciones:[{t:'Aire',ok:false},{t:'Nada: vacío',ok:true},{t:'Agua',ok:false}],
       pistas:['Es la segunda idea de la teoría.','Es el espacio libre de la cancha ⬜.'],
       bien:'Entre las partículas hay vacío.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué los gases tienen una densidad baja?',
       opciones:[{t:'Porque sus partículas están muy separadas',ok:true},{t:'Porque sus partículas están quietas',ok:false},{t:'Porque no tienen partículas',ok:false}],
       pistas:['Densidad = masa en cada cm³.','En el recreo 💨, ¿cuántos hay en cada trozo del patio?'],
       bien:'Hay poca masa en cada cm³ porque están muy separadas.'},
      {tipo:'test', fase:2, pregunta:'Si metemos más gas en un recipiente cerrado, la presión...',
       opciones:[{t:'Baja',ok:false},{t:'No cambia',ok:false},{t:'Aumenta',ok:true}],
       pistas:['Más gas = más partículas.','Más partículas = más choques contra las paredes.'],
       bien:'Aumenta, porque hay más choques.'},
      {tipo:'fin', fase:3, orbe:'Orbe de las Partículas'}
    ]
  });
})();
