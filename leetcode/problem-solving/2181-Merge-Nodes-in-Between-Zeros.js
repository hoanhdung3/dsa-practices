/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    // New List Solution
    let res = new ListNode(), tail = res;
    while(head.next){
        let node = new ListNode(0);
        while(head.next.val !== 0){
            node.val += head.next.val;
            head = head.next
        }
        tail.next = node;
        tail = tail.next;
        head = head.next;
    }

    return res.next;
};

var mergeNodes1 = function(head) {
    // In-place Solution
    let curr = head;

    while(curr.next){
        let node = curr.next;
        curr = curr.next;
        while(curr.next.val !== 0){
            node.val += curr.next.val;
            curr = curr.next;
        }
        curr = curr.next;
        node.next = curr.next;
    }
    return head.next;
};

