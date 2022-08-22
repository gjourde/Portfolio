
import { Form } from "./Form.js";

export class Skill {
    #name
    #level
    #icon

    constructor(name, level, icon) {
        this.#name = name;
        this.#level = level;
        this.#icon = icon;
    }

    getName() {
        return this.#name;
    }
    getLevel() {
        return this.#level;
    }
    getIcon() {
        return this.#icon;
    }

    displaySkill(container) {
        let skillBox = Form.NewSkillBox(this.#icon, this.#name, this.#level);
        container.append(skillBox);
    }
}

export class Studie {
    #year
    #desc

    constructor(year, desc) {
        this.#year = year;
        this.#desc = desc;
    }

    getYear() {
        return this.#year;
    }
    getDesc() {
        return this.#desc;
    }

    displayStudie(container) {
        let studieBox = Form.NewFormationBox(this.#year, this.#desc)
        container.append(studieBox)
    }
}

export class Experience {
    #year
    #name
    #desc

    constructor(year, name, desc) {
        this.#year = year;
        this.#name = name;
        this.#desc = desc;
    }

    getYear() {
        return this.#year;
    }
    getName() {
        return this.#name;
    }
    getDesc() {
        return this.#desc;
    }

    displayExp(container) {
        let expBox = Form.NewExperienceBox(this.#year, this.#name, this.#desc)
        container.append(expBox)
    }
}

export class DevProject {
    #name
    #src
    #link
    #desc1
    #desc2

    constructor(name, src, link, desc1, desc2) {
        this.#name = name;
        this.#src = src;
        this.#link = link;
        this.#desc1 = desc1;
        this.#desc2 = desc2;
    }

    getName() {
        return this.#name;
    }

    getSrc() {
        return this.#src;
    }

    getLink() {
        return this.#link;
    }

    getDesc1() {
        return this.#desc1;
    }
    getDesc1() {
        return this.#desc2;
    }

    displayDevProj(container) {
        let devProjBox = Form.NewDevProject(this.#name, this.#src, this.#link, this.#desc1, this.#desc2)
        container.append(devProjBox)
    }
}