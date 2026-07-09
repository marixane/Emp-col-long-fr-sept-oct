import { useEffect } from 'react';
import Tab from './Tab.jsx';

const pageStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '28px',
  padding: '70px 58px',
  background: 'linear-gradient(180deg, #ede9fe, #ffffff 78%)',
  borderLeft: '14px solid #8b5cf6',
  textAlign: 'center',
  boxSizing: 'border-box'
};

const badgeStyle = {
  alignSelf: 'center',
  padding: '10px 22px',
  borderRadius: '999px',
  background: '#ddd6fe',
  color: '#5b21b6',
  fontSize: '18px',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const dateStyle = {
  margin: 0,
  color: '#5b21b6',
  fontSize: '38px',
  fontWeight: 900
};

const eventStyle = {
  margin: 0,
  padding: '30px 24px',
  border: '2px solid rgba(124, 58, 237, 0.38)',
  borderRadius: '24px',
  background: 'linear-gradient(90deg, rgba(221,214,254,0.82), rgba(245,243,255,0.98))',
  color: '#5b21b6',
  fontSize: '42px',
  fontWeight: 900,
  lineHeight: 1.15
};

export default function App() {
  useEffect(() => {
    document.body.classList.add('cahier-tab-active');
    document.body.classList.remove('devoir-tab-active');

    return () => {
      document.body.classList.remove('cahier-tab-active');
    };
  }, []);

  return <>
    <Tab />
    <main className="cahier-shell clean-cahier-shell forced-signature-shell">
      <section className="cahier-preview-zone">
        <div className="a4-page cahier-page forced-signature-page" style={pageStyle}>
          <div style={badgeStyle}>Clôture administrative</div>
          <h2 style={dateStyle}>SAMEDI 10/07/2027</h2>
          <p style={eventStyle}>Signature procès-verbal</p>
        </div>
      </section>
    </main>
  </>;
}