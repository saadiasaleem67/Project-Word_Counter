import inquirer from "inquirer";
let word = await inquirer.prompt({
    type: "input",
    name: "counter",
    message: "Write any paragraph here :\n"
});
let para = word.counter.split(" ").length;
console.log(`${para} , words are persent in this paragarph`);
let again = await inquirer.prompt({
    type: "checkbox",
    name: "letter",
    choices: ["YES", "NO"],
    message: "Do you want to count the letters? :\n"
});
if (again.letter == "YES") {
    let white = word.counter.replace(/\s/g, "");
    let space = white.length;
    console.log(space, "letters are present");
}
else {
    console.log("ok");
}
