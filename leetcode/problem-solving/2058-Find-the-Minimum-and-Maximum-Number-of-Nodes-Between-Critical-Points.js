/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let res = [-1, -1];
    let prev = head;
    let curr = head.next;
    let prev_critical_index = first_critical_index = null;
    let curr_index = 1;

    while(curr.next){
        if(
            (curr.val < prev.val && curr.val < curr.next.val) || 
            (curr.val > prev.val && curr.val > curr.next.val)
        ){
            if(first_critical_index === null){

                first_critical_index = curr_index;

            }else{

                res[0] = (res[0] === -1) ? curr_index - first_critical_index : Math.min(res[0], curr_index - prev_critical_index);

            }
            prev_critical_index = curr_index;
        }

        prev = curr;
        curr = curr.next;
        curr_index++;
    }

    if(prev_critical_index !== null && prev_critical_index !== first_critical_index ){
        res[1] = prev_critical_index - first_critical_index;
    }

    return res;
};