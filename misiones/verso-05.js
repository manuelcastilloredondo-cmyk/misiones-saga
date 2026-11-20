/* verso-05 · Figuras de ideas, imágenes y significados */
(function () {
  Motor.registrar('verso-05', {
    orbe: 'Orbe de la Imagen',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Símil y metáfora',
       iconos:[{e:'👯',t:'Símil'},{e:'🪄',t:'Metáfora'},{e:'✨',t:'Metáfora pura'}],
       html:'👯 <span class="clave">Símil</span>: <b>compara</b> dos cosas usando <b>«como»</b>. <i>«La nube es <mark>como</mark> algodón»</i>.<br>🪄 <span class="clave">Metáfora</span>: relaciona dos cosas por su parecido, <b>sin «como»</b>. <i>«Tus dientes <mark>son</mark> perlas»</i>.<br>✨ <span class="clave">Metáfora pura</span>: solo aparece la imagen; la cosa real <b>desaparece</b>. <i>«Las perlas de tu boca»</i> (perlas = dientes, pero no se nombran).',
       truco:{tipo:'Los tres niveles', html:'👯 <span class="letra">SÍMIL</span> = <b>similar</b>, lleva «como».<br>🪄 <span class="letra">METÁFORA</span> = «X <b>es</b> Y», sin «como».<br>✨ <span class="letra">PURA</span> = la X se <b>esconde</b>: solo queda la Y.'}},
      {tipo:'leer', fase:0, titulo:'Personificación e hipérbole',
       iconos:[{e:'🗣️',t:'Personificación'},{e:'🤯',t:'Hipérbole'}],
       html:'🗣️ <span class="clave">Personificación</span>: da una <b>acción humana</b> a algo que no es humano.<div class="poema"><mark>La luna me saluda</mark><br>desde lo alto del cielo.</div>La luna no puede saludar: así la sentimos cercana.<br>🤯 <span class="clave">Hipérbole</span>: <b>exagera</b> para dar fuerza a una idea.<div class="poema"><mark>Lloré un océano entero</mark><br>cuando cerraste la puerta.</div>Nadie llora un océano: la exageración muestra lo grande que es la tristeza.',
       truco:{tipo:'Partir la palabra', html:'<span class="letra">PERSONA</span>-ficación = convertir algo en <b>persona</b> 🗣️.<br><span class="letra">HIPER</span>-bole = «hiper» es <b>súper</b>, como en hipermercado 🤯.'}},
      {tipo:'leer', fase:0, titulo:'La antítesis',
       iconos:[{e:'🌗',t:'Antítesis'}],
       html:'🌗 <span class="clave">Antítesis</span>: junta <b>dos ideas contrarias</b> para que destaquen.<div class="poema">Tu recuerdo <mark>enciende</mark> el día,<br>tu ausencia <mark>apaga</mark> la noche.</div>El contraste entre <b>encender</b> y <b>apagar</b> expresa dos sentimientos opuestos: alegría al recordar y tristeza por la ausencia.',
       truco:{tipo:'Partir la palabra', html:'<span class="letra">ANTI</span>-tesis: «anti» = <b>contrario</b>, como antivirus o antideslizante. Busca <b>parejas opuestas</b>: encender/apagar, cerca/lejos, día/noche 🌗.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué diferencia hay entre símil y metáfora?', a:'<span class="emo">👯 🪄</span>El símil lleva «como»; la metáfora, no'},
         {f:'¿Qué es una metáfora pura?', a:'<span class="emo">✨</span>Solo aparece la imagen; la cosa real no se nombra'},
         {f:'¿Qué figura da acciones humanas a cosas?', a:'<span class="emo">🗣️</span>La personificación'},
         {f:'¿Qué figura junta ideas contrarias?', a:'<span class="emo">🌗</span>La antítesis'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Símil, metáfora o metáfora pura?',
       ayuda:'Busca el «como» y fíjate si aparece la cosa real.',
       grupos:[{id:'s',n:'Símil',e:'👯'},{id:'m',n:'Metáfora',e:'🪄'},{id:'p',n:'Pura',e:'✨'}],
       items:[
         {t:'La nube es como algodón',e:'☁️',g:'s',p:'¿Lleva «como»?'},
         {t:'Tus ojos son estrellas',e:'👀',g:'m',p:'«X es Y», sin «como».'},
         {t:'Los luceros de tu cara',e:'🌟',g:'p',p:'¿Se nombran los ojos? Solo aparece la imagen.'},
         {t:'La nieve es como una manta',e:'❄️',g:'s',p:'Busca el «como».'},
         {t:'Tus dientes son perlas',e:'😁',g:'m',p:'Aparecen los dientes y las perlas, sin «como».'},
         {t:'Las perlas de tu boca',e:'💎',g:'p',p:'Los dientes no aparecen: se esconden.'}
       ],
       regla:'Recuerda: con «como» → símil 👯. «X es Y» → metáfora 🪄. Solo la Y → metáfora pura ✨.',
       bien:'¡Ves las imágenes de los poemas!'},
      {tipo:'unir', fase:1, pregunta:'Une cada figura con su ejemplo',
       ayuda:'Toca una figura y después su ejemplo.',
       pares:[
         {c:'Personificación',e:'🗣️',d:'El reloj me regaña desde la pared del aula',p:'Un reloj no puede regañar.'},
         {c:'Hipérbole',e:'🤯',d:'Mil vidas te esperaría junto a esta ventana',p:'Nadie vive mil vidas: es una exageración.'},
         {c:'Antítesis',e:'🌗',d:'Tan cerca vives de mis ojos, tan lejos quedas de mis manos',p:'Busca la pareja opuesta: cerca/lejos.'},
         {c:'Símil',e:'👯',d:'La nieve es como una manta sobre el campo',p:'Lleva «como».'},
         {c:'Metáfora',e:'🪄',d:'Tus ojos son estrellas en la noche de mi espera',p:'«X son Y», sin «como».'}
       ],
       bien:'¡Las tienes todas!'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'Lloré un océano entero<br>cuando cerraste la puerta.',
       opciones:[{t:'Hipérbole',ok:true},{t:'Símil',ok:false},{t:'Antítesis',ok:false}],
       pistas:['¿Se puede llorar un océano?','Es una exageración: hiper = súper.'],
       bien:'Hipérbole: exagera para mostrar lo enorme que es la tristeza.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'La luna me saluda<br>desde lo alto del cielo.',
       opciones:[{t:'Metáfora pura',ok:false},{t:'Personificación',ok:true},{t:'Hipérbole',ok:false}],
       pistas:['¿Quién saluda normalmente?','Saludar es una acción de personas.'],
       bien:'Personificación: la luna hace algo humano.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'Tu recuerdo enciende el día,<br>tu ausencia apaga la noche.',
       opciones:[{t:'Símil',ok:false},{t:'Personificación',ok:false},{t:'Antítesis',ok:true}],
       pistas:['Busca palabras contrarias.','Encender / apagar, día / noche: anti = contrario.'],
       bien:'Antítesis: dos ideas opuestas que destacan juntas.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Imagen'}
    ]
  });
})();
