const LOGO_CROP_SRC = 'data:image/webp;base64,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';

const makeDiv = (style = {}, text = '') => {
  const div = document.createElement('div');
  Object.assign(div.style, style);
  if (text) div.textContent = text;
  return div;
};

const zelligeStar = (size, x, y, scale = 1) => {
  const star = makeDiv({
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}px`,
    top: `${y}px`,
    transform: `scale(${scale})`,
    borderRadius: '50%',
    background: 'conic-gradient(from 22deg, #0f766e 0 8%, #f8fafc 8% 16%, #d97706 16% 24%, #f8fafc 24% 32%, #075985 32% 40%, #f8fafc 40% 48%, #f59e0b 48% 56%, #f8fafc 56% 64%, #0f766e 64% 72%, #f8fafc 72% 80%, #9a3412 80% 88%, #f8fafc 88% 100%)',
    border: '8px solid white',
    boxShadow: '0 5px 10px rgba(0,0,0,0.18)'
  });
  star.append(makeDiv({
    position: 'absolute',
    inset: '26%',
    borderRadius: '50%',
    background: '#0f766e',
    border: '5px solid white',
    boxShadow: 'inset 0 0 0 4px #f59e0b'
  }));
  return star;
};

const rebuildCover = () => {
  if (!document.body.classList.contains('cahier-tab-active')) return;
  const page = document.getElementById('cahier-cover-page');
  if (!page || page.dataset.referenceDetails === 'true') return;
  page.dataset.referenceDetails = 'true';
  page.innerHTML = '';
  Object.assign(page.style, {
    position: 'relative',
    overflow: 'hidden',
    background: '#eadccd',
    padding: '0',
    fontFamily: 'Arial, sans-serif'
  });

  page.append(makeDiv({
    position: 'absolute',
    inset: '0',
    background: '#eadccd',
    backgroundImage: 'linear-gradient(35deg, rgba(255,255,255,0.18) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.18) 87.5%), linear-gradient(145deg, rgba(255,255,255,0.18) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.18) 87.5%)',
    backgroundSize: '80px 138px',
    opacity: '1'
  }));

  page.append(makeDiv({
    position: 'absolute',
    inset: '0',
    opacity: '0.16',
    backgroundImage: 'repeating-conic-gradient(from 45deg, transparent 0 18deg, rgba(255,255,255,0.75) 18deg 21deg, transparent 21deg 45deg)',
    backgroundSize: '95px 95px'
  }));

  const corner = makeDiv({ position: 'absolute', top: '-28px', right: '-12px', width: '360px', height: '300px' });
  corner.append(zelligeStar(150, 22, 0, 1.08), zelligeStar(92, 210, 20, 0.9), zelligeStar(118, 150, 126, 1), zelligeStar(72, 42, 160, 0.8), zelligeStar(170, 246, 150, 1.12));
  page.append(corner);

  const header = makeDiv({
    position: 'absolute',
    top: '128px',
    left: '0',
    right: '0',
    textAlign: 'center',
    color: '#111',
    fontFamily: 'Georgia, serif',
    fontWeight: '800'
  });
  header.append(makeDiv({ fontSize: '18px', fontStyle: 'italic', marginBottom: '10px' }, 'Royaume du maroc'));
  const logo = document.createElement('img');
  logo.src = LOGO_CROP_SRC;
  logo.alt = 'Logo Royaume du Maroc';
  Object.assign(logo.style, { width: '96px', height: 'auto', objectFit: 'contain', display: 'block', margin: '0 auto 8px' });
  header.append(logo);
  header.append(makeDiv({ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.25' }, 'Ministère de l’Éducation Nationale'));
  header.append(makeDiv({ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.25' }, 'du préscolaire & des sports'));
  page.append(header);

  const title = makeDiv({
    position: 'absolute',
    left: '70px',
    right: '46px',
    top: '540px',
    fontSize: '92px',
    fontWeight: '900',
    letterSpacing: '-4px',
    color: '#050505',
    lineHeight: '1',
    textShadow: '0 9px 7px rgba(0,0,0,0.22)'
  }, 'Cahier de textes');
  page.append(title);

  page.append(makeDiv({
    position: 'absolute',
    left: '76px',
    top: '660px',
    width: '86%',
    height: '70px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.17), rgba(0,0,0,0))',
    filter: 'blur(4px)',
    transform: 'scaleY(-0.42)',
    opacity: '0.42'
  }));

  page.append(makeDiv({ position: 'absolute', left: '76px', top: '705px', fontSize: '22px', fontWeight: '800', color: '#111' }, 'Langue française'));
  page.append(makeDiv({ position: 'absolute', left: '76px', top: '830px', fontSize: '18px', fontWeight: '800', color: '#111', lineHeight: '1.5' }, 'Enseignement – Apprentissage du'));
  page.append(makeDiv({ position: 'absolute', left: '76px', top: '858px', fontSize: '18px', fontWeight: '800', color: '#111', lineHeight: '1.5' }, 'Français au cycle secondaire'));
  page.append(makeDiv({ position: 'absolute', right: '76px', bottom: '74px', fontSize: '17px', fontWeight: '800', color: '#111' }, 'Année Scolaire : 2025/2026'));
};

const schedule = () => requestAnimationFrame(rebuildCover);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule, { once: true });
else schedule();
new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
