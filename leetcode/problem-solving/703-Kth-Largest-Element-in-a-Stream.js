/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums = this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/*
----------------------------------------------------------------------------------------------------------------

*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();
    for(const n of nums){
        this.minHeap.enqueue(n);
        if(this.minHeap.size() > this.k){
            this.minHeap.dequeue();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);
    if(this.minHeap.size() > this.k){
        this.minHeap.dequeue();
    }

    return this.minHeap.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */