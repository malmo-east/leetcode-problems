let middle_number = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

console.log(middle_number([1, 2, 3, 4, 5]));
