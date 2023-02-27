function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Ilustrator");
        habilidades[1].classList.add("Photoshop");
        habilidades[2].classList.add("HTMLyCSS");
        habilidades[3].classList.add("JavaScript");
        habilidades[4].classList.add("TypeScript");
        habilidades[5].classList.add("Ingles");
        habilidades[6].classList.add("Autodidacta");
        habilidades[7].classList.add("TrabajoEnEquipo");
        habilidades[8].classList.add("Creatividad");
        habilidades[9].classList.add("Adaptabilidad");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}