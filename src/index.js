class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    removeNthFromEnd(n) {
        let length = 0;
        let current = this.head;
        while (current) {
            length++;
            current = current.next;
        }
        if (n > length) {
            return;
        }
        if (n === length) {
            this.head = this.head.next;
            return;
        }
        let main = this.head;
        for (let i = 0; i < length - n - 1; i++) {
            main = main.next;
        }
        main.next = main.next.next;
    }

    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        console.log();
    }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log("Asl ro'yxat:");
linkedList.printList();
linkedList.removeNthFromEnd(2);
console.log("N=2 o'chirilgan ro'yxat:");
linkedList.printList();
