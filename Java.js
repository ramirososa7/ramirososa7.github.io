const textos ={
    es: {
        inicio:"Inicio",
        exper:"Experiencia",
        proy:"Proyectos",
        titulo: "Desarrollador en formacion",
        descripcion:"Estudiante de Analista de Sistemas| HTML,CSS,JavaScript,Python,SQL,GIT",
        descarga:"Descargar CV",
        exp:"Experiencia Laboral",
        tiempo:"2022-Actualidad",
        busqueda:"Buscando mi primera oportunidad en el mundo IT",
        actualmente:"Actualmente formándome como Analista de Sistemas y desarrollando proyectos propios para mejorar mis habilidades.",
        proyectos:"Proyectos Personales",
        portfolio:"Portfolio Digital",
        descripciontrabajo:"Portfolio web responsive para mostrar mis proyectos y habilidades como desarrollador en formación",
        codigo:"Código",
        footer:"\u00A9 2026 Ramiro Sosa -Todos los derechos reservados"
    },
    en: {
        inicio:"Home",
        exper:"Experience",
        proy:"Projects",
        titulo:"Junior Developer",
        descripcion:"Systems Analyst Student| HTML,CSS,JavaScript,Python,SQL,GIT",
        descarga:"Download CV",
        exp:"Work Experience",
        tiempo:"2022-Present",
        busqueda: "Looking for my firste opportunity in the world IT",
        actualmente:"I am currently training to be Systems Analyst and developing my own projects to improve my skills",
        proyectos:"Personal Projects",
        portfolio:"Digital Portfolio",
        descripciontrabajo:"Responsive web portfolio to showcase my projects and skills as a developer in training",
        codigo:"Code",
        footer:"\u00A9 2026 Ramiro Sosa - All rights reserved"
    }
};

function cambiarIdioma(idioma){
    const elementos = document.querySelectorAll("[data-key]");
    elementos.forEach(button => {
        const key = button.getAttribute("data-key");
        button.textContent = textos[idioma][key];
    });
}