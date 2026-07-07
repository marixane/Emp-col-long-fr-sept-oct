const findHomeworkHeader = (page) => {
  return Array.from(page.querySelectorAll('div')).find((element) => {
    const style = window.getComputedStyle(element);
    return style.position === 'absolute'
      && style.display === 'grid'
      && style.top === '10px'
      && style.gridTemplateColumns.startsWith('230px');
  });
};

const tagHomeworkProgressBars = () => {
  document.querySelectorAll('.homework-page').forEach((page) => {
    const header = findHomeworkHeader(page);
    if (!header) return;

    const progressWrap = header.children?.[1];
    const progressBar = progressWrap?.children?.[0];

    header.classList.add('cahier-homework-header');
    header.style.height = '30px';
    header.style.padding = '0 14px';
    header.style.borderRadius = '10px';

    if (progressWrap) {
      progressWrap.classList.add('cahier-progress-wrap');
      progressWrap.style.display = 'grid';
      progressWrap.style.gridTemplateColumns = '280px 46px';
      progressWrap.style.width = '336px';
      progressWrap.style.minWidth = '336px';
      progressWrap.style.maxWidth = '336px';
      progressWrap.style.justifySelf = 'center';
      progressWrap.style.gap = '10px';
    }

    if (progressBar) {
      progressBar.classList.add('cahier-progress-bar');
      progressBar.style.width = '280px';
      progressBar.style.minWidth = '280px';
      progressBar.style.maxWidth = '280px';
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
