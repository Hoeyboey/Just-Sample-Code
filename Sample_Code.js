var testingArray = [1, 2, 6, 9, 11];
function comparison(indexOne, indexTwo) {
 if (indexOne >= indexTwo) {
    return "Null"; 
 } else {
    var differenceInIndex = indexOne - indexTwo;
    var differenceInArrayValue = testingArray[indexOne] - testingArray[indexTwo];
    if (differenceInIndex === differenceInArrayValue){
            var successString = "When checking values at indexes " + indexOne + " and " + indexTwo + ", the difference between indexes is equal to difference in values!";
            return successString;
    }
    else {
            var failureString = "When checking values at indexes " + indexOne + " and " + indexTwo + ", the difference between indexes is not equal to difference in values!";
            return failureString;}
 }
}
 
var resultsArray = [];
for(var counterOne = 0; counterOne < 5; counterOne++){
    for(var counterTwo = 0; counterTwo < 5; counterTwo++){
        var resultOfComparison = comparison(counterOne, counterTwo);
        if (resultOfComparison !== "Null"){
            console.log(resultOfComparison);
        }
    }
