/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = "";
    let count = 1;
    let ch = word[0];

    for(let i=1; i<word.length; i++){
        if(word[i] === ch && count < 9){
            count++;
        }else{
            comp += count + ch;
            ch = word[i];
            count = 1;
        }
    }

    comp += count + ch;
    return comp;
};