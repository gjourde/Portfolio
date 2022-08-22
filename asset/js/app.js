//import
import { Skill } from "./Skills.js";
import { Studie } from "./Skills.js";
import { Experience } from "./Skills.js";
import { DevProject } from "./Skills.js";

/*Déclaration des vairalbes GLOBAL*/
/*Elements du DOM*/
let eltBtnMenu = document.getElementById("burger-menu");
let eltMenu = document.getElementById("menu");
let tabBtnMenu = eltMenu.querySelectorAll("a");
let speech2 = document.getElementById("speech2");
let arrowNext = document.getElementById("arrow");

/*Fonction pour l'animation du menu sandwich*/
function basculeSandwich(btnMenu, menu) {
    if (btnMenu.getAttribute("state") == "false") {
        menu.style.display = 'block';
        btnMenu.setAttribute("state", "true")
    } else {
        menu.style.display = 'none';
        btnMenu.setAttribute("state", "false")
    }
    btnMenu.classList.toggle("anim-sandwich");
}

/*Fonction pour l'animation du menu sandwich sur en redimensionnement de la page*/
function redimensionnement() {
    if ("matchMedia" in window) {
        /*Détection*/
        if (window.matchMedia("(max-width: 1199px)").matches) {
            if (eltBtnMenu.getAttribute("state") == "true") {

                eltBtnMenu.setAttribute("state", "false");
                eltBtnMenu.classList.toggle("anim-sandwich");
            }
            eltMenu.style.display = 'none';
        }
        if (window.matchMedia("(min-width: 1200px)").matches) {
            if (eltBtnMenu.getAttribute("state") == "true") {

                eltBtnMenu.setAttribute("state", "false")
                eltBtnMenu.classList.toggle("anim-sandwich");
            }
            eltMenu.style.display = 'block';
        }
    }
}

/*Fermeture automatique du menu*/
function fermeMenu() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
        eltBtnMenu.setAttribute("state", "false");
        eltMenu.style.display = 'none';
        eltBtnMenu.classList.toggle("anim-sandwich");
    }
}

/*Animation de la fleche sur la page welcome*/
//arrowNext.style.animationPlayState = "paused";
arrowNext.style.opacity = 0;
speech2.addEventListener("animationend", EndAnimSpeech2)

function EndAnimSpeech2() {
    arrowNext.style.opacity = 1;
    arrowNext.classList.toggle("arrow-next");
    //arrowNext.style.animationPlayState = "running";
}

/*Changement des data json*/
/*front*/
$.ajax({
    context: $('#front-skill .sbloc'),
    method: 'GET',
    url: "./asset/json/front_skills.json"
})
    .done(function (data) {
        data.skills.forEach(skill => {
            let oneSkill = new Skill(skill.name, skill.lvl, skill.icon);
            oneSkill.displaySkill($(this));
        });
    })

    .fail(function (jqXHR, textStatus) {
        alert(textStatus);
    })

/*back*/
$.ajax({
    context: $('#back-skill .sbloc'),
    method: 'GET',
    url: "./asset/json/back_skills.json"
})
    .done(function (data) {
        data.skills.forEach(skill => {
            let oneSkill = new Skill(skill.name, skill.lvl, skill.icon);
            oneSkill.displaySkill($(this));
        });
    })

    .fail(function (jqXHR, textStatus) {
        alert(textStatus);
    })

/*projet*/
$.ajax({
    context: $('#projet-skill'),
    method: 'GET',
    url: "./asset/json/projet_skills.json"
})
    .done(function (data) {
        data.skills.forEach(skill => {
            let oneSkill = new Skill(skill.name, skill.lvl, skill.icon);
            oneSkill.displaySkill($(this));
        });
    })

    .fail(function (jqXHR, textStatus) {
        alert(textStatus);
    })

/*studie*/
$.ajax({
    context: $('#my-studies'),
    method: 'GET',
    url: "./asset/json/experiences.json"
})
    .done(function (data) {
        data.studies.forEach(studie => {
            let oneStudie = new Studie(studie.year, studie.desc);
            oneStudie.displayStudie($(this));
        });
    })

    .fail(function (jqXHR, textStatus) {
        alert(textStatus);
    })

/*experiences*/
$.ajax({
    context: $('#job-experience'),
    method: 'GET',
    url: "./asset/json/experiences.json"
})
    .done(function (data) {
        data.experiences.forEach(experience => {
            let oneExp = new Experience(experience.year, experience.name, experience.desc);
            oneExp.displayExp($(this));
        });
    })

    .fail(function (jqXHR, textStatus) {
        alert(textStatus);
    })

/*Projet du portfolio*/
$.ajax({
    context: $('.portfolio'),
    method: 'GET',
    url: "./asset/json/dev_projects.json"
})
    .done(function (data) {
        data.projects.forEach(project => {
            let oneProject = new DevProject(project.name, project.src, project.link, project.desc1, project.desc2);
            oneProject.displayDevProj($(this));
        });
    })

    .fail(function (jqXHR, textStatus) {
        alert(textStatus);
    })

/*-----------------------------------MAIN---------------------------------------*/

/*Affichage du menu si page version PC*/
if (window.matchMedia("(max-width: 1199px)").matches) {
    menu.style.display = 'none';
} else {
    menu.style.display = 'block';
}

// On lie l'événement "click" à la fonction
eltBtnMenu.addEventListener("click", function () {
    basculeSandwich(eltBtnMenu, eltMenu);
});

// On lie l'événement "resize" à la fonction
window.addEventListener('resize', redimensionnement, false);

//On lie l'événement "click" de tous les liens à la fonction
tabBtnMenu.forEach(element => {
    element.addEventListener('click', fermeMenu, false);
});