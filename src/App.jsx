import { useEffect } from 'react';
import Tab from './Tab.jsx';

export default function App() {
  useEffect(() => {
    document.body.classList.add('cahier-tab-active');
    document.body.classList.remove('devoir-tab-active');

    return () => {
      document.body.classList.remove('cahier-tab-active');
    };
  }, []);

  return <>
    <style>{`
      .timetable-table + div {
        margin-top: 38px !important;
      }
    `}</style>
    <Tab />
  </>;
}