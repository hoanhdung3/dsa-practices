/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;
    for(let i=0; i<rating.length; i++){
        let lSmaller = 0, rSmaller = 0, lGreater = 0, rGreater = 0;
        for(let j=0; j<i; j++){
            if(rating[i] > rating[j]){
                lSmaller++;
            }else{
                lGreater++;
            }
        }
        for(let j=i+1; j<rating.length; j++){
            if(rating[i] > rating[j]){
                rSmaller++;
            }else{
                rGreater++;
            }
        }
        res += rSmaller * lGreater + lSmaller * rGreater;
    }
    
    return res;
};