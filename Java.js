const textos ={
    es: {
        inicio:"Inicio",
        exper:"Experiencia",
        proy:"Proyectos",
        titulo: "Desarrollador en formacion",
        descripcion:"Estudiante de Analista de Sistemas | HTML, CSS, JavaScript, Python, SQL, GIT",
        descarga:"Descargar CV",
        exp:"Experiencia Laboral",
        tiempo:"Abril 2025-Actualidad",
        busqueda:"A&M Distribuidora",
        actualmente:"Gestión de ventas y distribución de productos (Emprendimiento propio)",
        proyectos:"Proyectos Personales",
        portfolio:"Portfolio Digital",
        descripciontrabajo:"Portfolio web responsive para mostrar mis proyectos y habilidades como desarrollador en formación",
        codigo:"Código",
        footer:"\u00A9 2026 Ramiro Sosa -Todos los derechos reservados",
        bachiller:"Bachiller en Comunicaciones",
        intech:"2022-Actualidad",
        tecnicatura:"Tecnicatura en Analista de Sistemas",
        skills:"Habilidades",
        estudios:"Estudios",
        tooltip_es:"Español",
        tooltip_en:"Ingles"
    },
    en: {
        inicio:"Home",
        exper:"Experience",
        proy:"Projects",
        titulo:"Junior Developer",
        descripcion:"Systems Analyst Student | HTML, CSS, JavaScript, Python, SQL, GIT",
        descarga:"Download CV",
        exp:"Work Experience",
        tiempo:"April 2025-Present",
        busqueda: "A&M Distributor",
        actualmente:"Sales and product distribution management (Self-employment)",
        proyectos:"Personal Projects",
        portfolio:"Digital Portfolio",
        descripciontrabajo:"Responsive web portfolio to showcase my projects and skills as a developer in training",
        codigo:"Code",
        footer:"\u00A9 2026 Ramiro Sosa - All rights reserved",
        bachiller:"Bachelor in Communications",
        intech:"2022-Present",
        tecnicatura:"Technical degree in Systems Analysis",
        skills:"Skills",
        estudios:"Studies",
        tooltip_es:"Spanish",
        tooltip_en:"English"
    }
};

function cambiarIdioma(idioma){
    const elementos = document.querySelectorAll("[data-key]");
    elementos.forEach(button => {
        const key = button.getAttribute("data-key");
        button.textContent = textos[idioma][key];
    });
      const tooltips = document.querySelectorAll("[data-tooltip]");
    tooltips.forEach(el => {
        const key = el.getAttribute("data-tooltip");
        el.setAttribute("title", textos[idioma][key]);
    });
}
