/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let connectedComponentCount = 0;
    const setRepresentatives = new Map();

    const findRepresentative = (element) => {
        if (!setRepresentatives.has(element)) {
            setRepresentatives.set(element, element);
            connectedComponentCount++;
        }
        if (setRepresentatives.get(element) !== element) {
            setRepresentatives.set(element, findRepresentative(setRepresentatives.get(element)));
        }
        return setRepresentatives.get(element);
    };

    const mergeComponents = (elementA, elementB) => {
        const repA = findRepresentative(elementA);
        const repB = findRepresentative(elementB);
        if (repA !== repB) {
            setRepresentatives.set(repB, repA);
            connectedComponentCount--;
        }
    };

    for (const [x, y] of stones) {
        mergeComponents(x + 1, y + 10002);
    }

    return stones.length - connectedComponentCount;
};
