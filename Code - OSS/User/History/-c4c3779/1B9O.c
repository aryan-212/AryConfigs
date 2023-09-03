#include <stdio.h>
#include <stdlib.h>

// Structure for linked list node
struct Node {
    int index;
    struct Node* next;
};

// Function to create a new linked list node
struct Node* createNode(int index) {
    struct Node* newNode = (struct Node*)malloc(sizeof
(struct Node));
    newNode->index = index;
    newNode->next = NULL;
    return newNode;
}

// Function to create and populate the circular linked
 list
struct Node* createCircularLinkedList(int n) {
    // Initialize head and tail pointers
    struct Node *head = NULL, *tail = NULL;

    // Create the first node
    head = createNode(1);
    tail = head;

    // Create and add remaining nodes
    for (int i = 2; i <= n; i++) {
        tail->next = createNode(i);
        tail = tail->next;
    }

    // Make the last node point to the head, creating
 the circular linked list
    tail->next = head;

    return head;
}

// Function to simulate the elimination process based on
 the Josephus Problem
int josephusProblem(struct Node* head, int k) {
    struct Node* current = head;
    struct Node* prev = NULL;

    // Find the last person remaining
    while (current->next != current) {
        // Count k-1 persons and remove the k-th person
        for (int i = 1; i < k; i++) {
            prev = current;
            current = current->next;
        }

        // Remove the k-th person
        prev->next = current->next;

        // Move to the next person
        current = prev->next;
    }

    // Return the index of the last person remaining
    return current->index;
}

int main() {
    int n, k;
    printf("Enter the number of people in the circle:
 ");
    scanf("%d", &n);
    printf("Enter the counting interval for elimination:
 ");
    scanf("%d", &k);

    // Create and populate the circular linked list of
 people
    struct Node* head = createCircularLinkedList(n);

    // Simulate the elimination process and get the
 index of the last person remaining
    int lastPersonIndex = josephusProblem(head, k);

    printf("Index of the last person remaining: %d\n",
 lastPersonIndex);

    return 0;
    }