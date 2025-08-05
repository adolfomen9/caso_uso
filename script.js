document.getElementById("btnImprimir").addEventListener("click", function() {
  const elemento = document.getElementById("formCasoUso");

  const opciones = {
    margin: 10,
    filename: 'caso_de_uso.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opciones).from(elemento).save();
});
