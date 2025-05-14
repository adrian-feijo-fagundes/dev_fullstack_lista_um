const classifyGrade = (grade) => {
    if (grade > 10 || grade < 0) return "a nota não foi dada corretamente";
    if (grade > 6) return "está aprovado";
    if (grade > 2) return "está em recuperação";
    return "está reprovado"
}

export const classifyGradeExample = () => {
    console.log(
        "3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como",
        "\n\"Aprovado\", \"Recuperação\", ou \"Reprovado\" utilizando if-else if.")
    
    const students = [
        {
            name: "Miguel",
            grade: 10
        },
        {
            name: "Lucas",
            grade: 6
        },
        {
            name: "João",
            grade: 2
        },
        {
            name: "Carlos",
            grade: -1
        }
    ];
    for (let student of students) console.log(`${student.name} tinha a nota ${student.grade} e ${classifyGrade(student.grade)}`);
}