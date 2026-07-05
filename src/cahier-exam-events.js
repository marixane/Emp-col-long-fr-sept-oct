const EXAM_EVENTS = [
  { start: '20/01', end: '24/01', text: 'Examen : Examen normalisé local' },
  { start: '23/06', end: '24/06', text: 'Examen : Examen normalisé provincial' },
  { start: '16/06', end: '17/06', text: 'Examen : Examen régional du collège' },
  { start: '29/05', end: '30/05', text: 'Examen : Examen régional 1ère Bac' },
  { start: '01/06', end: '04/06', text: 'Examen : Examen national 2ème Bac' }
];

const EXAM_DAYS = ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];

const getExamSchoolStartYear = () => new Date().getMonth() >= 8 ? new Date().getFullYear() : new Date().getFullYear() - 1;

const getExamDateObject = (monthDate) => {
  const [day, month] = String(monthDate).split('/').map(Number);
  const startYear = getExamSchoolStartYear();
  return new Date(month >= 9 ? startYear : startYear + 1, month - 1, day);
};

const getExamDisplayDay = (monthDate) => EXAM_DAYS[getExamDateObject(monthDate).getDay()];

const getExamRangeDates = ({ start, end }) => {
  const dates = [];
  const current = getExamDateObject(start);
  const last = getExamDateObject(end);
  while (current <= last) {
    dates.push(`${String(current.getDate()).padStart(2, '0')}/${String(current.getMonth() + 1).padStart(2, '0')}`);
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const getEntryDateText = (entry) => String(entry.querySelector('.homework-date')?.textContent || '');

const entryHasMonthDate = (entry, monthDate) => getEntryDateText(entry).includes(monthDate);

const resetExamEntries = () => {
  document.querySelectorAll('.homework-entry.cahier-exam-entry').forEach((entry) => {
    entry.classList.remove('cahier-exam-entry');
  });
  document.querySelectorAll('.homework-entry.cahier-exam-hidden').forEach((entry) => {
    entry.classList.remove('cahier-exam-hidden');
  });
};

const applyCahierExamEvents = () => {
  if (!document.body.classList.contains('cahier-tab-active')) return false;
  const entries = Array.from(document.querySelectorAll('.homework-page .homework-entry'));
  if (!entries.length) return false;

  resetExamEntries();

  EXAM_EVENTS.forEach((event) => {
    const rangeDates = getExamRangeDates(event);
    const matchingEntries = entries.filter((entry) => rangeDates.some((date) => entryHasMonthDate(entry, date)));
    if (!matchingEntries.length) return;

    const firstEntry = matchingEntries[0];
    const dateNode = firstEntry.querySelector('.homework-date');
    const textNode = firstEntry.querySelector('.homework-text');
    if (!dateNode || !textNode) return;

    firstEntry.classList.add('cahier-exam-entry');
    dateNode.textContent = event.start === event.end
      ? `${getExamDisplayDay(event.start)} ${event.start}`
      : `${getExamDisplayDay(event.start)} ${event.start} - ${getExamDisplayDay(event.end)} ${event.end}`;
    textNode.textContent = event.text;

    matchingEntries.slice(1).forEach((entry) => entry.classList.add('cahier-exam-hidden'));
  });

  return true;
};

let examEventsRetryCount = 0;
const scheduleCahierExamEvents = () => window.requestAnimationFrame(() => {
  const done = applyCahierExamEvents();
  if (!done && examEventsRetryCount < 18) {
    examEventsRetryCount += 1;
    window.setTimeout(scheduleCahierExamEvents, 250);
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleCahierExamEvents, { once: true });
} else {
  scheduleCahierExamEvents();
}

document.addEventListener('input', (event) => {
  if (event.target?.closest?.('.timetable-table')) window.setTimeout(scheduleCahierExamEvents, 160);
}, { passive: true });
document.addEventListener('drop', () => window.setTimeout(scheduleCahierExamEvents, 180), { passive: true });
