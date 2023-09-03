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

// Function to insert elements into the circular linked list
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

// Function to delete a given value from the circular linked list
struct Node* deleteNode(struct Node* head, int value) {
    // If list is empty
    if (head == NULL) {
        printf("List is empty.\n");
        return head;
    }

    // If the node to be deleted is head
    if (head->data == value) {
        struct Node* last = head;

        // Finding the last node of the list
        while (last->next != head) {
            last = last->next;
        }

        // Changing the head to the next element
        head = head->next;
        last->next = head;
        free(last);
        return head;
    }

    // If the node to be deleted is in the middle or end
    struct Node* temp = head, *prev;
    while (temp->next != head) {
        // If required value is found
        if (temp->data == value) {
            prev->next = temp->next;
            free(temp);
            return head;
        }
        prev = temp;
        temp = temp->next;
    }

    // If required value is not present in the list
    if (temp->data != value) {
        printf("Node with value %d not found in the list.\n", value);
        return head;
    }

    // Deleting the last node in the list
    prev->next = temp->next;
    free(temp);
    return head;
}

// Function to display the circular linked list
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
    int n, value, choice;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    printf("Enter the elements:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &value);
        head = insert(head, value);
    }

    display(head);

    do {
        printf("\nChoose the operation:\n");
        printf("1. Delete a node\n");
        printf("2. Exit\n");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                printf("Enter the value to be deleted: ");
                scanf("%d", &value);
                head = deleteNode(head, value);
                display(head);
                break;
            case 2:
                printf("Program exited.\n");
                break;
            default:
                printf("Invalid choice.\n");
                break;
        }
    } while (choice != 2);

    return 0;
}