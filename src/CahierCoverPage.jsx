const pageStyle = {
  position: 'relative',
  overflow: 'hidden',
  background: '#eadccd',
  color: '#111827',
  fontFamily: 'Arial, sans-serif'
};

const patternStyle = {
  position: 'absolute',
  inset: 0,
  opacity: 0.18,
  backgroundImage: 'radial-gradient(circle at 22px 22px, rgba(255,255,255,0.65) 1px, transparent 2px), linear-gradient(45deg, rgba(255,255,255,0.35) 12%, transparent 12%, transparent 88%, rgba(255,255,255,0.35) 88%)',
  backgroundSize: '44px 44px, 52px 52px'
};

const mosaicStyle = (corner) => ({
  position: 'absolute',
  width: '180px',
  height: '180px',
  borderRadius: '28px',
  background: 'repeating-conic-gradient(from 45deg, #0f766e 0 8deg, #f59e0b 8deg 16deg, #f8fafc 16deg 24deg, #1d4ed8 24deg 32deg, #7c2d12 32deg 40deg)',
  opacity: 0.9,
  boxShadow: '0 0 0 14px rgba(255,255,255,0.55)',
  ...(corner === 'top' ? { top: '-54px', right: '-42px' } : { bottom: '-54px', left: '-42px' })
});

const logoStyle = {
  position: 'absolute',
  top: '56px',
  left: 0,
  right: 0,
  textAlign: 'center',
  fontSize: '11px',
  lineHeight: 1.45,
  fontWeight: 700,
  color: '#313131'
};

const titleBlockStyle = {
  position: 'absolute',
  left: '70px',
  top: '250px'
};

const titleStyle = {
  margin: 0,
  fontSize: '56px',
  fontWeight: 900,
  letterSpacing: '-1px',
  color: '#0b0b0b',
  textShadow: '0 9px 7px rgba(0,0,0,0.22)'
};

const subtitleStyle = {
  marginTop: '22px',
  fontSize: '20px',
  fontWeight: 700,
  color: '#222'
};

const cycleStyle = {
  position: 'absolute',
  left: '70px',
  top: '470px',
  fontSize: '16px',
  lineHeight: 1.6,
  fontWeight: 700,
  color: '#222'
};

const yearStyle = {
  position: 'absolute',
  right: '76px',
  bottom: '82px',
  fontSize: '16px',
  fontWeight: 700,
  color: '#222'
};

export default function CahierCoverPage() {
  return <div className="a4-page cahier-page cahier-cover-page" style={pageStyle}>
    <div style={patternStyle} />
    <div style={mosaicStyle('top')} />
    <div style={mosaicStyle('bottom')} />
    <div style={logoStyle}>
      <div>Royaume du Maroc</div>
      <div style={{ fontSize: '22px', lineHeight: 1, margin: '6px 0' }}>☸</div>
      <div>Ministère de l’Éducation Nationale</div>
      <div>du Préscolaire et des Sports</div>
    </div>
    <div style={titleBlockStyle}>
      <h1 style={titleStyle}>Cahier de textes</h1>
      <div style={subtitleStyle}>Langue française</div>
    </div>
    <div style={cycleStyle}>
      <div>Enseignement – Apprentissage du</div>
      <div>Français au cycle secondaire</div>
    </div>
    <div style={yearStyle}>Année Scolaire : 2025/2026</div>
  </div>;
}
