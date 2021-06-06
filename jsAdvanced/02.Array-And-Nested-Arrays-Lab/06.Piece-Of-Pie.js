function solve(flavours , target1, target2) {
    let flavour1Index = flavours.indexOf(target1);
    let flavour2Index = flavours.indexOf(target2);
    let newArr = flavours.splice(flavour1Index, flavour2Index);
    return newArr;
} 

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));