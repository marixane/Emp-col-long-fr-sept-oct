function updatePageExerciseLabels() {
  var items = document.querySelectorAll('.page-count-card .compact-control strong');
  items.forEach(function (strong) {
    var n = parseInt((strong.textContent || '').trim(), 10);
    if (isNaN(n)) return;
    strong.setAttribute('data-count', n + ' ' + (n === 1 ? 'exercice' : 'exercices'));
  });
}

updatePageExerciseLabels();
setInterval(updatePageExerciseLabels, 300);
