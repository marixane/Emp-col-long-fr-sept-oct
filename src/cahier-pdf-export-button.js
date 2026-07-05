import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PDF_BUTTON_ID = 'cahier-pdf-export-button';
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;

const waitForFonts = async () => {
  if (document.fonts?.ready) {
    try { await document.fonts.ready; } catch { /* ignore */ }
  }
};

const getCahierPages = () => Array.from(document.querySelectorAll('.cahier-preview-zone .a4-page, .cahier-preview-zone .cahier-page'))
  .filter((page, index, pages) => page.offsetParent !== null && pages.indexOf(page) === index);

const downloadCahierPdf = async (button) => {
  const pages = getCahierPages();
  if (!pages.length) return;

  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = 'Préparation...';
  document.body.classList.add('cahier-pdf-exporting');

  try {
    await waitForFonts();
    await new Promise((resolve) => window.requestAnimationFrame(resolve));

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    for (let index = 0; index < pages.length; index += 1) {
      button.textContent = `PDF ${index + 1}/${pages.length}`;
      const page = pages[index];
      const canvas = await html2canvas(page, {
        backgroundColor: '#ffffff',
        scale: Math.min(2.2, Math.max(1.6, window.devicePixelRatio || 1.6)),
        useCORS: true,
        allowTaint: true,
        logging: false,
        imageTimeout: 15000,
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      });

      const image = canvas.toDataURL('image/jpeg', 0.98);
      if (index > 0) pdf.addPage('a4', 'portrait');
      pdf.addImage(image, 'JPEG', 0, 0, A4_WIDTH_MM, A4_HEIGHT_MM, undefined, 'FAST');
    }

    pdf.save('Cahier-de-texte-2026-2027.pdf');
  } catch (error) {
    console.error('Erreur export PDF cahier:', error);
    alert('Erreur pendant le téléchargement PDF. Réessaie après un rechargement de la page.');
  } finally {
    document.body.classList.remove('cahier-pdf-exporting');
    button.disabled = false;
    button.textContent = originalText;
  }
};

const ensureCahierPdfButton = () => {
  let button = document.getElementById(PDF_BUTTON_ID);
  if (!button) {
    button = document.createElement('button');
    button.id = PDF_BUTTON_ID;
    button.type = 'button';
    button.className = 'cahier-pdf-export-button';
    button.textContent = 'Télécharger PDF';
    button.title = 'Télécharger directement les pages A4 en PDF couleur';
    button.setAttribute('aria-label', 'Télécharger directement les pages A4 en PDF couleur');
    button.addEventListener('click', () => downloadCahierPdf(button));
    document.body.append(button);
  }
  button.hidden = !document.body.classList.contains('cahier-tab-active');
};

const scheduleCahierPdfButton = () => window.requestAnimationFrame(ensureCahierPdfButton);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleCahierPdfButton, { once: true });
} else {
  scheduleCahierPdfButton();
}

new MutationObserver(scheduleCahierPdfButton).observe(document.body, {
  attributes: true,
  attributeFilter: ['class'],
  childList: true,
  subtree: false
});
