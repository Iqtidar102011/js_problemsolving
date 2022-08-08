const names = ["rahim", "karim", "jahir", "babul", "rahim", "sagor", "jahir"];
function removeDuplicate(names) {
    let uniqueName = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (uniqueName.includes(element) === false) {
            uniqueName.push(element);
        }
    }
    return uniqueName;
}
const result = removeDuplicate(names);
console.log(result);