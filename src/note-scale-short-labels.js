function updateNoteScaleLabels() {
  document.querySelectorAll('.note-scale-button').forEach(function (button) {
    var text = (button.textContent || '').trim();
    if (text === 'Sur 10') button.textContent = '/ 10';
    if (text === 'Sur 20') button.textContent = '/ 20';
  });
}

updateNoteScaleLabels();
setTimeout(updateNoteScaleLabels, 200);
setTimeout(updateNoteScaleLabels, 700);

document.addEventListener('click', function () {
  setTimeout(updateNoteScaleLabels, 80);
});

window.updateNoteScaleLabels = updateNoteScaleLabels;
