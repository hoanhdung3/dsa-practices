/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let cur = 0, next = 1;
    
    while(true){
        yield cur;
        let tmp = cur + next;
        cur = next;
        next = tmp;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */