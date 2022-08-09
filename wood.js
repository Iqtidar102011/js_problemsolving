// per chair wood-3
// per table wood-10
// per bed wood 50
function totalWood(chair, table, bed) {
    const woodForChair = chair * 3;
    const woodForTable = table * 10;
    const woodForBed = bed * 50;
    const total = woodForBed + woodForChair + woodForTable;
    return total;
}
const result = totalWood(2, 1, 0);
console.log(result);