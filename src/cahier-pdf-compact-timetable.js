const STORAGE_KEY = 'cahierCompactTimetablePdf';

const applyCompactTimetableState = (enabled) => {
  document.body.classList.toggle('compact-timetable-pdf', enabled);
};

const installCompactTimetableToggle = () => {
  const anchor = document.querySelector('.total-hours-control');
  if (!anchor || document.getElementById('compact-timetable-pdf-toggle')) return;

  const wrapper = document.createElement('label');
  wrapper.id = 'compact-timetable-pdf-toggle';
  wrapper.className = 'compact-timetable-pdf-toggle no-print';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = localStorage.getItem(STORAGE_KEY) === '1';

  const text = document.createElement('span');
  text.textContent = 'PDF sans 16h–18h';

  checkbox.addEventListener('change', () => {
    const enabled = checkbox.checked;
    localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
    applyCompactTimetableState(enabled);
  });

  wrapper.append(checkbox, text);
  anchor.insertAdjacentElement('afterend', wrapper);
  applyCompactTimetableState(checkbox.checked);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', installCompactTimetableToggle, { once: true });
} else {
  installCompactTimetableToggle();
}

new MutationObserver(installCompactTimetableToggle).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
