const setReactTextareaValue = (textarea, value) => {
  if (!textarea || textarea.value === value) return;
  const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
  setter?.call(textarea, value);
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
};

const updateHeaderDefaults = () => {
  if (document.body.classList.contains('arabic-mode')) return;

  const bottom = document.querySelector('.title-line-bottom');

  if (bottom?.value === 'N° : 1 Semestre : 1') {
    setReactTextareaValue(bottom, 'Matière: Mathématique');
  }
};

window.addEventListener('load', () => {
  setTimeout(updateHeaderDefaults, 80);
  setTimeout(updateHeaderDefaults, 300);
});

setTimeout(updateHeaderDefaults, 500);
