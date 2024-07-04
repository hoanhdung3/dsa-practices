/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let listnode = new ListNode();
    let tmpList = listnode;
    while (list1 && list2){
        if(list1.val < list2.val){
            tmpList.next = list1;
            list1 = list1.next;
        }else{
            tmpList.next = list2;
            list2 = list2.next;
        }
        tmpList = tmpList.next;
    }
    tmpList.next = list1 || list2
    return listnode.next;
};