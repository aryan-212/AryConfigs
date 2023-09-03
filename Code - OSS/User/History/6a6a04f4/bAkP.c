#include<stdio.h>
#include<stdlib.h>

// Structure for a node
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Function to insert elements int the circular linked list
struct Node* insert(struct Node* head, int value) {
    if (head == NULL) {
        head = createNode(value);
        head->next = head;  // Pointing to itself as it is the only element
    }
    else {
        struct Node* temp = head;
        while (temp->next != head) {    // Traversing to the last Node
            temp = temp->next;
        }
        struct Node* newNode = createNode(value);
        newNode->next = head;   // Making the new node point to the head
        temp->next = newNode;   // Making the last node point to the new node
    }
    return head;
}

struct Node* deleteNode(struct Node* head) {
        struct Node* last = head;

        while (last->next != head) {
            last = last->next;
        }

        head = head->next;
        free(last->next);
        last->next=head;
        return head;
    
}

void display(struct Node* head) {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node* temp = head;
    printf("Circular Linked List: ");
    do {
        printf("%d ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("\n");
}

int main() {
    struct Node* head = NULL;
    int n, value;
    int k;
    scanf("%d %d", &n, &k);
    for (int i = 1; i <= n; i++) {
        head = insert(head, i);
    }
    int count=0;
    while(head->next!=head){
        if(count==k){
            count=0;
        }
        else{
            head=head->next;
            for(int i=0;i<k;i++){
                head=head->next;
            }
            count++;
        }
    }
    printf("%d",(head->data));
   

    return 0;
}