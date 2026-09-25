let name="Fathima Muhsina T P";
const age=22;
let skills=["python","Django","javascript","HTML","CSS"];
const developer={
    name:name,
    age:age,
    skills:skills,
    goal: "Full-Stack Developer",
    education:"Master's in Computer Science"
};
function introduce(person){
    return`Hello, my name is ${person.name}.I am learning full-stack development.`;
}
function countSkills(person) {
    return person.skills.length;
}
function showProfile(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Goal: ${person.goal}`);
    console.log(`Education: ${person.education}`);
}
showProfile(developer);
console.log(`DESCRIPTION: ${introduce(developer)}`);
console.log(`I have ${countSkills(developer)} skills.`);
