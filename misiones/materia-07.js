/* materia-07 · Jefe final de la Materia (repaso de toda la saga) */
(function () {
  Motor.registrar('materia-07', {
    orbe: 'Gran Orbe de la Materia',
    meta: 230,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'Plan de combate',
       iconos:[{e:'🪨',t:'Densidad'},{e:'🧊',t:'Estados'},{e:'🌡️',t:'Temperatura'},{e:'🔵',t:'Partículas'}],
       html:'Este es el <span class="clave">jefe final</span>: un repaso de <b>toda la Saga de la Materia</b>.<br>Vas a ver densidad, flotación, estados y cambios de estado, fusión y ebullición, teoría cinética y kelvin.<br>Tranquilo: <b>no hay tiempo límite</b> y las pistas siguen funcionando.',
       truco:{tipo:'Tus 4 armas', html:'➗ <b>d = m ÷ V</b> · 💧 agua = <b>1,0 g/cm³</b> · ⚡ sólido nivel 1, líquido nivel 2, gas nivel 3 · 🌡️ <b>K = °C + 273</b>'}},
      {tipo:'flash', fase:0, titulo:'Calentamiento',
       ayuda:'Responde <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 6.',
       cartas:[
         {f:'¿Cuál es la fórmula de la densidad?', a:'<span class="emo">➗</span>d = m ÷ V'},
         {f:'¿Cuándo flota un sólido en un líquido?', a:'<span class="emo">⬆️</span>Cuando es menos denso que el líquido'},
         {f:'¿Qué son los fluidos?', a:'<span class="emo">🌊</span>Los líquidos y los gases'},
         {f:'¿Qué le pasa a la temperatura mientras algo se funde?', a:'<span class="emo">➖</span>No cambia'},
         {f:'¿Por qué un gas ejerce presión?', a:'<span class="emo">💥</span>Por los choques de sus partículas contra las paredes'},
         {f:'¿A cuántos kelvin funde el agua?', a:'<span class="emo">🧊</span>A 273 K'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
       ayuda:'Toca una palabra de la izquierda y después su significado.',
       pares:[
         {c:'Densidad',e:'🪨',d:'Masa dividida entre volumen',p:'d = m ÷ V.'},
         {c:'Condensación',e:'❄️',d:'Gas → líquido',p:'Las gotas en el espejo del baño.'},
         {c:'Sublimación',e:'🔥',d:'Sólido → gas',p:'Se salta un nivel subiendo.'},
         {c:'Cero absoluto',e:'🥶',d:'0 K, partículas quietas',p:'Es −273 °C.'},
         {c:'Ebullición',e:'♨️',d:'Vaporización en todo el líquido, con burbujas',p:'Lo que pasa en la olla.'}
       ],
       bien:'Has unido todas las parejas.'},
      {tipo:'clasificar', fase:1, pregunta:'¿Sólido, líquido o gas?',
       ayuda:'Lee la pista y toca el estado.',
       grupos:[{id:'s',n:'Sólido',e:'🧊'},{id:'l',n:'Líquido',e:'💧'},{id:'g',n:'Gas',e:'💨'}],
       items:[
         {t:'Volumen y forma fijos',e:'📦',g:'s',p:'Es como un balón: siempre igual.'},
         {t:'Coge la forma del vaso, pero su volumen no cambia',e:'🥤',g:'l',p:'Volumen fijo, forma no.'},
         {t:'Ni forma ni volumen fijos',e:'🌫️',g:'g',p:'Se reparte por toda la habitación.'},
         {t:'El butano a 20 °C (hierve a −0,5 °C)',e:'🔥',g:'g',p:'20 °C está por encima de su T. de ebullición.'},
         {t:'Partículas muy juntas que solo vibran',e:'〰️',g:'s',p:'Es el equipo en formación.'},
         {t:'El mercurio a 20 °C (funde a −39 °C, hierve a 357 °C)',e:'🌡️',g:'l',p:'20 °C está entre las dos temperaturas.'}
       ],
       regla:'Recuerda: 🧊 forma y volumen fijos · 💧 solo volumen fijo · 💨 nada fijo. Y el edificio de 3 pisos para las temperaturas.',
       bien:'¡Dominas los estados!'},
      {tipo:'test', fase:2, pregunta:'Una piedra tiene 30 g de masa y 10 cm³ de volumen. ¿Cuál es su densidad?',
       opciones:[{t:'300 g/cm³',ok:false},{t:'3 g/cm³',ok:true},{t:'0,3 g/cm³',ok:false}],
       pistas:['d = m ÷ V.','Divide 30 entre 10.'],
       bien:'30 ÷ 10 = 3 g/cm³.'},
      {tipo:'test', fase:2, pregunta:'Un trozo de madera de 0,6 g/cm³ en agua...',
       opciones:[{t:'Flota',ok:true},{t:'Se hunde',ok:false},{t:'Se disuelve',ok:false}],
       pistas:['Compara con el agua: 1,0 g/cm³.','0,6 es menos que 1.'],
       bien:'Flota, porque es menos denso que el agua.'},
      {tipo:'test', fase:2, pregunta:'Las gotas que aparecen en una botella fría sacada de la nevera son...',
       opciones:[{t:'Fusión',ok:false},{t:'Sublimación',ok:false},{t:'Condensación',ok:true}],
       pistas:['El vapor de agua del aire toca la botella fría.','El gas pasa a líquido.'],
       bien:'Condensación: el vapor del aire pasa a líquido.'},
      {tipo:'test', fase:2, pregunta:'Si calentamos un gas en un recipiente cerrado, la presión...',
       opciones:[{t:'Baja',ok:false},{t:'Aumenta',ok:true},{t:'No cambia',ok:false}],
       pistas:['Más calor → más rápido → más choques...','Más choques significa más presión.'],
       bien:'Aumenta: hay más choques contra las paredes.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántos kelvin son 50 °C?',
       opciones:[{t:'223 K',ok:false},{t:'50 K',ok:false},{t:'323 K',ok:true}],
       pistas:['Hacia kelvin se suma 273.','273 + 50 = ...'],
       bien:'273 + 50 = 323 K.'},
      {tipo:'fin', fase:3, orbe:'Gran Orbe de la Materia'}
    ]
  });
})();
