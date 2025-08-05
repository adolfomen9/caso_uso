document.getElementById("btnPDF").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20; // posición inicial en el PDF

  doc.setFontSize(18);
  doc.text("Formulario - Caso de Uso", 105, y, { align: "center" });
  y += 10;

  doc.setFontSize(12);

  const form = document.getElementById("formCasoUso");
  const datos = new FormData(form);

  datos.forEach((valor, campo) => {
    doc.setFont("helvetica", "bold");
    doc.text(campo.charAt(0).toUpperCase() + campo.slice(1) + ":", 10, y);
    doc.setFont("helvetica", "normal");
    doc.text(valor || "-", 60, y);
    y += 8;

    // Salto de página si llega al final
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("caso_de_uso.pdf");
});
