#include <stdio.h>
#include <stdlib.h>

// Define a structure for the linked list node
struct Node {
    int index;
    struct Node* next;
};

// Function to create and populate the circular linked list
struct Node* createCircularLinkedList(int n) {
    struct Node* head = NULL;
    struct Node* current = NULL;

    for (int i = 1; i <= n; i++) {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->index = i;
        newNode->next = NULL;

        if (head == NULL) {
            head = newNode;
            current = newNode;
        } else {
            current->next = newNode;
            current = newNode;
        }
    }

    // Make the linked list circular
    current->next = head;

    return head;
}

// Function to simulate the elimination process
int josephus(int n, int k) {
    struct Node* head = createCircularLinkedList(n);
    struct Node* current = head;
    struct Node* prev = NULL;

    while (n > 1) {
        // Find the k-th person to eliminate
        for (int i = 1; i < k; i++) {
            prev = current;
            current = current->next;
        }

        // Eliminate the k-th person
        prev->next = current->next;
        free(current);
        current = prev->next;
        n--;
    }

    // The last person remaining is the answer
    int lastPersonIndex = current->index;

    // Free the memory for the remaining node
    free(current);

    return lastPersonIndex;
}

int main() {
    int n, k;
    scanf("%d %d", &n, &k);

    int lastPersonIndex = josephus(n, k);
    printf("%d\n", lastPersonIndex);

    return 0;
}
