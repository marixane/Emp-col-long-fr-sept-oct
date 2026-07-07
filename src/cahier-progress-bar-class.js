const tagHomeworkProgressBars = () => {
  document.querySelectorAll('.homework-page').forEach((page) => {
    const header = page.firstElementChild;
    const progressWrap = header?.children?.[1];
    const progressBar = progressWrap?.children?.[0];

    if (header) header.classList.add('cahier-homework-header');

    if (progressWrap) {
      progressWrap.classList.add('cahier-progress-wrap');
      progressWrap.style.setProperty('display', 'grid', 'important');
      progressWrap.style.setProperty('grid-template-columns', '140px 46px', 'important');
      progressWrap.style.setProperty('width', '196px', 'important');
      progressWrap.style.setProperty('min-width', '196px', 'important');
      progressWrap.style.setProperty('max-width', '196px', 'important');
      progressWrap.style.setProperty('justify-self', 'center', 'important');
      progressWrap.style.setProperty('gap', '10px', 'important');
    }

    if (progressBar) {
      progressBar.classList.add('cahier-progress-bar');
      progressBar.style.setProperty('width', '140px', 'important');
      progressBar.style.setProperty('min-width', '140px', 'important');
      progressBar.style.setProperty('max-width', '140px', 'important');
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tagHomeworkProgressBars, { once: true });
} else {
  tagHomeworkProgressBars();
}

const observer = new MutationObserver(tagHomeworkProgressBars);
observer.observe(document.documentElement, { childList: true, subtree: true });
