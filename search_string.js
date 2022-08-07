// apply search includes
const random = "i am hungry. lets play fifa. vau vau";
const randomLowerCase = random.toLowerCase();
const searchString = "FIFA";
const searchLowerCase = searchString.toLowerCase();
const findString = randomLowerCase.includes(searchLowerCase);
// console.log(findString);

// indexof-------------------------
if (random.indexOf("play") !== -1) {
    console.log("exists inside the string");
}
else {
    console.log('does not exist');
}

// startsWith
console.log(random.startsWith("i"));

// endswith///
const fileName = "a.pdf";
const otherFile = "b.jpg";
fileName.endsWith(".pdf");

