
const ramos = [
  { codigo: "ICI101", nombre: "Álgebra I", semestre: 1 },
  { codigo: "ICI102", nombre: "Fund. Química", semestre: 1 },
  { codigo: "ICI103", nombre: "Herr. Computacionales", semestre: 1 },
  { codigo: "ICI104", nombre: "Inglés I", semestre: 1 },
  { codigo: "ICI105", nombre: "CFG", semestre: 1 },
  { codigo: "ICI201", nombre: "Álgebra II", semestre: 2, prerequisitos: ["ICI101"] },
  { codigo: "ICI202", nombre: "Cálculo I", semestre: 2 },
  { codigo: "ICI203", nombre: "Intro Programación", semestre: 2 },
  { codigo: "ICI204", nombre: "Inglés II", semestre: 2 },
  { codigo: "ICI205", nombre: "CFG", semestre: 2 },
  { codigo: "ICI300", nombre: "Electricidad y Magnetismo", semestre: 3 },
  { codigo: "ICI301", nombre: "Prob. y Estadística", semestre: 3, prerequisitos: ["ICI101"] },
  { codigo: "ICI302", nombre: "Cálculo II", semestre: 3, prerequisitos: ["ICI202"] },
  { codigo: "ICI303", nombre: "BD e Información", semestre: 3 },
  { codigo: "ICI304", nombre: "Inglés III", semestre: 3 },
  { codigo: "ICI400", nombre: "Cálculo III", semestre: 4, prerequisitos: ["ICI302"] },
  { codigo: "ICI401", nombre: "Ecuaciones Diferenciales", semestre: 4 },
  { codigo: "ICI402", nombre: "Termodinámica", semestre: 4 },
  { codigo: "ICI403", nombre: "Taller de BD", semestre: 4 },
  { codigo: "ICI404", nombre: "Inglés IV", semestre: 4 }
];

function crearMalla() {
  const container = document.getElementById("malla-container");
  const maxSemestre = Math.max(...ramos.map(r => r.semestre));
  for (let s = 1; s <= maxSemestre; s++) {
    const col = document.createElement("div");
    col.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = `${s}° Semestre`;
    col.appendChild(title);

    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = `${ramo.codigo}\n${ramo.nombre}`;
      div.setAttribute("data-codigo", ramo.codigo);
      div.setAttribute("title", ramo.prerequisitos ? "PR: " + ramo.prerequisitos.join(", ") : "");
      col.appendChild(div);
    });

    container.appendChild(col);
  }

  aplicarEstado();
}

function aplicarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const codigo = div.getAttribute("data-codigo");
    const ramo = ramos.find(r => r.codigo === codigo);
    const aprobado = localStorage.getItem(codigo) === "true";

    div.classList.remove("aprobado", "bloqueado");

    const desbloqueado = !ramo.prerequisitos || ramo.prerequisitos.every(pr =>
      localStorage.getItem(pr) === "true"
    );

    if (!desbloqueado) {
      div.classList.add("bloqueado");
      return;
    }

    if (aprobado) {
      div.classList.add("aprobado");
    }

    div.onclick = () => {
      if (div.classList.contains("bloqueado")) return;
      const nuevoEstado = !(localStorage.getItem(codigo) === "true");
      localStorage.setItem(codigo, nuevoEstado);
      aplicarEstado();
    };
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
