/* materia-06 · La escala Kelvin */
(function () {
  Motor.registrar('materia-06', {
    orbe: 'Orbe del Cero Absoluto',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'El cero absoluto',
       iconos:[{e:'🥶',t:'Cero absoluto'},{e:'🌡️',t:'Kelvin (K)'}],
       html:'Según la teoría cinética, la temperatura depende de la <b>energía de las partículas</b>.<br>Entonces, el <b>cero de temperatura</b> debería estar donde las partículas <b>no tienen energía</b>: totalmente <b>quietas</b>.<br>Ese es el <span class="clave">cero absoluto</span> 🥶, el cero de la <span class="clave">escala absoluta</span>, cuya unidad es el <b>kelvin (K)</b>.<br><b>0 K = −273 °C</b> (más exacto: −273,15 °C).',
       truco:{tipo:'Más frío, imposible', html:'En el <span class="letra">cero absoluto</span> las partículas estarían <b>paradas del todo</b> 🧍. No se puede bajar de ahí: <b>no hay temperaturas negativas en kelvin</b>.'}},
      {tipo:'leer', fase:0, titulo:'Pasar de °C a K',
       iconos:[{e:'➕',t:'Sumar 273'},{e:'➖',t:'Restar 273'}],
       html:'Para pasar de grados centígrados a kelvin se usa esta fórmula:<br><b style="font-size:1.3em">K = °C + 273</b><br>Así, el agua <b>funde a 273 K</b> (0 °C) y <b>hierve a 373 K</b> (100 °C).<br>Ojo: en kelvin no se dice «grados». Se escribe <b>273 K</b>, no 273 °K.',
       truco:{tipo:'Sumar o restar', html:'De °C a <span class="letra">K</span> → <b>SUMA 273</b> ➕.<br>De K a <span class="letra">°C</span> → <b>RESTA 273</b> ➖.<br>Pista: el número en kelvin siempre es <b>el más grande</b>.'}},
      {tipo:'leer', fase:0, titulo:'Dos ejemplos resueltos',
       iconos:[{e:'🏠',t:'Habitación'},{e:'🧪',t:'Laboratorio'}],
       html:'🏠 Una habitación está a <b>20 °C</b>. ¿Cuántos kelvin son?<br>K = 273 + 20 = <b>293 K</b>.<br>🧪 Algo está a <b>120 K</b>. ¿Cuántos grados centígrados son?<br>°C = K − 273 = 120 − 273 = <b>−153 °C</b>.',
       truco:{tipo:'Comprueba siempre', html:'Después de calcular, mira si tiene sentido: el número en <span class="letra">K</span> tiene que ser <b>273 más grande</b> que el de °C. 293 − 20 = 273 ✅'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿A cuántos °C está el cero absoluto?', a:'<span class="emo">🥶</span>A −273 °C'},
         {f:'¿Cuál es la fórmula para pasar a kelvin?', a:'<span class="emo">➕</span>K = °C + 273'},
         {f:'¿A cuántos kelvin hierve el agua?', a:'<span class="emo">♨️</span>A 373 K'},
         {f:'¿Cómo estarían las partículas en el cero absoluto?', a:'<span class="emo">🧍</span>Totalmente quietas'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada temperatura con su pareja',
       ayuda:'Toca una temperatura en °C y después su valor en kelvin.',
       pares:[
         {c:'0 °C',e:'🧊',d:'273 K',p:'Suma 273 a 0.'},
         {c:'100 °C',e:'♨️',d:'373 K',p:'Suma 273 a 100.'},
         {c:'20 °C',e:'🏠',d:'293 K',p:'273 + 20.'},
         {c:'−273 °C',e:'🥶',d:'0 K',p:'Es el cero absoluto.'},
         {c:'27 °C',e:'☀️',d:'300 K',p:'273 + 27.'}
       ],
       bien:'¡Ya conviertes temperaturas!'},
      {tipo:'clasificar', fase:1, pregunta:'¿Sumo o resto 273?',
       ayuda:'Lee la conversión y toca lo que hay que hacer.',
       grupos:[{id:'s',n:'Sumo 273',e:'➕'},{id:'r',n:'Resto 273',e:'➖'}],
       items:[
         {t:'Paso 25 °C a kelvin',e:'🌡️',g:'s',p:'De °C a K...'},
         {t:'Paso 300 K a grados centígrados',e:'🌡️',g:'r',p:'De K a °C...'},
         {t:'Paso −10 °C a kelvin',e:'🌡️',g:'s',p:'Aunque sea negativo, de °C a K siempre se suma.'},
         {t:'Paso 120 K a grados centígrados',e:'🌡️',g:'r',p:'Es el ejemplo del laboratorio: 120 − 273.'},
         {t:'Paso 37 °C a kelvin',e:'🌡️',g:'s',p:'Vamos hacia K, que es el número grande.'},
         {t:'Paso 373 K a grados centígrados',e:'🌡️',g:'r',p:'Vamos hacia °C, que es el número pequeño.'}
       ],
       regla:'Recuerda: hacia K ➕ suma 273 · hacia °C ➖ resta 273.',
       bien:'¡Ya sabes cuándo sumar y cuándo restar!'},
      {tipo:'test', fase:2, pregunta:'¿Cuántos kelvin son 37 °C?',
       opciones:[{t:'236 K',ok:false},{t:'310 K',ok:true},{t:'37 K',ok:false}],
       pistas:['De °C a K se suma 273.','273 + 37 = ...'],
       bien:'273 + 37 = 310 K.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántos grados centígrados son 250 K?',
       opciones:[{t:'−23 °C',ok:true},{t:'523 °C',ok:false},{t:'23 °C',ok:false}],
       pistas:['De K a °C se resta 273.','250 − 273 da un número negativo.'],
       bien:'250 − 273 = −23 °C.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué el cero absoluto es el cero de la escala Kelvin?',
       opciones:[{t:'Porque el agua se congela ahí',ok:false},{t:'Porque las partículas no tendrían energía',ok:true},{t:'Porque lo eligió un científico al azar',ok:false}],
       pistas:['El agua se congela a 0 °C, no a 0 K.','En el cero absoluto, las partículas estarían quietas.'],
       bien:'Las partículas no tendrían energía: estarían quietas.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Cero Absoluto'}
    ]
  });
})();
