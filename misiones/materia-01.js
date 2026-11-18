/* materia-01 · Masa, volumen y densidad */
(function () {
  Motor.registrar('materia-01', {
    orbe: 'Orbe de la Densidad',
    meta: 170,
    pantallas: [
      {tipo:'leer', fase:0, titulo:'¿Qué es la materia?',
       iconos:[{e:'⚛️',t:'Materia'},{e:'🏋️',t:'Masa'},{e:'📦',t:'Volumen'}],
       html:'<span class="clave">Materia</span> ⚛️ es todo lo que tiene <b>masa</b> y <b>volumen</b>: la madera, el plástico, el agua, el aire...<br>🏋️ La <b>masa</b> es la cantidad de materia. Se mide en gramos (g).<br>📦 El <b>volumen</b> es el espacio que ocupa. Se mide en cm³.<br>Masa y volumen son <span class="clave">propiedades generales</span>: todas las sustancias las tienen, así que <b>no sirven para distinguirlas</b>.',
       truco:{tipo:'Compáralo con algo que conoces', html:'🏋️ <span class="letra">MASA</span> = lo que marca la <b>báscula</b>.<br>📦 <span class="letra">VOLUMEN</span> = el <b>hueco</b> que ocupa en la caja.<br>Un balón de baloncesto 🏀 y una bola de bolos pueden ocupar casi lo mismo, ¡pero no pesan igual!'}},
      {tipo:'leer', fase:0, titulo:'La densidad',
       iconos:[{e:'🪨',t:'Densidad'},{e:'➗',t:'d = m ÷ V'}],
       html:'Si <b>dividimos</b> la masa entre el volumen, obtenemos la <span class="clave">densidad</span> 🪨:<br><b style="font-size:1.3em">d = m ÷ V</b><br>Se mide sobre todo en <b>g/cm³</b>. (En el Sistema Internacional es kg/m³, y 1 g/cm³ = 1000 kg/m³).<br>La densidad es una <span class="clave">propiedad característica</span>: cada sustancia tiene la suya y <b>sirve para identificarla</b>.<br>Ejemplo: un cubo de 1 cm³ pesa 2,7 g si es de <b>aluminio</b>, 7,8 g si es de <b>hierro</b> y 11,3 g si es de <b>plomo</b>.',
       truco:{tipo:'El triángulo mágico', html:'Dibuja un triángulo con <span class="letra">m</span> arriba y <span class="letra">d · V</span> abajo. <b>Tapa con el dedo</b> lo que buscas:<br>¿d? → m ÷ V · ¿m? → d × V · ¿V? → m ÷ d'}},
      {tipo:'leer', fase:0, titulo:'Calcular la densidad',
       iconos:[{e:'📏',t:'Medir'},{e:'💧',t:'Sumergir'}],
       html:'Para calcular la densidad necesitas la <b>masa</b> y el <b>volumen</b>.<br>📏 Si el cuerpo es <b>regular</b> (cubo, prisma...), mides y calculas su volumen. Ejemplo: un prisma de 10 × 6 × 2 cm tiene 120 cm³. Si su masa es 852 g: <b>d = 852 ÷ 120 = 7,1 g/cm³</b>. Mirando la tabla, es <b>cinc</b>.<br>💧 Si el cuerpo es <b>irregular</b> (una piedra), lo <b>sumerges en agua</b>: el volumen de agua que sube es su volumen.',
       truco:{tipo:'Lo que sube el agua', html:'Mete la piedra en una probeta con agua 💧. Si el agua pasa de <b>50 a 65 cm³</b>, la piedra tiene <span class="letra">15 cm³</span>. <b>Lo que sube el agua = el volumen de la piedra.</b>'}},
      {tipo:'flash', fase:0, titulo:'Tarjetas flash',
       ayuda:'Intenta responder <b>de memoria</b> y luego toca la tarjeta para comprobarlo. Hay que girar las 4.',
       cartas:[
         {f:'¿Qué es la materia?', a:'<span class="emo">⚛️</span>Todo lo que tiene masa y volumen'},
         {f:'¿Cuál es la fórmula de la densidad?', a:'<span class="emo">➗</span>d = m ÷ V'},
         {f:'¿Por qué la densidad sirve para identificar sustancias?', a:'<span class="emo">🪨</span>Porque cada sustancia tiene la suya'},
         {f:'¿Cómo mides el volumen de una piedra?', a:'<span class="emo">💧</span>Metiéndola en agua y viendo cuánto sube'}
       ]},
      {tipo:'unir', fase:1, pregunta:'Une cada palabra con su significado',
       ayuda:'Toca una palabra de la izquierda y después su significado de la derecha.',
       pares:[
         {c:'Materia',e:'⚛️',d:'Todo lo que tiene masa y volumen',p:'La madera, el agua, el aire...'},
         {c:'Masa',e:'🏋️',d:'Cantidad de materia, en gramos',p:'Lo que marca la báscula.'},
         {c:'Volumen',e:'📦',d:'Espacio que ocupa, en cm³',p:'El hueco en la caja.'},
         {c:'Densidad',e:'🪨',d:'Masa dividida entre volumen',p:'d = m ÷ V.'},
         {c:'g/cm³',e:'📐',d:'Unidad de densidad más usada',p:'Gramos entre centímetros cúbicos.'}
       ],
       bien:'Has unido todas las parejas.'},
      {tipo:'ordenar', fase:1, pregunta:'De menos denso a más denso',
       ayuda:'Toca los metales en orden: del más ligero al más pesado.',
       orden:['Magnesio · 1,7 g/cm³','Aluminio · 2,7 g/cm³','Hierro · 7,8 g/cm³','Plomo · 11,3 g/cm³','Oro · 19,3 g/cm³'],
       pistas:['Busca el número más pequeño.','Después del 1,7 viene el 2,7.','Ahora busca un número entre 7 y 8.','Después viene uno que pasa de 11.','El último es el número más grande de todos.'],
       bien:'Del magnesio, el más ligero, al oro, el más pesado.'},
      {tipo:'test', fase:2, pregunta:'Un objeto tiene 852 g de masa y 120 cm³ de volumen. ¿Cuál es su densidad?',
       opciones:[{t:'7,1 g/cm³',ok:true},{t:'972 g/cm³',ok:false},{t:'0,14 g/cm³',ok:false}],
       pistas:['Usa la fórmula: d = m ÷ V.','Divide 852 entre 120.'],
       bien:'852 ÷ 120 = 7,1 g/cm³. ¡Es cinc!'},
      {tipo:'test', fase:2, pregunta:'Un cubo de hierro de 1 cm³, ¿cuánta masa tiene? (densidad del hierro: 7,8 g/cm³)',
       opciones:[{t:'1 g',ok:false},{t:'7,8 g',ok:true},{t:'78 g',ok:false}],
       pistas:['La densidad dice cuánta masa hay en 1 cm³.','Si 1 cm³ de hierro tiene 7,8 g...'],
       bien:'1 cm³ de hierro tiene 7,8 g.'},
      {tipo:'test', fase:2, pregunta:'¿Por qué la masa no sirve para saber de qué sustancia es algo?',
       opciones:[{t:'Porque la masa no se puede medir',ok:false},{t:'Porque solo la tienen los metales',ok:false},{t:'Porque todas las sustancias tienen masa',ok:true}],
       pistas:['La masa es una propiedad general.','General = la tienen todas las sustancias.'],
       bien:'Es una propiedad general: la tienen todas.'},
      {tipo:'fin', fase:3, orbe:'Orbe de la Densidad'}
    ]
  });
})();
