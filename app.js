(function () {
  'use strict';

  const DHIKR = [
    'سُبْحَانَ اللَّهِ',
    'الْحَمْدُ لِلَّهِ',
    'اللَّهُ أَكْبَرُ',
    'لَا إِلَٰهَ إِلَّا اللَّهُ',
    'أَسْتَغْفِرُ اللَّهَ',
    'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ'
  ];

  const KEY = 'tasbih.v1';
  const toAr = n => String(n); // Tunisia uses Western digits
  const today = () => new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD local

  const defaults = { dhikr: 0, target: 33, custom: 50, count: 0, rounds: 0, total: 0, adhkar: { date: today(), morning: {}, evening: {} } };
  let state;
  try { state = Object.assign({}, defaults, JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch (e) { state = Object.assign({}, defaults); }
  if (!state.adhkar || state.adhkar.date !== today()) state.adhkar = { date: today(), morning: {}, evening: {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage full / private mode */ } };

  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  // In the Android app (Capacitor) use the native Haptics plugin; on the web use the Vibration API.
  const NATIVE = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  const Haptics = NATIVE && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
  function vibrate(p) {
    try {
      if (Haptics) {
        const seq = Array.isArray(p) ? p : [p];
        let t = 0;
        seq.forEach((d, i) => { if (i % 2 === 0) setTimeout(() => Haptics.vibrate({ duration: d }).catch(() => {}), t); t += d; });
        return;
      }
      if (navigator.vibrate) navigator.vibrate(p);
    } catch (e) {}
  }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ---------- Tabs ---------- */
  function showView(name) {
    $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + name));
    $$('.tab').forEach(t => { const on = t.dataset.view === name; t.classList.toggle('active', on); t.setAttribute('aria-selected', on); });
    window.scrollTo(0, 0);
    if (location.hash !== '#' + name) history.replaceState(null, '', '#' + name);
  }
  $$('.tab').forEach(t => t.addEventListener('click', () => showView(t.dataset.view)));

  /* ---------- Tasbih ---------- */
  const chips = $('#dhikrChips');
  DHIKR.forEach((d, i) => {
    const b = document.createElement('button');
    b.className = 'chip'; b.textContent = d; b.setAttribute('role', 'radio');
    b.addEventListener('click', () => {
      if (state.dhikr === i) return;
      state.dhikr = i; state.count = 0; state.rounds = 0; save(); renderTasbih();
    });
    chips.appendChild(b);
  });

  const ring = $('#ringProg');
  const CIRC = 2 * Math.PI * 92;
  ring.style.strokeDasharray = CIRC;

  const getTarget = () => state.target === 'custom' ? Math.max(1, parseInt(state.custom, 10) || 1) : state.target;

  function renderTasbih() {
    $$('.chip').forEach((c, i) => c.setAttribute('aria-checked', i === state.dhikr));
    $('#currentDhikr').textContent = DHIKR[state.dhikr];
    $$('.seg').forEach(s => s.setAttribute('aria-checked', String(s.dataset.target) === String(state.target)));
    const ci = $('#customTarget');
    ci.hidden = state.target !== 'custom'; ci.value = state.custom;
    const target = getTarget();
    $('#targetLabel').textContent = toAr(target);
    $('#count').textContent = toAr(state.count);
    $('#rounds').textContent = state.rounds ? 'الدورات: ' + toAr(state.rounds) : '';
    ring.style.strokeDashoffset = CIRC * (1 - Math.min(state.count / target, 1));
    $('#grandTotal').textContent = toAr(state.total);
  }

  const tap = $('#tapBtn');
  function doTap() {
    const target = getTarget();
    state.count += 1; state.total += 1;
    if (state.count >= target) {
      // completed one round: celebrate gently, then start a new round
      vibrate([90, 70, 90]);
      tap.classList.remove('done'); void tap.offsetWidth; tap.classList.add('done');
      state.rounds += 1;
      toast('بارك الله فيك — اكتمل ' + toAr(target));
      renderTasbih();
      state.count = 0;
      save();
      setTimeout(renderTasbih, 650);
      return;
    }
    vibrate(12);
    save(); renderTasbih();
  }
  // pointerdown feels instant on phones; keyboard (Enter/Space) still fires click with detail 0
  let pointerTapped = false;
  tap.addEventListener('pointerdown', e => { if (e.button !== 0) return; pointerTapped = true; tap.classList.add('pressed'); doTap(); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => tap.addEventListener(ev, () => tap.classList.remove('pressed')));
  tap.addEventListener('click', e => { if (pointerTapped) { pointerTapped = false; return; } doTap(); });
  tap.addEventListener('contextmenu', e => e.preventDefault());

  $$('.seg').forEach(s => s.addEventListener('click', () => {
    const v = s.dataset.target;
    state.target = v === 'custom' ? 'custom' : parseInt(v, 10);
    state.count = 0; state.rounds = 0; save(); renderTasbih();
    if (v === 'custom') { const ci = $('#customTarget'); ci.focus(); ci.select(); }
  }));
  $('#customTarget').addEventListener('input', e => {
    const n = parseInt(e.target.value, 10);
    if (n > 0 && n <= 100000) { state.custom = n; state.count = Math.min(state.count, n - 1); save(); renderTasbih(); }
  });

  $('#resetBtn').addEventListener('click', () => {
    if (state.count === 0 && state.rounds === 0) return;
    state.count = 0; state.rounds = 0; save(); renderTasbih(); vibrate(25); toast('تم تصفير العدّاد');
  });
  // double-tap on total to reset the all-time total (with confirmation)
  $('.total').addEventListener('dblclick', () => {
    if (confirm('هل تريد تصفير المجموع الكلي؟')) { state.total = 0; save(); renderTasbih(); }
  });

  /* ---------- Adhkar ---------- */
  function timesLabel(n) {
    if (n === 1) return 'مرة واحدة';
    if (n === 2) return 'مرتان';
    if (n >= 3 && n <= 10) return toAr(n) + ' مرات';
    return toAr(n) + ' مرة';
  }

  function renderSection(sec) {
    const list = ADHKAR[sec];
    const box = $('#' + sec + 'Cards');
    box.innerHTML = '';
    const done = document.createElement('div');
    done.className = 'all-done'; done.textContent = 'تقبّل الله منك ✦ أتممت ' + (sec === 'morning' ? 'أذكار الصباح' : 'أذكار المساء');
    box.appendChild(done);
    list.forEach((item, idx) => {
      const card = document.createElement('button');
      card.className = 'card';
      card.innerHTML = '<p class="txt"></p><div class="meta"><span class="times"></span><span class="badge"></span></div><span class="bar"></span>';
      card.querySelector('.txt').textContent = item.text;
      card.querySelector('.times').textContent = 'التكرار: ' + timesLabel(item.repeat);
      card.addEventListener('click', () => {
        const left = remaining(sec, idx);
        if (left <= 0) return;
        state.adhkar[sec][idx] = (state.adhkar[sec][idx] || 0) + 1;
        save();
        if (left - 1 === 0) vibrate([40, 40, 40]); else vibrate(10);
        card.classList.remove('bump'); void card.offsetWidth; card.classList.add('bump');
        updateCard(sec, idx, card); updateProgress(sec);
      });
      box.appendChild(card);
      updateCard(sec, idx, card);
    });
    updateProgress(sec);
  }
  const remaining = (sec, idx) => ADHKAR[sec][idx].repeat - (state.adhkar[sec][idx] || 0);
  function updateCard(sec, idx, card) {
    const left = remaining(sec, idx), rep = ADHKAR[sec][idx].repeat;
    card.querySelector('.badge').textContent = left > 0 ? toAr(left) : '✓';
    card.querySelector('.bar').style.transform = 'scaleX(' + ((rep - left) / rep) + ')';
    card.classList.toggle('complete', left <= 0);
    card.setAttribute('aria-label', (left > 0 ? 'متبقي ' + left : 'مكتمل') + ' — ' + ADHKAR[sec][idx].text.slice(0, 40));
  }
  function updateProgress(sec) {
    const n = ADHKAR[sec].length;
    const c = ADHKAR[sec].filter((_, i) => remaining(sec, i) <= 0).length;
    $('#' + sec + 'Progress').textContent = 'أُنجز ' + toAr(c) + ' من ' + toAr(n);
    const all = $('#' + sec + 'Cards .all-done');
    const wasShown = all.classList.contains('show');
    all.classList.toggle('show', c === n);
    if (c === n && !wasShown) { vibrate([80, 60, 80]); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  }
  $$('[data-reset]').forEach(b => b.addEventListener('click', () => {
    const sec = b.dataset.reset; state.adhkar[sec] = {}; save(); renderSection(sec); toast('تمت إعادة الأذكار');
  }));

  /* ---------- Init ---------- */
  renderTasbih(); renderSection('morning'); renderSection('evening');
  const h = location.hash.slice(1);
  if (['tasbih', 'morning', 'evening'].includes(h)) showView(h);

  if ('serviceWorker' in navigator && location.protocol !== 'file:' && !NATIVE) { // the APK bundles files locally, no SW needed
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
