/* verso-04 · Figuras de sonido, repetición y orden */
(function () {
  Motor.registrar('verso-04', {
    orbe: 'Orbe del Sonido',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Aliteración y anáfora',
       iconos:[{e:'🔊',t:'Aliteración'},{e:'🔁',t:'Anáfora'}],
       html:'🔊 <span class="clave">Aliteración</span>: se <b>repite un sonido</b> para sugerir una sensación.<div class="poema"><mark>S</mark>uena <mark>s</mark>uave la bri<mark>s</mark>a,<br><mark>s</mark>e duerme la ca<mark>s</mark>a.</div>La «sss» sugiere silencio y calma.<br>🔁 <span class="clave">Anáfora</span>: <b>varios versos empiezan</b> con la misma palabra.<div class="poema"><mark>Tú</mark> llenas mis días.<br><mark>Tú</mark> habitas mis sueños.</div>Repetir «Tú» centra la atención en esa persona.',
       truco:{tipo:'Dónde se repite', html:'🔊 <span class="letra">ALITERACIÓN</span> = se repite un <b>sonido</b> (una letra).<br>🔁 <span class="letra">ANÁFORA</span> = se repite una <b>palabra al Arranque</b> de los versos. A de anáfora, A de arranque.'}},
      {tipo:'leer', fase:0, titulo:'Paralelismo e hipérbaton',
       iconos:[{e:'🪞',t:'Paralelismo'},{e:'🔀',t:'Hipérbaton'}],
       html:'🪞 <span class="clave">Paralelismo</span>: dos versos con la <b>misma estructura</b>.<div class="poema">La lluvia borra caminos.<br>El tiempo borra recuerdos.</div>Así relaciona la lluvia con el tiempo: los dos borran algo.<br>🔀 <span class="clave">Hipérbaton</span>: se <b>cambia el orden normal</b> de las palabras.<div class="poema">De tu voz guardo el eco<br>cuando llega la noche.</div>Lo normal sería «Guardo el eco de tu voz». Empezar por «De tu voz» la destaca.',
       truco:{tipo:'Imagina la figura', html:'🪞 <span class="letra">PARALELISMO</span> = dos <b>líneas paralelas</b>, como dos carriles iguales.<br>🔀 <span class="letra">HIPÉRBATON</span> = la frase <b>mezclada</b>, como cuando barajas cartas.'}},
      {tipo:'leer', fase:0, titulo:'Asíndeton y polisíndeton',
       iconos:[{e:'🏎️',t:'Asíndeton'},{e:'🐌',t:'Polisíndeton'}],
       html:'🏎️ <span class="clave">Asíndeton</span>: se <b>quitan las «y»</b> entre palabras. Acelera el ritmo.<div class="poema">Huyo, corro, tropiezo, caigo;<br>la noche viene detrás.</div>Nos hace sentir la prisa y el miedo.<br>🐌 <span class="clave">Polisíndeton</span>: se <b>repite la «y»</b> muchas veces. Hace el ritmo más lento y pesado.<div class="poema"><mark>Y</mark> cae la tarde <mark>y</mark> cae la lluvia<br><mark>y</mark> cae sobre mí tu ausencia.</div>Acumula lo que cae: se siente el peso de la tristeza.',
       truco:{tipo:'Partir la palabra', html:'<span class="letra">A</span>-síndeton: «a» = <b>sin</b> (como a-normal) → <b>sin «y»</b> 🏎️ rápido.<br><span class="letra">POLI</span>-síndeton: «poli» = <b>muchos</b> (como poli-deportivo) → <b>muchas «y»</b> 🐌 lento.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué figura repite una palabra al principio de los versos?', a:'<span class="emo">🔁</span>La anáfora'},
         {f:'¿Qué figura repite un sonido?', a:'<span class="emo">🔊</span>La aliteración'},
         {f:'¿Qué figura quita las «y» y acelera el ritmo?', a:'<span class="emo">🏎️</span>El asíndeton'},
         {f:'¿Qué figura cambia el orden normal de las palabras?', a:'<span class="emo">🔀</span>El hipérbaton'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada figura con su ejemplo',
       ayuda:'Toca una figura y después el ejemplo que le corresponde.',
       pares:[
         {c:'Aliteración',e:'🔊',d:'Ruge el río entre rocas, rompe la orilla al pasar',p:'Escucha qué sonido se repite: rrr.'},
         {c:'Anáfora',e:'🔁',d:'Lejos quedó mi casa. Lejos quedó mi jardín.',p:'Busca la palabra repetida al principio.'},
         {c:'Paralelismo',e:'🪞',d:'El viento mueve las hojas. Tu voz mueve mis recuerdos.',p:'Dos frases con la misma estructura.'},
         {c:'Hipérbaton',e:'🔀',d:'De mi infancia conservo la luz',p:'Lo normal sería «Conservo la luz de mi infancia».'},
         {c:'Asíndeton',e:'🏎️',d:'Cruzo calles, plazas, puentes',p:'Una lista sin «y».'},
         {c:'Polisíndeton',e:'🐌',d:'Y pasan las horas y pasan los días',p:'Muchas «y».'}
       ],
       bien:'¡Reconoces las 6 figuras!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Asíndeton o polisíndeton?',
       ayuda:'Fíjate en las «y» y toca la figura.',
       grupos:[{id:'a',n:'Asíndeton',e:'🏎️'},{id:'p',n:'Polisíndeton',e:'🐌'}],
       items:[
         {t:'Huyo, corro, tropiezo, caigo',e:'🏃',g:'a',p:'¿Hay alguna «y»?'},
         {t:'Y cae la tarde y cae la lluvia',e:'🌧️',g:'p',p:'Cuenta las «y».'},
         {t:'Cruzo calles, plazas, puentes',e:'🌉',g:'a',p:'Es una lista sin «y».'},
         {t:'Y pasan las horas y pasan los días',e:'⏳',g:'p',p:'Muchas «y» = muchas.'},
         {t:'Salto, giro, lanzo, encesto',e:'🏀',g:'a',p:'Rápido, sin «y».'},
         {t:'Y ríe y salta y canta',e:'🎶',g:'p',p:'La «y» se repite una y otra vez.'}
       ],
       regla:'Recuerda: A-síndeton = sin «y» 🏎️. POLI-síndeton = muchas «y» 🐌.',
       bien:'¡Ya no se te escapan!'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'<mark>Lejos</mark> quedó mi casa.<br><mark>Lejos</mark> quedó mi jardín.<br><mark>Lejos</mark> quedó mi infancia.',
       opciones:[{t:'Anáfora',ok:true},{t:'Aliteración',ok:false},{t:'Hipérbaton',ok:false}],
       pistas:['Mira cómo empieza cada verso.','Se repite una palabra al arranque: A de...'],
       bien:'Anáfora: repetir «Lejos» insiste en todo lo que se ha perdido.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'Ruge el río entre rocas,<br>rompe la orilla al pasar.',
       opciones:[{t:'Polisíndeton',ok:false},{t:'Aliteración',ok:true},{t:'Paralelismo',ok:false}],
       pistas:['Léelo en voz alta: ¿qué sonido oyes mucho?','Se repite la «r»: ruge, río, rocas, rompe...'],
       bien:'Aliteración: la «rrr» suena como el agua con fuerza.'},
      {tipo:'test', fase:2, pregunta:'¿Qué figura hay en estos versos?', texto:'De mi infancia conservo la luz<br>cuando oscurece el día.',
       opciones:[{t:'Asíndeton',ok:false},{t:'Anáfora',ok:false},{t:'Hipérbaton',ok:true}],
       pistas:['¿Cuál sería el orden normal de la frase?','Lo normal: «Conservo la luz de mi infancia». Está barajada 🔀.'],
       bien:'Hipérbaton: empezar por «De mi infancia» destaca la infancia.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Sonido'}
    ]
  });
})();
