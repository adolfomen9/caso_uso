document.getElementById("btnPDF").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(192, 57, 43);
  doc.text("Formulario - Caso de Uso", 105, 15, { align: "center" });

  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("Fecha: " + new Date().toLocaleDateString(), 170, 15);

  let y = 25;

  function campo(titulo, valor, alto = 8) {
    doc.setFont("helvetica", "bold");
    doc.text(titulo, 10, y + 6);
    doc.setFont("helvetica", "normal");
    doc.rect(60, y, 130, alto);
    doc.text(valor || "", 62, y + 6);
    y += alto + 5;
  }

  const form = document.getElementById("formCasoUso");
  const datos = new FormData(form);

  campo("Nombre del caso de uso:", datos.get("nombre"));
  campo("Actor principal:", datos.get("actor"));

  function campoLargo(titulo, valor, alto = 20) {
    doc.setFont("helvetica", "bold");
    doc.text(titulo, 10, y + 6);
    doc.setFont("helvetica", "normal");
    doc.rect(10, y + 8, 190, alto);
    doc.text(valor || "", 12, y + 14, { maxWidth: 186 });
    y += alto + 10;
  }

  campoLargo("Descripción:", datos.get("descripcion"));
  campoLargo("Precondiciones:", datos.get("precondiciones"));
  campoLargo("Flujo principal:", datos.get("flujo"));
  campoLargo("Flujos alternativos:", datos.get("alternativos"));
  campoLargo("Postcondiciones:", datos.get("postcondiciones"));
  campoLargo("Requisitos especiales:", datos.get("especiales"));

  campo("Fecha de creación:", datos.get("fecha"));
  campo("Autor:", datos.get("autor"));

  doc.save("caso_de_uso.pdf");
});
