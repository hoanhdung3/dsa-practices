/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let sumWaitingTime = 0;
    let currTime = customers[0][0];
    for(let i=0; i<customers.length; i++){
        if(customers[i][0] < currTime){
            currTime += customers[i][1];
        }else{
            currTime = customers[i][0] + customers[i][1];
        }
        sumWaitingTime += currTime - customers[i][0];
    }
    return parseFloat(sumWaitingTime / customers.length);
};