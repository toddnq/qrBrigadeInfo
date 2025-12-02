
/* script.js - Minimal interactions: Tải PDF (print), Quay lại, toggle sections (future) */

document.addEventListener('DOMContentLoaded', function(){
  const btnTop = document.getElementById('btn-top');
  const btnPdf = document.getElementById('btn-pdf');

  btnTop.addEventListener('click', function(){
    window.location.hash = '#top';
    window.scrollTo({top:0,behavior:'smooth'});
  });

  btnPdf.addEventListener('click', function(){
    // Use browser print dialog (user can save as PDF). Print-friendly CSS included.
    window.print();
  });

  // Accessibility: allow collapse of sections by clicking heading (future enhancement)
  document.querySelectorAll('main section.card').forEach(section => {
    const h2 = section.querySelector('h2');
    h2.style.cursor = 'pointer';
    h2.addEventListener('click', ()=>{
      section.classList.toggle('collapsed');
      const content = Array.from(section.children).filter(n=>n.tagName && n.tagName.toLowerCase()!=='h2' && n.tagName.toLowerCase()!=='img');
      content.forEach(n=> n.style.display = section.classList.contains('collapsed') ? 'none' : '');
    });
  });
});
