/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let headPointer = 0;
    let tailPointer = numbers.length - 1;
    while (headPointer < tailPointer){
        let sum = numbers[headPointer] + numbers[tailPointer];
        if(sum === target){
            return [headPointer + 1, tailPointer + 1];
        }else if(sum < target){
            headPointer++;
        }else{
            tailPointer--;
        }
    }
    return [];
};