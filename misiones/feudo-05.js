/* feudo-05 · El clero y los monasterios */
(function () {
  const IMG = Motor.img;
  Motor.registrar('feudo-05', {
    orbe: 'Orbe del Monasterio',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Una Iglesia muy poderosa',
       iconos:[{e:'⛪',t:'Clero'},{e:'🔟',t:'Diezmo'},{e:'⬆️',t:'Alto clero'},{e:'⬇️',t:'Bajo clero'}],
       html:'La <b>Iglesia</b> era muy <span class="clave">poderosa</span> y rica: tenía feudos, igual que los nobles.<br>Los campesinos le pagaban un impuesto llamado <span class="clave">diezmo</span> 🔟, y los nobles le hacían donaciones.<br>No todo el clero era igual de rico:<br>⬆️ <b>Alto clero</b>: abades y obispos, con mucho poder y riqueza.<br>⬇️ <b>Bajo clero</b>: curas, monjes y monjas, más pobres.',
       truco:{tipo:'Partir la palabra', html:'<span class="letra">DIEZ</span>mo empieza por <span class="letra">DIEZ</span> 🔟: era la décima parte de lo que producían los campesinos. De cada 10 sacos de trigo, 1 era para la Iglesia.'}},
      {tipo:'leer', fase:0, titulo:'Clero secular y clero regular',
       iconos:[{e:'🏘️',t:'Secular'},{e:'📏',t:'Regular'}],
       html:'El clero también se dividía según <b>dónde vivía</b>:<br>🏘️ <span class="clave">Clero secular</span>: obispos, curas y párrocos. Vivían <b>entre la gente</b>.<br>📏 <span class="clave">Clero regular</span>: monjes, monjas y frailes. Vivían en un <b>monasterio</b> siguiendo una <b>regla</b> (unas normas).<br>El clero regular hacía 3 votos (promesas): <b>pobreza</b>, <b>castidad</b> y <b>obediencia</b>.',
       truco:{tipo:'Partir la palabra', html:'<span class="letra">REGULAR</span> viene de <span class="letra">REGLA</span> 📏: los que siguen una regla en el monasterio.<br>Los 3 votos, fácil: <b>no tener cosas</b> (pobreza), <b>no casarse</b> (castidad) y <b>hacer caso</b> (obediencia).'}},
      {tipo:'leer', fase:0, titulo:'Los monasterios',
       iconos:[{e:'🔔',t:'Monasterio'},{e:'📖',t:'Cultura'},{e:'🥾',t:'Peregrinos'}],
       img:IMG('Escribano.jpg'),
       pie:'Un copista del siglo XV escribiendo un libro a mano. En la Edad Media, los libros se copiaban así, sobre todo en los monasterios. Dominio público (Wikimedia Commons).',
       html:'Los <span class="clave">monasterios</span> 🔔 fueron muy importantes:<br>🌿 Los monjes inventaron <b>nuevas técnicas de cultivo</b>.<br>📖 Eran <b>centros de cultura</b>: allí se guardaban y <b>se copiaban a mano los libros</b> más importantes.<br>🥾 Daban descanso a los <b>peregrinos</b> que viajaban por los caminos.',
       truco:{tipo:'Las 3 funciones', html:'Un monasterio era a la vez:<br>🌿 una <b>granja</b> que inventa,<br>📖 una <b>biblioteca</b>,<br>🥾 un <b>hotel</b> para peregrinos.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué era el diezmo?', a:'<span class="emo">🔟</span>El impuesto que los campesinos pagaban a la Iglesia'},
         {f:'¿Dónde vivía el clero regular?', a:'<span class="emo">📏</span>En un monasterio, siguiendo una regla'},
         {f:'¿Quiénes formaban el alto clero?', a:'<span class="emo">⬆️</span>Abades y obispos'},
         {f:'¿Cuáles son las 3 funciones de un monasterio?', a:'<span class="emo">🌿 📖 🥾</span>Granja, biblioteca y hotel para peregrinos'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Secular o regular?',
       ayuda:'Lee quién es y toca dónde va: clero secular o clero regular.',
       grupos:[{id:'s',n:'Secular',e:'🏘️'},{id:'r',n:'Regular',e:'📏'}],
       items:[
         {t:'Monje',e:'🙏',g:'r',p:'¿Vive en un monasterio?'},
         {t:'Cura de un pueblo',e:'⛪',g:'s',p:'¿Vive entre la gente del pueblo?'},
         {t:'Monja',e:'🙏',g:'r',p:'Igual que el monje: vive en un monasterio.'},
         {t:'Obispo',e:'🧓',g:'s',p:'Los obispos vivían entre la gente, no en un monasterio.'},
         {t:'Fraile',e:'🙏',g:'r',p:'Los frailes seguían la regla de una orden.'},
         {t:'Párroco',e:'🧑',g:'s',p:'El párroco atiende a la gente de su parroquia.'}
       ],
       regla:'Recuerda: REGULAR viene de REGLA 📏 → monjes, monjas y frailes en el monasterio. Los demás (obispos, curas, párrocos) viven entre la gente 🏘️.',
       bien:'Ya distingues el clero secular del regular.'},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
       ayuda:'Toca una palabra de la izquierda y después su significado de la derecha.',
       pares:[
         {c:'Diezmo',e:'🔟',d:'Impuesto que pagaban los campesinos a la Iglesia',p:'Empieza por DIEZ.'},
         {c:'Alto clero',e:'⬆️',d:'Abades y obispos, con mucho poder',p:'Alto = arriba, los más poderosos.'},
         {c:'Bajo clero',e:'⬇️',d:'Curas, monjes y monjas más pobres',p:'Bajo = abajo, los más pobres.'},
         {c:'Monasterio',e:'🔔',d:'Lugar donde se copiaban libros',p:'Piensa en la biblioteca.'},
         {c:'Votos',e:'🤞',d:'Pobreza, castidad y obediencia',p:'Son las 3 promesas del clero regular.'}
       ],
       bien:'Has unido todas las parejas.'},
      {tipo:'test', fase:2, pregunta:'¿Qué era el diezmo?',
       opciones:[{t:'Un regalo del señor al vasallo',ok:false},{t:'El impuesto que los campesinos pagaban a la Iglesia',ok:true},{t:'Una regla de los monasterios',ok:false}],
       pistas:['Fíjate en cómo empieza la palabra: DIEZ...','Es un impuesto. ¿Quién lo pagaba y a quién?'],
       bien:'El diezmo era el impuesto para la Iglesia.'},
      {tipo:'test', fase:2, pregunta:'¿Quiénes formaban el clero regular?',
       opciones:[{t:'Obispos y párrocos que vivían entre la gente',ok:false},{t:'Monjes, monjas y frailes que vivían en un monasterio',ok:true},{t:'Nobles que luchaban en las guerras',ok:false}],
       pistas:['REGULAR viene de REGLA.','¿Quién vivía en un monasterio siguiendo una regla?'],
       bien:'El clero regular vivía en monasterios.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué los monasterios eran importantes para la cultura?',
       opciones:[{t:'Porque allí se guardaban y copiaban los libros',ok:true},{t:'Porque allí se celebraban los torneos',ok:false},{t:'Porque allí vivían los reyes',ok:false}],
       pistas:['Piensa en las 3 funciones: granja, biblioteca y hotel.','La cultura tiene que ver con la biblioteca 📖.'],
       bien:'Los monasterios guardaban y copiaban los libros.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Monasterio'}
    ]
  });
})();
