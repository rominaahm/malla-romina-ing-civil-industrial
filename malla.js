const ramos = [
  // 1° Semestre
  { codigo: "RAMO101", nombre: "Álgebra I", semestre: 1, prerequisitos: [] },
  { codigo: "RAMO102", nombre: "Fundamentos de la Química", semestre: 1, prerequisitos: [] },
  { codigo: "RAMO103", nombre: "Introducción a la Física", semestre: 1, prerequisitos: [] },
  { codigo: "RAMO104", nombre: "Herramientas Computacionales", semestre: 1, prerequisitos: [] },
  { codigo: "RAMO105", nombre: "Inglés I", semestre: 1, prerequisitos: [] },
  { codigo: "CFG1", nombre: "CFG", semestre: 1, prerequisitos: [] },

  // 2° Semestre
  { codigo: "RAMO201", nombre: "Álgebra II", semestre: 2, prerequisitos: ["RAMO101"] },
  { codigo: "RAMO202", nombre: "Cálculo I", semestre: 2, prerequisitos: [] },
  { codigo: "RAMO203", nombre: "Mecánica", semestre: 2, prerequisitos: ["RAMO103"] },
  { codigo: "RAMO204", nombre: "Introducción a la Programación", semestre: 2, prerequisitos: [] },
  { codigo: "RAMO205", nombre: "Inglés II", semestre: 2, prerequisitos: ["RAMO105"] },
  { codigo: "CFG2", nombre: "CFG", semestre: 2, prerequisitos: [] },

  // 3° Semestre
  { codigo: "RAMO301", nombre: "Probabilidad y Estadística", semestre: 3, prerequisitos: [] },
  { codigo: "RAMO302", nombre: "Cálculo II", semestre: 3, prerequisitos: ["RAMO202"] },
  { codigo: "RAMO303", nombre: "Electricidad y Magnetismo", semestre: 3, prerequisitos: ["RAMO203"] },
  { codigo: "RAMO304", nombre: "Bases de Datos e Información", semestre: 3, prerequisitos: ["RAMO104"] },
  { codigo: "RAMO305", nombre: "Inglés III", semestre: 3, prerequisitos: ["RAMO205"] },
  { codigo: "CFG3", nombre: "CFG", semestre: 3, prerequisitos: [] },

  // 4° Semestre
  { codigo: "RAMO401", nombre: "Ecuaciones Diferenciales", semestre: 4, prerequisitos: ["RAMO302"] },
  { codigo: "RAMO402", nombre: "Cálculo III", semestre: 4, prerequisitos: ["RAMO302"] },
  { codigo: "RAMO403", nombre: "Termodinámica: Ondas y Calor", semestre: 4, prerequisitos: ["RAMO203"] },
  { codigo: "RAMO404", nombre: "Taller de Base de Datos", semestre: 4, prerequisitos: ["RAMO304"] },
  { codigo: "RAMO405", nombre: "Inglés IV", semestre: 4, prerequisitos: ["RAMO305"] },
  { codigo: "CFG4", nombre: "CFG", semestre: 4, prerequisitos: [] },

  // 5° Semestre
  { codigo: "RAMO501", nombre: "Investigación de Operaciones", semestre: 5, prerequisitos: [] },
  { codigo: "RAMO502", nombre: "Modelos Estocásticos", semestre: 5, prerequisitos: ["RAMO301"] },
  { codigo: "RAMO503", nombre: "Mecánica de Fluidos y Materiales", semestre: 5, prerequisitos: ["RAMO203"] },
  { codigo: "RAMO504", nombre: "Administración de Base de Datos", semestre: 5, prerequisitos: ["RAMO404"] },
  { codigo: "RAMO505", nombre: "Comunicación Oral y Escrita para la Ingeniería", semestre: 5, prerequisitos: [] },
  { codigo: "CFG5", nombre: "CFG", semestre: 5, prerequisitos: [] },

  // 6° Semestre
  { codigo: "RAMO601", nombre: "Práctica Intermedia", semestre: 6, prerequisitos: ["120 SCT"] },
  { codigo: "RAMO602", nombre: "Econometría", semestre: 6, prerequisitos: ["RAMO301"] },
  { codigo: "RAMO603", nombre: "Organización Industrial", semestre: 6, prerequisitos: [] },
  { codigo: "RAMO604", nombre: "Administración de Empresas", semestre: 6, prerequisitos: [] },
  { codigo: "CFG6", nombre: "CFG", semestre: 6, prerequisitos: [] },

  // 7° Semestre
  { codigo: "OPT1", nombre: "Optativo", semestre: 7, prerequisitos: [] },
  { codigo: "RAMO701", nombre: "Microeconomía", semestre: 7, prerequisitos: [] },
  { codigo: "RAMO702", nombre: "Gestión de Operaciones Industriales", semestre: 7, prerequisitos: ["RAMO603"] },
  { codigo: "RAMO703", nombre: "Marketing", semestre: 7, prerequisitos: [] },
  { codigo: "RAMO704", nombre: "Contabilidad, Costos y Presupuesto", semestre: 7, prerequisitos: [] },
  { codigo: "RAMO705", nombre: "Sistemas de Información", semestre: 7, prerequisitos: ["RAMO404"] },

  // 8° Semestre
  { codigo: "OPT2", nombre: "Optativo", semestre: 8, prerequisitos: [] },
  { codigo: "RAMO801", nombre: "Macroeconomía", semestre: 8, prerequisitos: ["RAMO701"] },
  { codigo: "RAMO802", nombre: "Gestión Logística", semestre: 8, prerequisitos: ["RAMO702"] },
  { codigo: "RAMO803", nombre: "Comunicación Efectiva para la Gestión", semestre: 8, prerequisitos: [] },
  { codigo: "RAMO804", nombre: "Finanzas", semestre: 8, prerequisitos: ["RAMO704"] },
  { codigo: "RAMO805", nombre: "Innovación y Emprendimiento", semestre: 8, prerequisitos: [] },

  // 9° Semestre
  { codigo: "OPT3", nombre: "Optativo", semestre: 9, prerequisitos: [] },
  { codigo: "RAMO901", nombre: "Compliance & Accountability", semestre: 9, prerequisitos: [] },
  { codigo: "RAMO902", nombre: "Gestión de Calidad", semestre: 9, prerequisitos: ["RAMO702"] },
  { codigo: "RAMO903", nombre: "Ciencia de Datos", semestre: 9, prerequisitos: ["RAMO304"] },
  { codigo: "RAMO904", nombre: "Liderazgo para la Gestión", semestre: 9, prerequisitos: ["RAMO803"] },
  { codigo: "RAMO905", nombre: "Formulación y Evaluación Privada de Proyectos", semestre: 9, prerequisitos: ["RAMO805"] },

  // 10° Semestre
  { codigo: "OPT4", nombre: "Optativo", semestre: 10, prerequisitos: [] },
  { codigo: "RAMO1001", nombre: "Inteligencia de Negocios", semestre: 10, prerequisitos: ["RAMO903"] },
  { codigo: "RAMO1002", nombre: "Taller de Integración Estratégica", semestre: 10, prerequisitos: ["RAMO904", "RAMO802"] },
  { codigo: "RAMO1003", nombre: "Proyectos de Transformación Digital", semestre: 10, prerequisitos: ["RAMO903"] },
  { codigo: "RAMO1004", nombre: "Simulación de Sistemas", semestre: 10, prerequisitos: ["RAMO903"] },
  { codigo: "RAMO1005", nombre: "Formulación y Evaluación Social de Proyectos", semestre: 10, prerequisitos: ["RAMO805"] },

  // 11° Semestre
  { codigo: "RAMO1101", nombre: "Seminario de Título", semestre: 11, prerequisitos: ["300 SCT"] },
  { codigo: "RAMO1102", nombre: "Práctica Profesional", semestre: 11, prerequisitos: [] }
];

function crearMalla() {
  const container = document.getElementById("malla-container");
  const maxSemestre = Math.max(...ramos.map(r => r.semestre));
  for (let s = 1; s <= maxSemestre; s++) {
    const col = document.createElement("div");
    col.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = ${s}° Semestre;
    col.appendChild(title);

    ramos.filter(r => r.semestre === s).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ${ramo.codigo}\n${ramo.nombre};
      div.setAttribute("data-codigo", ramo.codigo);
      div.setAttribute("title", ramo.prerequisitos.length ? "PR: " + ramo.prerequisitos.join(", ") : "");
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

    const desbloqueado = ramo.prerequisitos.length === 0 || ramo.prerequisitos.every(pr =>
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