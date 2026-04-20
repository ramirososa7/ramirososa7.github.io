const textos ={
    es: {
        inicio:"Inicio",
        exper:"Experiencia",
        proy:"Proyectos",
        titulo: "Desarrollador en formacion",
        descripcion:"Estudiante de Analista de Sistemas",
        descarga:"Descargar CV",
        exp:"Experiencia Laboral",
        tiempo:"Actualidad",
        busqueda:"Buscando mi primera oportunidad en el mundo IT",
        actualmente:"Actualmente formándome como Analista de Sistemas y desarrollando proyectos propios para mejorar mis habilidades.",
        proyectos:"Proyectos Personales",
        portfolio:"Portfolio Digital",
        descripciontrabajo:"Portfolio web responsive para mostrar mis proyectos y habilidades como desarrollador en formación",
        codigo:"Código",
        footer:"Todos los derechos reservados"
    },
    en: {
        inicio:"Home",
        exper:"Experience",
        proy:"Projects",
        titulo:"Junior Developer",
        descripcion:"Systems Analyst Student",
        descarga:"Download CV",
        exp:"Work Experience",
        tiempo:"Present",
        busqueda: "Looking for my firste opportunity in the world IT",
        actualmente:"I am currently training to be Systems Analyst and developing my own projects to improve my skills",
        proyectos:"Personal Projects",
        portfolio:"Digital Portfolio",
        descripciontrabajo:"Responsive web portfolio to showcase my projects and skills as a developer in training",
        codigo:"Code",
        footer:"All rights reserved"
    }
}

function cambiarIdioma(idioma){
    const elementos = document.querySelectorAll("[data-key]");
    elementos.forEach(el => {
        const key = el.getAttribute("data-key");
        e1.textContent = textos[idioma][key];
    });
}