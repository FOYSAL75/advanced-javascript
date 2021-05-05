const students = [
    { id: 21, name: 'omor sany'},
    { id: 31, name: 'manna'},
    { id: 41, name: 'moyori'},
    { id: 51, name: "dipjol"}
]

const namesOne = students.map(x => x.id);

const namesTwo = students.filter(x => x.id>30);

const namesThree = students.find(x => x.id>30);
console.log(namesThree);