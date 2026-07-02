function ensureBarRibbonPageStyle() {
  if (document.getElementById('bar-ribbon-page-position-style')) return;

  var style = document.createElement('style');
  style.id = 'bar-ribbon-page-position-style';
  style.textContent = '.a4-page{position:relative!important}.bar-ribbon-toggle.on-a4-page{position:absolute!important;left:50%!important;top:calc(var(--exam-header-height, 104px) + 5px)!important;transform:translateX(-50%)!important;z-index:1000!important;pointer-events:auto!important;margin:0!important;width:34px!important;min-width:34px!important;height:34px!important;min-height:34px!important;padding:0!important;border-radius:6px!important;font-size:0!important;line-height:1!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;box-sizing:border-box!important;white-space:nowrap!important;overflow:hidden!important}.bar-ribbon-toggle.on-a4-page::after{content:"B"!important;font-size:14px!important;font-weight:900!important;line-height:1!important}.exam-page.is-exporting .bar-ribbon-toggle.on-a4-page{display:none!important}@media print{.bar-ribbon-toggle.on-a4-page{display:none!important}}';
  document.head.appendChild(style);
}

function moveBarRibbonToggleToPage() {
  ensureBarRibbonPageStyle();

  var button = document.querySelector('.bar-ribbon-toggle');
  var firstPage = document.querySelector('.a4-page');
  if (!button || !firstPage) return;

  button.classList.add('on-a4-page');
  if (button.parentElement !== firstPage) firstPage.appendChild(button);
}

moveBarRibbonToggleToPage();
setTimeout(moveBarRibbonToggleToPage, 100);
setTimeout(moveBarRibbonToggleToPage, 300);
setTimeout(moveBarRibbonToggleToPage, 700);
setInterval(moveBarRibbonToggleToPage, 800);
window.addEventListener('resize', moveBarRibbonToggleToPage);
window.moveBarRibbonToggleToPage = moveBarRibbonToggleToPage;
