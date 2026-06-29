function getTodayDateText() {
  return new Date().toLocaleDateString('fr-FR');
}

function syncPageDates() {
  var text = getTodayDateText();
  document.querySelectorAll('.exam-page').forEach(function (page) {
    var date = page.querySelector('.page-date');
    if (!date) {
      date = document.createElement('div');
      date.className = 'page-date';
      page.appendChild(date);
    }
    date.textContent = text;
  });
}

syncPageDates();
setTimeout(syncPageDates, 100);
setTimeout(syncPageDates, 400);

new MutationObserver(function () {
  syncPageDates();
}).observe(document.body, { childList: true, subtree: true });
