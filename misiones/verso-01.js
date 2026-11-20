/* verso-01 · Verso y estrofa */
(function () {
  const POEMA = 'La tarde pinta los montes.<br>El sol se esconde despacio.<br>Una campana nos llama.<br>Mi sombra cruza el camino.<span class="hueco"></span>La luna llega sin ruido.<br>El cielo se llena de estrellas.<br>La brisa mueve las hojas.<br>Mi casa guarda mis sueños.';
  Motor.registrar('verso-01', {
    orbe: 'Orbe del Verso',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'El verso',
       iconos:[{e:'📝',t:'Verso'}],
       html:'Un <span class="clave">verso</span> 📝 es <b>cada línea</b> de un poema escrito en verso.<br>Ejemplo: <i>«La luna mira el jardín.»</i> es un verso.',
       truco:{tipo:'Una línea = un verso', html:'Pon el dedo al principio de una línea y llévalo hasta el final: eso es <span class="letra">UN VERSO</span>. Cuenta las líneas y sabrás cuántos versos hay.'}},
      {tipo:'leer', fase:0, titulo:'La estrofa',
       iconos:[{e:'🗂️',t:'Estrofa'}],
       html:'Una <span class="clave">estrofa</span> 🗂️ es un <b>grupo de versos</b>, separado de otros por un <b>espacio en blanco</b>.<div class="poema">La luna mira el jardín.<br>El viento mueve las flores.<br>La noche guarda mi voz.<span class="hueco"></span>El río sigue su viaje.<br>La rama toca el cristal.<br>La casa duerme en silencio.</div>Este poema tiene <b>6 versos</b> y <b>2 estrofas</b>, de <b>3 versos</b> cada una.',
       truco:{tipo:'Los bloques', html:'Cada <span class="letra">ESTROFA</span> es un <b>bloque</b> 🗂️. El hueco en blanco es la <b>frontera</b>.<br>Para contar estrofas: <b>cuenta los huecos y suma 1</b>.'}},
      {tipo:'leer', fase:0, titulo:'Cómo contarlo',
       iconos:[{e:'1️⃣',t:'Numera'},{e:'⭕',t:'Rodea'}],
       html:'Para analizar un poema, sigue estos pasos:<br>1️⃣ <b>Numera</b> todos los versos a la izquierda (1, 2, 3...).<br>⭕ <b>Rodea</b> cada estrofa.<br>✍️ <b>Completa</b>: «El poema tiene ... versos y ... estrofas».',
       truco:{tipo:'Números y círculos', html:'El <b>último número</b> que escribes = <span class="letra">total de versos</span>.<br>El <b>número de círculos</b> = <span class="letra">total de estrofas</span>.'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué es un verso?', a:'<span class="emo">📝</span>Cada línea de un poema'},
         {f:'¿Qué es una estrofa?', a:'<span class="emo">🗂️</span>Un grupo de versos separado por un espacio en blanco'},
         {f:'¿Cómo cuentas las estrofas?', a:'<span class="emo">🗂️</span>Cuentas los huecos y sumas 1'},
         {f:'Si numeras los versos, ¿qué te dice el último número?', a:'<span class="emo">📝</span>El total de versos'}
       ]},
      {tipo:'clasificar', fase:1, pregunta:'¿Verso o estrofa?',
       ayuda:'Lee y toca si habla de un verso o de una estrofa.',
       grupos:[{id:'v',n:'Verso',e:'📝'},{id:'e',n:'Estrofa',e:'🗂️'}],
       items:[
         {t:'Una sola línea del poema',e:'➖',g:'v',p:'Una línea = un...'},
         {t:'Un grupo de versos',e:'📚',g:'e',p:'Varios versos juntos forman...'},
         {t:'«El sol se esconde despacio.»',e:'☀️',g:'v',p:'Es una sola línea.'},
         {t:'Un bloque separado por un espacio en blanco',e:'⬜',g:'e',p:'Piensa en los bloques.'},
         {t:'«La luna llega sin ruido.»',e:'🌙',g:'v',p:'Cuenta cuántas líneas son: solo una.'},
         {t:'Cuatro líneas seguidas, sin huecos entre ellas',e:'🧱',g:'e',p:'Varias líneas juntas son un bloque.'}
       ],
       regla:'Recuerda: una línea = verso 📝. Un bloque de líneas = estrofa 🗂️.',
       bien:'Ya distingues versos y estrofas.'},
      {tipo:'ordenar', fase:1, pregunta:'Analiza un poema paso a paso',
       ayuda:'Toca los pasos en orden.',
       orden:['Leo el poema entero','Numero los versos a la izquierda','Rodeo cada estrofa','Cuento los versos y las estrofas','Completo las frases'],
       pistas:['Antes de nada, hay que leerlo.','Ahora toca poner números.','Después, los círculos.','Con los números y los círculos ya puedes contar.','Lo último es escribir el resultado.'],
       bien:'¡Así se analiza un poema!'},
      {tipo:'test', fase:2, pregunta:'¿Cuántos versos tiene este poema?', texto:POEMA,
       opciones:[{t:'2 versos',ok:false},{t:'8 versos',ok:true},{t:'4 versos',ok:false}],
       pistas:['Cuenta todas las líneas, de las dos partes.','Hay 4 líneas arriba y 4 abajo.'],
       bien:'8 versos: 4 + 4.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántas estrofas tiene este poema?', texto:POEMA,
       opciones:[{t:'2 estrofas',ok:true},{t:'8 estrofas',ok:false},{t:'1 estrofa',ok:false}],
       pistas:['Busca el espacio en blanco.','Hay 1 hueco: 1 + 1 = ...'],
       bien:'2 estrofas.'},
      {tipo:'test', fase:2, pregunta:'¿Cuántos versos tiene la primera estrofa?', texto:POEMA,
       opciones:[{t:'3 versos',ok:false},{t:'8 versos',ok:false},{t:'4 versos',ok:true}],
       pistas:['Cuenta solo las líneas de arriba, hasta el hueco.','Empieza en «La tarde» y termina en «Mi sombra».'],
       bien:'4 versos, igual que la segunda.'},
      {tipo:'fin', fase:3, orbe:'Orbe del Verso'}
    ]
  });
})();
