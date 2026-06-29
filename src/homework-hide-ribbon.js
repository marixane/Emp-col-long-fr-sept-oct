document.addEventListener('click', function (event) {
  var button = event.target && event.target.closest && event.target.closest('.assignment-control button');
  if (!button) return;
  var text = (button.textContent || '').toLowerCase();
  if (!text.includes('maison')) return;

  setTimeout(function () {
    var ribbonToggle = document.querySelector('.bar-ribbon-toggle.on');
    if (ribbonToggle) ribbonToggle.click();
  }, 0);
}, true);
