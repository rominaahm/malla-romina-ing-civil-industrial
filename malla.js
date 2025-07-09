
const ramos = [
    { codigo: "ICI101", nombre: "Álgebra I", nivel: 100 },
    { codigo: "ICI102", nombre: "Fund. Química", nivel: 100 },
    { codigo: "ICI103", nombre: "Herr. Computacionales", nivel: 100 },
    { codigo: "ICI104", nombre: "Inglés I", nivel: 100 },
    { codigo: "ICI105", nombre: "CFG", nivel: 100 },
    { codigo: "ICI201", nombre: "Álgebra II", nivel: 200 },
    { codigo: "ICI202", nombre: "Cálculo I", nivel: 200 },
    { codigo: "ICI203", nombre: "Intro Programación", nivel: 200 },
    { codigo: "ICI204", nombre: "Inglés II", nivel: 200 },
    { codigo: "ICI205", nombre: "CFG", nivel: 200 },
    { codigo: "ICI301", nombre: "Prob. y Estadística", nivel: 300 },
    { codigo: "ICI302", nombre: "Cálculo II", nivel: 300 },
    { codigo: "ICI303", nombre: "BD e Información", nivel: 300 },
    { codigo: "ICI304", nombre: "Inglés III", nivel: 300 },
    { codigo: "ICI305", nombre: "CFG", nivel: 300 },
];

const malla = document.getElementById("malla");

ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = `${ramo.codigo}\n${ramo.nombre}`;
    div.onclick = () => {
        div.classList.toggle("aprobado");
        localStorage.setItem(ramo.codigo, div.classList.contains("aprobado"));
    };
    if (localStorage.getItem(ramo.codigo) === "true") {
        div.classList.add("aprobado");
    }
    malla.appendChild(div);
});
