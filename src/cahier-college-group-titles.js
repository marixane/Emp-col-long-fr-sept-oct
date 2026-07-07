const REPLACEMENTS = new Map([
  ['TRONC COMMUN', '1 AC'],
  ['1ÈRES BAC', '2 AC'],
  ['1ERES BAC', '2 AC'],
  ['2ÈME BAC', '3 AC'],
  ['2EME BAC', '3 AC']
]);

const applyCollegeTitles = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;

  while ((node = walker.nextNode())) nodes.push(node);

  nodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return;

    const current = (textNode.nodeValue || '').trim().toUpperCase();
    const replacement = REPLACEMENTS.get(current);
    if (!replacement) return;

    const leading = (textNode.nodeValue || '').match(/^\s*/)?.[0] || '';
    const trailing = (textNode.nodeValue || '').match(/\s*$/)?.[0] || '';
    textNode.nodeValue = `${leading}${replacement}${trailing}`;
  });
};

let scheduled = false;
const scheduleApply = () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    applyCollegeTitles();
  });
};

const observer = new MutationObserver(scheduleApply);

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    scheduleApply();
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }, { once: true });
} else {
  scheduleApply();
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
}
