/* ==========================================================
   Motor común: voz, progreso, pantallas de misión e inicio.
   Las misiones solo aportan datos (misiones/<id>.js).
   ========================================================== */
(function () {
  'use strict';
  /* ---------- APP INSTALABLE (PWA) ---------- */
  try { if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {})); } catch (e) {}
  let avisoInstalar = null; // evento de instalación de Android / ordenador
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); avisoInstalar = e; mostrarInstalar(); });
  const yaInstalada = () => { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch (e) { return false; } };
  const esIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  function mostrarInstalar() {
    const caja = document.getElementById('instalar'); if (!caja || yaInstalada()) return;
    if (avisoInstalar) {
      caja.innerHTML = '<button class="btn-pista boton" id="btn-instalar">📲 Instalar Luc Z</button>';
      caja.hidden = false;
      document.getElementById('btn-instalar').onclick = async () => {
        try { avisoInstalar.prompt(); await avisoInstalar.userChoice; } catch (e) {}
        avisoInstalar = null; caja.hidden = true;
      };
    } else if (esIOS()) {
      caja.innerHTML = '<p class="ayuda-instalar">📲 <b>Instálala:</b> pulsa <b>Compartir</b> <span aria-hidden="true">⬆️</span> y luego <b>«Añadir a pantalla de inicio»</b>.</p>';
      caja.hidden = false;
    }
  }
  const $ = id => document.getElementById(id);
  const mezclar = a => { let m; do { m = [...a].sort(() => Math.random() - .5); } while (a.length > 1 && m.join() === a.join()); return m; };
  const FASES = [{ n: 'Aprende', i: '📖' }, { n: 'Juega', i: '🎮' }, { n: 'Reto', i: '⚔️' }, { n: 'Orbe', i: '🔶' }];
  const DATOS = {};

  /* ---------- PROGRESO (localStorage siempre en try/catch) ---------- */
  const Progreso = (function () {
    const CLAVE = 'misionesLuc';
    let memoria = null; // por si localStorage no está disponible
    function leer() {
      try {
        const t = localStorage.getItem(CLAVE);
        if (t) { const o = JSON.parse(t); if (o && typeof o.m === 'object' && o.m) return o; }
      } catch (e) {}
      return memoria || { v: 1, m: {} };
    }
    function escribir(o) {
      memoria = o;
      try { localStorage.setItem(CLAVE, JSON.stringify(o)); } catch (e) {}
    }
    return {
      completar(id, poder) {
        const o = leer(), a = o.m[id];
        o.m[id] = { poder: Math.max(Number(poder) || 0, a && Number(a.poder) || 0) }; // nunca resta
        escribir(o);
      },
      hecha: id => !!leer().m[id],
      poderTotal: () => Object.values(leer().m).reduce((s, x) => s + (Number(x.poder) || 0), 0),
      orbesDe: saga => saga.misiones.filter(x => !!leer().m[x.id]).length
    };
  })();

  /* ---------- VOZ ---------- */
  function romano(s) { const v = { I: 1, V: 5, X: 10, L: 50, C: 100 }; let t = 0; for (let k = 0; k < s.length; k++) { const a = v[s[k]], b = v[s[k + 1]] || 0; t += a < b ? -a : a; } return t; }
  function paraVoz(t) { return t.replace(/\b[IVXLC]+\b/g, m => String(romano(m))); }
  let voces = [], vozElegida = null;
  function puntuar(v) {
    const n = v.name.toLowerCase(); let s = 0;
    if (/natural|neural|online/.test(n)) s += 50;
    if (/premium|enhanced|mejorad|siri/.test(n)) s += 40;
    if (/google/.test(n)) s += 20;
    if (v.lang === 'es-ES') s += 10; else if (v.lang.toLowerCase().startsWith('es')) s += 5;
    if (/compact|espeak/.test(n)) s -= 30;
    return s;
  }
  function cargarVoces() {
    try { voces = speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith('es')).sort((a, b) => puntuar(b) - puntuar(a)); } catch (e) { voces = []; }
    let g = null; try { g = localStorage.getItem('vozLuc'); } catch (e) {}
    vozElegida = voces.find(v => v.name === g) || voces[0] || null;
    const sel = $('voces'); if (!sel) return;
    sel.innerHTML = voces.length ? voces.map(v => `<option ${v === vozElegida ? 'selected' : ''}>${v.name}</option>`).join('') : '<option>Voz del sistema</option>';
  }
  function hablar(t, encolar) {
    try {
      if (!encolar) speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(paraVoz(t));
      if (vozElegida) { u.voice = vozElegida; u.lang = vozElegida.lang; } else u.lang = 'es-ES';
      u.rate = 0.95; speechSynthesis.speak(u);
    } catch (e) {}
  }
  function callar() { try { speechSynthesis.cancel(); } catch (e) {} }
  function iniciarVoz() {
    $('voces').onchange = e => {
      vozElegida = voces.find(v => v.name === e.target.value) || vozElegida;
      try { localStorage.setItem('vozLuc', vozElegida.name); } catch (err) {}
      hablar('Hola, Luc. ¿Te gusta esta voz?');
    };
    try { speechSynthesis.onvoiceschanged = cargarVoces; } catch (e) {}
    cargarVoces();
  }

  /* ---------- CABECERA COMÚN ---------- */
  /* cab = { ante, titulo, entradilla, conBarra }  ·  sin cab: solo la barra superior */
  function pintarCabecera(cab, activo) {
    const menu = [['index.html', 'Inicio', 'inicio']].concat((window.SAGAS || []).map(s => ['index.html#' + s.asig, s.asigNombre, s.asig]))
      .map(([h, t, k]) => `<a href="${h}" class="${k === activo ? 'activo' : ''}">${t}</a>`).join('');
    let html = `<div class="barra-sup"><div class="dentro">
        <a class="marca" href="index.html"><img src="img/logo-luc-z.png" alt="">Luc <b>Z</b></a>
        <nav class="menu" aria-label="Menú">${menu}</nav>
        <div class="chips"><span class="chip">⚡ Poder <b id="ki">0</b></span>
        <label class="chip">🔊 Voz <select id="voces" aria-label="Elegir voz"></select></label></div>
      </div></div>`;
    if (cab) {
      const pal = cab.titulo.split(' '), ult = pal.pop();
      html += `<div class="cabeza"><p class="ante">${cab.ante}</p>
        <h1 class="titular">${pal.join(' ')} <em>${ult}</em></h1>
        ${cab.entradilla ? `<p class="entradilla">${cab.entradilla}</p>` : ''}
        ${cab.conBarra ? '<div class="progreso"><div class="barra" aria-hidden="true"><div class="relleno" id="relleno"></div></div></div>' : ''}</div>`;
    }
    $('cab').innerHTML = html;
    iniciarVoz();
  }
  const buscarMision = id => { for (const s of window.SAGAS) { const k = s.misiones.findIndex(m => m.id === id); if (k >= 0) return { saga: s, n: k + 1, m: s.misiones[k] }; } return null; };
  const enlaceMision = id => 'mision.html?m=' + encodeURIComponent(id);

  /* ---------- MISIÓN ---------- */
  function iniciarMision() {
    const id = new URLSearchParams(location.search).get('m');
    const info = id && buscarMision(id); // solo ids del catálogo
    if (!info) return avisoError('No encuentro esa misión.');
    document.title = `${info.saga.nombre} · Misión ${info.n}`;
    document.body.dataset.asig = info.saga.asig;
    pintarCabecera({ ante: `${info.saga.asigNombre} · ${info.saga.nombre} · Misión ${info.n}`, titulo: info.m.titulo, conBarra: true }, info.saga.asig);
    const s = document.createElement('script');
    s.src = `misiones/${info.m.id}.js`;
    s.onload = () => DATOS[id] ? jugar(info, DATOS[id]) : avisoError('La misión está vacía.');
    s.onerror = () => avisoError('Esta misión todavía no está lista.');
    document.head.appendChild(s);
  }
  function avisoError(txt) {
    if (!$('cab').innerHTML) pintarCabecera(null, '');
    $('agenda') && ($('agenda').innerHTML = '');
    $('app').innerHTML = `<div class="tarjeta centro"><h2>${txt}</h2>
      <div class="acciones" style="justify-content:center"><a class="boton btn" href="index.html">Volver al mapa</a></div></div>`;
  }

  function jugar(info, D) {
    const pantallas = D.pantallas, META = D.meta, app = $('app');
    let i = 0, ki = 0; const base = Progreso.poderTotal();

    function agenda() {
      const f = pantallas[i].fase;
      $('agenda').innerHTML = FASES.map((x, k) => `<div class="paso ${k < f ? 'hecho' : k === f ? 'actual' : ''}"><span class="ico">${k < f ? '✅' : x.i}</span>${x.n}</div>`).join('');
    }
    function sumarKi(n) { ki += n; $('ki').textContent = base + ki; $('relleno').style.width = Math.min(100, ki / META * 100) + '%'; }
    function contador() { const p = pantallas[i]; const m = pantallas.filter(x => x.fase === p.fase); return `${FASES[p.fase].n} · ${m.indexOf(p) + 1} de ${m.length}`; }
    function cabecera(t) {
      const p = pantallas[i]; // texto: poema o versos que se muestran bajo el título (Lengua)
      return `<div class="fila"><div class="contador">${contador()}</div><button class="voz" id="voz">🔊 Escuchar</button></div><h2>${t}</h2>${p.texto ? `<div class="poema" id="poema">${p.texto}</div>` : ''}`;
    }
    function siguiente() { callar(); i++; render(); window.scrollTo(0, 0); }
    function pista(el, texto, n) { el.className = 'mensaje pista'; el.innerHTML = `<span class="nivel">Pista ${n}</span>${texto}`; }
    function exito(el, texto) { el.className = 'mensaje bien'; el.textContent = '✓ ¡Bien hecho! ' + texto; }

    const TIPOS = {
      leer(p) {
        const iconos = p.iconos ? `<div class="iconos">${p.iconos.map(x => `<div class="icono">${x.e}<span>${x.t}</span></div>`).join('')}</div>` : '';
        app.innerHTML = `<div class="tarjeta">${cabecera(p.titulo)}${iconos}<div id="txt">${p.html}</div>
          ${p.img ? `<figure id="fig" class="${p.ajustada ? 'ajustada' : ''}"><img src="${p.img}" alt="" loading="lazy"><figcaption>${p.pie}</figcaption></figure>` : ''}
          <div class="truco"><div class="truco-tit">🧠 Truco de memoria · ${p.truco.tipo}</div><div id="truco">${p.truco.html}</div></div>
          <div class="acciones"><button class="btn" id="sig">Entendido ➜</button></div></div>`;
        const fig = $('fig'), img = app.querySelector('img');
        if (img) img.onerror = () => { fig.style.display = 'none'; }; // referencia directa: la pantalla puede haber cambiado ya
        $('voz').onclick = () => hablar(p.titulo + '. ' + $('txt').innerText + '. Truco de memoria: ' + $('truco').innerText);
        $('sig').onclick = () => { sumarKi(5); siguiente(); };
      },

      flash(p) {
        app.innerHTML = `<div class="tarjeta">${cabecera(p.titulo)}<p class="ayuda">${p.ayuda}</p><div class="flash" id="cartas"></div>
          <div class="acciones"><button class="btn" id="sig" disabled>Siguiente ➜</button></div></div>`;
        let vueltas = 0;
        p.cartas.forEach(c => {
          const b = document.createElement('button'); b.className = 'carta'; b.innerHTML = c.f;
          b.onclick = () => {
            if (b.classList.contains('vuelta')) { b.classList.remove('vuelta'); b.innerHTML = c.f; return; }
            if (!b.dataset.vista) { b.dataset.vista = 1; vueltas++; }
            b.classList.add('vuelta'); b.innerHTML = c.a; hablar(b.innerText);
            if (vueltas === p.cartas.length) $('sig').disabled = false;
          };
          $('cartas').appendChild(b);
        });
        $('voz').onclick = () => hablar(p.titulo + '. ' + 'Intenta responder de memoria y luego toca la tarjeta para comprobarlo.');
        $('sig').onclick = () => { sumarKi(10); siguiente(); };
      },

      ordenar(p) {
        app.innerHTML = `<div class="tarjeta">${cabecera(p.pregunta)}<p class="ayuda">${p.ayuda}</p>
          <ol class="cadena" id="cad"></ol><div id="ops"></div><div class="mensaje" id="msg"></div>
          <div class="acciones"><button class="btn btn-pista" id="pis">💡 Pedir pista</button>
          <button class="btn" id="sig" style="display:none">Siguiente ➜</button></div></div>`;
        const mezcla = mezclar(p.orden);
        let n = 0, nivel = 0; const botones = {};
        function darPista() {
          nivel++;
          if (nivel === 1) pista($('msg'), n === 0 ? 'Busca lo que pasó primero de todo.' : '¿Qué pasó justo después de «' + p.orden[n - 1] + '»?', 1);
          else if (nivel === 2) pista($('msg'), p.pistas[n], 2);
          else { botones[p.orden[n]].classList.add('guia'); pista($('msg'), 'Mira la frase que brilla: esa es la siguiente. Tócala.', 3); }
        }
        mezcla.forEach(t => {
          const b = document.createElement('button'); b.className = 'opcion'; b.textContent = t; botones[t] = b;
          b.onclick = () => {
            if (t === p.orden[n]) {
              n++; nivel = 0; b.remove();
              $('cad').insertAdjacentHTML('beforeend', `<li><span class="num">${n}</span>${t}</li>`);
              $('msg').className = 'mensaje';
              if (n === p.orden.length) { exito($('msg'), 'Cadena completa. ' + p.bien); $('pis').style.display = 'none'; $('sig').style.display = ''; sumarKi(20); }
            } else darPista();
          };
          $('ops').appendChild(b);
        });
        $('pis').onclick = darPista;
        $('voz').onclick = () => hablar(p.pregunta + '. ' + p.ayuda + ' ' + mezcla.join('. '));
        $('sig').onclick = siguiente;
      },

      multi(p) {
        app.innerHTML = `<div class="tarjeta">${cabecera(p.pregunta)}<p class="ayuda">${p.ayuda}</p>
          <div id="ops"></div><div class="mensaje" id="msg"></div>
          <div class="acciones"><button class="btn" id="comp">Comprobar</button>
          <button class="btn btn-pista" id="pis">💡 Pedir pista</button>
          <button class="btn" id="sig" style="display:none">Siguiente ➜</button></div></div>`;
        const sel = new Set(), botones = []; let hecho = false, nivel = 0;
        const total = p.opciones.filter(o => o.ok).length;
        const buenasSel = () => [...sel].filter(k => p.opciones[k].ok).length;
        function darPista(extra) {
          nivel++;
          if (nivel === 1) pista($('msg'), (extra || '') + `Llevas ${buenasSel()} de ${total}. Te faltan ${total - buenasSel()}.`, 1);
          else if (nivel === 2) pista($('msg'), (extra || '') + p.pistaTruco, 2);
          else {
            const k = p.opciones.findIndex((o, j) => o.ok && !sel.has(j)); if (k >= 0) botones[k].classList.add('guia');
            pista($('msg'), (extra || '') + 'Mira la opción que brilla: ' + (p.pistaGuia || 'es una de las correctas') + '. Tócala.', 3);
          }
        }
        p.opciones.forEach((o, k) => {
          const b = document.createElement('button'); b.className = 'opcion'; b.textContent = o.t;
          b.onclick = () => { if (hecho || b.classList.contains('mal')) return; b.classList.toggle('sel'); b.classList.remove('guia'); sel.has(k) ? sel.delete(k) : sel.add(k); };
          botones.push(b); $('ops').appendChild(b);
        });
        $('comp').onclick = () => {
          let malas = 0;
          [...sel].forEach(k => { if (!p.opciones[k].ok) { malas++; sel.delete(k); botones[k].classList.remove('sel'); botones[k].classList.add('mal'); } });
          if (malas === 0 && buenasSel() === total) {
            hecho = true; sel.forEach(k => { botones[k].classList.remove('sel'); botones[k].classList.add('bien'); });
            exito($('msg'), p.bien); ['comp', 'pis'].forEach(x => $(x).style.display = 'none'); $('sig').style.display = ''; sumarKi(20);
          } else darPista(malas ? 'He tachado las que no son. ' + p.pistaMal + ' ' : '');
        };
        $('pis').onclick = () => darPista('');
        $('voz').onclick = () => hablar(p.pregunta + '. ' + p.ayuda + ' ' + p.opciones.map(o => o.t).join('. '));
        $('sig').onclick = siguiente;
      },

      unir(p) {
        app.innerHTML = `<div class="tarjeta">${cabecera(p.pregunta)}<p class="ayuda">${p.ayuda}</p>
          <div class="unir"><div class="col" id="izq"></div><div class="col" id="der"></div></div>
          <div class="mensaje" id="msg"></div>
          <div class="acciones"><button class="btn btn-pista" id="pis">💡 Pedir pista</button>
          <button class="btn" id="sig" style="display:none">Siguiente ➜</button></div></div>`;
        let elegido = null, hechas = 0, nivel = 0; const bi = [], bd = [];
        function darPista() {
          if (elegido === null) { pista($('msg'), 'Primero toca una palabra de la izquierda y te ayudo con ella.', 1); return; }
          nivel++; const x = p.pares[elegido];
          if (nivel === 1) pista($('msg'), 'Lee despacio. ¿Qué significa «' + x.c + '»?', 1);
          else if (nivel === 2) pista($('msg'), x.p, 2);
          else { bd[elegido].classList.add('guia'); pista($('msg'), 'Mira el significado que brilla: es la pareja de «' + x.c + '».', 3); }
        }
        p.pares.forEach((x, k) => {
          const b = document.createElement('button'); b.className = 'u-item';
          b.innerHTML = `<span class="emo">${x.e}</span>${x.c}`;
          b.onclick = () => {
            if (b.classList.contains('hecha')) return;
            bi.forEach(o => o.classList.remove('sel')); bd.forEach(o => o.classList.remove('guia'));
            b.classList.add('sel'); elegido = k; nivel = 0; $('msg').className = 'mensaje'; hablar(x.c);
          };
          bi[k] = b; $('izq').appendChild(b);
        });
        mezclar(p.pares.map((x, k) => k)).forEach(k => {
          const b = document.createElement('button'); b.className = 'u-item'; b.textContent = p.pares[k].d;
          b.onclick = () => {
            if (b.classList.contains('hecha')) return;
            if (elegido === null) { pista($('msg'), 'Primero toca una palabra de la izquierda.', 1); return; }
            if (k === elegido) {
              bi[k].classList.remove('sel'); bi[k].classList.add('hecha');
              b.classList.remove('guia'); b.classList.add('hecha'); b.innerHTML = `<span class="emo">${p.pares[k].e}</span>${p.pares[k].d}`;
              elegido = null; nivel = 0; hechas++; sumarKi(4);
              if (hechas === p.pares.length) { exito($('msg'), p.bien); $('pis').style.display = 'none'; $('sig').style.display = ''; }
              else { $('msg').className = 'mensaje bien'; $('msg').textContent = '✓ ¡Pareja!'; }
            } else darPista();
          };
          bd[k] = b; $('der').appendChild(b);
        });
        $('pis').onclick = darPista;
        $('voz').onclick = () => hablar(p.pregunta + '. ' + p.ayuda);
        $('sig').onclick = siguiente;
      },

      clasificar(p) {
        app.innerHTML = `<div class="tarjeta">${cabecera(p.pregunta)}<p class="ayuda">${p.ayuda}</p>
          <div class="contador" id="cuenta"></div><div class="carta-grande" id="carta"></div>
          <div class="cubos" id="cubos" style="--n:${p.grupos.length}"></div><div class="mensaje" id="msg"></div>
          <div class="listas" style="--n:${p.grupos.length}">${p.grupos.map(g => `<div class="lista"><div class="lista-tit">${g.e} ${g.n}</div><ul id="l-${g.id}"></ul></div>`).join('')}</div>
          <div class="acciones"><button class="btn btn-pista" id="pis">💡 Pedir pista</button>
          <button class="btn" id="sig" style="display:none">Siguiente ➜</button></div></div>`;
        const orden = mezclar(p.items.map((x, k) => k)); let pos = 0, nivel = 0; const cubos = {};
        const actual = () => p.items[orden[pos]];
        function mostrar() { const x = actual(); $('carta').innerHTML = `<span class="emo">${x.e}</span>${x.t}`; $('cuenta').textContent = `Acción ${pos + 1} de ${p.items.length}`; }
        function darPista() {
          if (pos >= p.items.length) return; nivel++; const x = actual();
          if (nivel === 1) pista($('msg'), x.p, 1); else if (nivel === 2) pista($('msg'), p.regla, 2);
          else { cubos[x.g].classList.add('guia'); pista($('msg'), 'Mira el botón que brilla: esa es la respuesta.', 3); }
        }
        function elegir(g) {
          if (pos >= p.items.length) return; const x = actual();
          if (g === x.g) {
            $('l-' + g).insertAdjacentHTML('beforeend', `<li>${x.e} ${x.t}</li>`);
            Object.values(cubos).forEach(c => c.classList.remove('guia')); nivel = 0; pos++; sumarKi(3);
            if (pos === p.items.length) {
              $('carta').innerHTML = '<span class="emo">🏆</span>¡Todas clasificadas!'; $('cuenta').textContent = '';
              $('cubos').style.display = 'none'; exito($('msg'), p.bien); $('pis').style.display = 'none'; $('sig').style.display = '';
            } else { $('msg').className = 'mensaje bien'; $('msg').textContent = '✓ ¡Correcto!'; mostrar(); }
          } else darPista();
        }
        p.grupos.forEach(g => {
          const b = document.createElement('button'); b.className = 'cubo'; b.innerHTML = `<span class="emo">${g.e}</span>${g.n}`;
          b.onclick = () => elegir(g.id); cubos[g.id] = b; $('cubos').appendChild(b);
        });
        mostrar();
        $('pis').onclick = darPista;
        $('voz').onclick = () => hablar(p.pregunta + '. ' + p.ayuda + ' ' + $('carta').innerText);
        $('sig').onclick = siguiente;
      },

      test(p) {
        app.innerHTML = `<div class="tarjeta">${cabecera(p.pregunta)}<div id="ops"></div><div class="mensaje" id="msg"></div>
          <div class="acciones"><button class="btn btn-pista" id="pis">💡 Pedir pista</button>
          <button class="btn" id="sig" style="display:none">Siguiente ➜</button></div></div>`;
        let hecho = false, nivel = 0; const botones = [];
        function darPista() {
          if (hecho) return; nivel++;
          if (nivel <= p.pistas.length) pista($('msg'), p.pistas[nivel - 1], nivel);
          else { botones[p.opciones.findIndex(o => o.ok)].classList.add('guia'); pista($('msg'), 'Mira la opción que brilla: esa es la buena. Tócala.', nivel); }
        }
        p.opciones.forEach(o => {
          const b = document.createElement('button'); b.className = 'opcion'; b.textContent = o.t; botones.push(b);
          b.onclick = () => {
            if (hecho || b.classList.contains('mal')) return;
            if (o.ok) { hecho = true; b.classList.remove('guia'); b.classList.add('bien'); exito($('msg'), p.bien); $('pis').style.display = 'none'; $('sig').style.display = ''; sumarKi(15); }
            else { b.classList.add('mal'); darPista(); }
          };
          $('ops').appendChild(b);
        });
        $('pis').onclick = darPista;
        $('voz').onclick = () => hablar(p.pregunta + '. ' + p.opciones.map(o => o.t).join('. '));
        $('sig').onclick = siguiente;
      },

      fin(p) {
        Progreso.completar(info.m.id, ki); // el nivel de poder solo sube, nunca resta
        const S = info.saga, hechas = Progreso.orbesDe(S);
        const orbes = Array.from({ length: S.total }, (_, k) => {
          const m = S.misiones[k]; return `<div class="orbe ${m && Progreso.hecha(m.id) ? 'on' : ''}" title="Misión ${k + 1}"></div>`;
        }).join('');
        const sig = S.misiones[info.n]; // siguiente misión disponible
        const cola = info.n < S.total ? `Luego, la Misión ${info.n + 1}.` : 'Luego, a por la siguiente saga.';
        const botonSig = sig
          ? `<a class="boton btn" href="${enlaceMision(sig.id)}">Misión ${info.n + 1} ➜</a>`
          : (info.n < S.total ? `<button class="btn" disabled>Misión ${info.n + 1} (próximamente)</button>` : '');
        app.innerHTML = `<div class="tarjeta centro">
          <div class="contador">Misión completada</div>
          <h2>¡Misión ${info.n} superada, Luc!</h2>
          <p>Has conseguido el <b class="premio">${D.orbe}</b> y en esta misión has ganado <b class="premio">${ki}</b> de poder.</p>
          <div class="orbes" aria-label="${hechas} de ${S.total} orbes de la saga">${orbes}</div>
          <div class="contador">Orbes de la ${S.nombre}: ${hechas} de ${S.total}</div>
          <div class="descanso">⏸️ <b>Descanso:</b> 5 minutos de batería 🥁 o unas canastas 🏀. ${cola}</div>
          <div class="acciones" style="justify-content:center">
            <button class="btn btn-pista" id="rep">Repetir misión</button>
            <a class="boton btn btn-pista" href="index.html">Volver al mapa</a>
            ${botonSig}
          </div></div>`;
        $('rep').onclick = () => location.reload();
      }
    };

    function render() {
      agenda(); const p = pantallas[i]; TIPOS[p.tipo](p);
      if (p.texto && $('voz')) { const antes = $('voz').onclick; $('voz').onclick = () => { if (antes) antes(); hablar($('poema').innerText, true); }; }
    }
    render();
  }

  /* ---------- INICIO: PORTADA Y MAPA DE SAGAS ---------- */
  function iniciarInicio() {
    pintarCabecera(null, 'inicio');
    $('ki').textContent = Progreso.poderTotal();
    const S = window.SAGAS;
    const totalOrbes = S.reduce((t, s) => t + s.total, 0), hechos = S.reduce((t, s) => t + Progreso.orbesDe(s), 0);
    let siguiente = null; // primera misión lista y sin terminar
    S.forEach(s => s.misiones.forEach((m, k) => { if (!siguiente && !Progreso.hecha(m.id)) siguiente = { s, m, n: k + 1 }; }));
    const boton = siguiente
      ? `<a class="boton btn" data-asig="${siguiente.s.asig}" href="${enlaceMision(siguiente.m.id)}">${hechos ? 'Seguir' : 'Empezar'}: Misión ${siguiente.n} ➜</a>
         <p class="ayuda" style="margin:8px 0 0;font-size:16px">${siguiente.s.asigNombre} · ${siguiente.m.titulo}</p>`
      : '<p class="ayuda">¡Has conseguido todos los orbes!</p>';
    const secciones = S.map(s => {
      const nodos = Array.from({ length: s.total }, (_, k) => {
        const m = s.misiones[k], hecha = m && Progreso.hecha(m.id);
        const orbe = `<span class="orbe ${hecha ? 'on' : ''}"></span>`;
        if (!m) return `<div class="nodo bloq" aria-disabled="true"><span class="n">Misión ${k + 1}</span><span class="t">Próximamente</span><span class="estado">${orbe}</span></div>`;
        return `<a class="nodo ${hecha ? 'hecha' : ''} ${m.jefe ? 'jefe' : ''}" href="${enlaceMision(m.id)}">
          <span class="n">${m.jefe ? '⚔️ Jefe final' : 'Misión ' + (k + 1)}</span><span class="t">${m.titulo}</span>
          <span class="estado">${orbe}${hecha ? 'Orbe conseguido' : 'Lista para jugar'}</span></a>`;
      }).join('');
      return `<section class="asignatura" id="${s.asig}" data-asig="${s.asig}" aria-label="${s.asigNombre}">
        <p class="ante">${s.asigNombre} · Orbes: ${Progreso.orbesDe(s)} de ${s.total}</p>
        <h2 class="titular">${s.emoji} ${s.nombre.replace(/(\S+)$/, '<em>$1</em>')}</h2>
        <div class="mapa">${nodos}</div></section>`;
    }).join('');
    $('app').outerHTML = `<div class="portada">
        <div><p class="ante">Tu entrenamiento de estudio</p>
          <div class="logo-portada"><img src="img/logo-luc-z.png" alt="Logo de Luc Z"><h1 class="titular">Luc <em>Z</em></h1></div>
          <p class="entradilla">Cada misión dura entre 10 y 15 minutos. Aprende, juega, supera el reto y consigue su orbe.</p>
          <div class="acciones" style="margin-top:16px"><button class="voz" id="voz">🔊 Escuchar</button></div>
          <div id="instalar" class="instalar" hidden></div></div>
        <div class="panel-poder">
          <div class="dato"><span>⚡ Nivel de poder</span><b>${Progreso.poderTotal()}</b></div>
          <div class="dato"><span>🔶 Orbes</span><b>${hechos} / ${totalOrbes}</b></div>
          ${boton}
        </div></div>
      <div class="franja" aria-hidden="true">Aprende <i>·</i> Juega <i>·</i> Reto <i>·</i> Orbe</div>
      <main id="app">${secciones}</main>
      <footer class="pie">Imágenes: Wikimedia Commons (dominio público). Hecho con cariño para estudiar a tu ritmo.</footer>`;
    mostrarInstalar();
    $('voz').onclick = () => hablar('Luc Zeta. Cada misión dura entre 10 y 15 minutos. Aprende, juega, supera el reto y consigue su orbe.' + (siguiente ? ' Tu siguiente misión es: ' + siguiente.m.titulo + '.' : ''));
  }

  window.Motor = {
    iniciarMision, iniciarInicio,
    registrar(id, datos) { DATOS[id] = datos; },
    img: f => 'https://commons.wikimedia.org/wiki/Special:FilePath/' + f + '?width=760'
  };
})();
