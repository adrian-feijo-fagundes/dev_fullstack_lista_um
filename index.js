import { isEvenExample } from "./src/exercicio_01.js";
import { classifyAgeExample } from "./src/exercicio_02.js";
import { classifyGradeExample } from "./src/exercicio_03.js";

const start = (callback) => {
    callback()
}

const exercises = [
    isEvenExample,
    classifyAgeExample,
    classifyGradeExample

]
start(isEvenExample)