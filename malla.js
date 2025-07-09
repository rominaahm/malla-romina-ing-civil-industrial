const ramos = [
    { codigo: "ICI101", nombre: "Álgebra I", nivel: 100 },
    { codigo: "ICI102", nombre: "Fund. Química", nivel: 100 },
    { codigo: "ICI103", nombre: "Herr. Computacionales", nivel: 100 },
    { codigo: "ICI104", nombre: "Inglés I", nivel: 100 },
    { codigo: "ICI105", nombre: "Curso Formación General", nivel: 100 },
    { codigo: "ICI201", nombre: "Álgebra II", nivel: 200 },
    { codigo: "ICI202", nombre: "Cálculo I", nivel: 200 },
    { codigo: "ICI203", nombre: "Intro Programación", nivel: 200 },
    { codigo: "ICI204", nombre: "Inglés II", nivel: 200 },
    { codigo: "ICI205", nombre: "Curso Formación General", nivel: 200 },
    { codigo: "ICI301", nombre: "Probabilidad y Estadística", nivel: 300 },
    { codigo: "ICI302", nombre: "Cálculo II", nivel: 300 },
    { codigo: "ICI303", nombre: "Bases de Datos", nivel: 300 },
    { codigo: "ICI304", nombre: "Inglés III", nivel: 300 },
    { codigo: "ICI305", nombre: "Curso Formación General", nivel: 300 },
    { codigo: "ICI401", nombre: "Ecuaciones Diferenciales", nivel: 400 },
    { codigo: "ICI402", nombre: "Termodinámica", nivel: 400 },
    { codigo: "ICI403", nombre: "Taller de BD", nivel: 400 },
    { codigo: "ICI404", nombre: "Inglés IV", nivel: 400 },
    { codigo: "ICI405", nombre: "Comunicación Oral y Escrita", nivel: 400 },
    { codigo: "ICI406", nombre: "Curso Formación General", nivel: 400 },
    { codigo: "ICI501", nombre: "Investigación Operaciones", nivel: 500 },
    { codigo: "ICI502", nombre: "Modelos Estocásticos", nivel: 500 },
    { codigo: "ICI503", nombre: "Mecánica Fluidos", nivel: 500 },
    { codigo: "ICI504", nombre: "Adm. BD", nivel: 500 },
    { codigo: "ICI505", nombre: "Contabilidad y Presupuesto", nivel: 500 },
    { codigo: "ICI506", nombre: "Curso Formación General", nivel: 500 },
    { codigo: "ICI601", nombre: "Práctica Intermedia", nivel: 600 },
    { codigo: "ICI602", nombre: "Econometría", nivel: 600 },
    { codigo: "ICI603", nombre: "Organización Industrial", nivel: 600 },
    { codigo: "ICI604", nombre: "Adm. Empresas", nivel: 600 },
    { codigo: "ICI605", nombre: "Finanzas", nivel: 600 },
    { codigo: "ICI606", nombre: "Curso Formación General", nivel: 600 },
    { codigo: "ICI701", nombre: "Optativo", nivel: 700 },
    { codigo: "ICI702", nombre: "Microeconomía", nivel: 700 },
    { codigo: "ICI703", nombre: "Gestión Operaciones", nivel: 700 },
    { codigo: "ICI704", nombre: "Marketing", nivel: 700 },
    { codigo: "ICI705", nombre: "Liderazgo", nivel: 700 },
    { codigo: "ICI706", nombre: "Sistemas de Información", nivel: 700 },
    { codigo: "ICI801", nombre: "Optativo", nivel: 800 },
    { codigo: "ICI802", nombre: "Macroeconomía", nivel: 800 },
    { codigo: "ICI803", nombre: "Gestión Logística", nivel: 800 },
    { codigo: "ICI804", nombre: "Comunicación Efectiva", nivel: 800 },
    { codigo: "ICI805", nombre: "Simulación de Sistemas", nivel: 800 },
    { codigo: "ICI806", nombre: "Innovación y Emprendimiento", nivel: 800 },
    { codigo: "ICI901", nombre: "Optativo", nivel: 900 },
    { codigo: "ICI902", nombre: "Compliance", nivel: 900 },
    { codigo: "ICI903", nombre: "Gestión de Calidad", nivel: 900 },
    { codigo: "ICI904", nombre: "Ciencia de Datos", nivel: 900 },
    { codigo: "ICI905", nombre: "Evaluación Privada", nivel: 900 },
    { codigo: "ICI906", nombre: "Evaluación Social", nivel: 900 },
    { codigo: "ICI001", nombre: "Optativo", nivel: 1000 },
    { codigo: "ICI002", nombre: "Práctica Profesional", nivel: 1000 },
    { codigo: "ICI003", nombre: "Integración Estratégica", nivel: 1000 },
    { codigo: "ICI004", nombre: "Transformación Digital", nivel: 1000 },
    { codigo: "ICI005", nombre: "Curso Formación General", nivel: 1000 },
    { codigo: "ICI006", nombre: "Seminario de Título", nivel: 1000 },
    { codigo: "ICI007", nombre: "Optativo", nivel: 1000 },
    { codigo: "ICI008", nombre: "Optativo", nivel: 1000 },
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
