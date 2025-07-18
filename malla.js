const ramos = [
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
