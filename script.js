document.getElementById("btnImprimir").addEventListener("click", function () {

  const elementoPDF = document.createElement("div");

  
  const titulo = document.createElement("h2");
  titulo.textContent = "Formulario - Caso de Uso";
  titulo.style.textAlign = "center";
  titulo.style.color = "#c0392b";

  const fecha = document.createElement("p");
  fecha.textContent = "Fecha: " + new Date().toLocaleDateString();
  fecha.style.textAlign = "center";
  fecha.style.marginBottom = "20px";
  
  const formularioClonado = document.getElementById("formCasoUso").cloneNode(true);
  formularioClonado.style.width = "100%";


  elementoPDF.appendChild(titulo);
  elementoPDF.appendChild(fecha);
  elementoPDF.appendChild(formularioClonado);


  const opciones = {
    margin: 10,
    filename: "caso_de_uso.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 3, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opciones).from(elementoPDF).save();
});

