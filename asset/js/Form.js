
export class Form {

    static NewSkillBox(icon, name, level) {
        let skillBox = $("<div></div>").addClass("skill-bloc").html(`<i class="${icon}"></i>
        <p>${name}</p>
        <progress max="100" value="${level}"> ${level}% </progress>`
        );
        return skillBox;
    }

    static NewFormationBox(year, desc) {
        let FormationBox = $("<div></div>").addClass("studie-bloc").html(`<p class="year">${year}</p>
        <div class="description">
            ${desc}
        </div>`);
        return FormationBox;
    }

    static NewExperienceBox(year, name, tabDesc) {
        let desc = '';
        tabDesc.forEach(elt => {
            desc += `<li>${elt.txt}</li>`
        });

        let experienceBox = $("<div></div>").addClass("exp-bloc").html(`<p class="year">${year}</p>
        <div class="description">
            <h5>${name}</h5>
            <ul>${desc}</ul>
        </div>`);

        return experienceBox
    }

    static NewDevProject(name, src, link, desc1, desc2) {
        let DevProjBox = $("<div></div>").addClass("project-bloc").html(`<h3 class="name">${name}</h3>
        <div class="preview">
            <div class="windows">
                <div class="windows-banner">
                    <div class="btn-red"></div>
                    <div class="btn-yellow"></div>
                    <div class="btn-green"></div>
                </div>      
                <a href="${link}" target="_blank"><img src="${src}" alt="${name}" srcset=""></a> 
            </div>          
            <div class="description">
                <h5>Description du projet :</h5>
                <p>${desc1}</p>
                <p>${desc2}</p>
            </div>
        </div>`);
        return DevProjBox
    }
}
