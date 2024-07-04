/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = head.next;

    // find middle
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let secondHalf = slow.next;
    slow.next = null;

    // reverse the second half
    let prev = null;
    while(secondHalf){
        let temp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = temp;
    }
    secondHalf = prev;

    // merge 2 halfs
    let firstHalf = head;
    while(secondHalf){
        let temp1 = firstHalf.next; // 2
        let temp2 = secondHalf.next; // 3

        firstHalf.next = secondHalf;  // 1 4
        secondHalf.next = temp1; // 1 4 2

        firstHalf = temp1; // 
        secondHalf = temp2;
    }
};