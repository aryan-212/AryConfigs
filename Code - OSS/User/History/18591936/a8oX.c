#include <stdio.h>
#include <stdlib.h>

// Define a structure for the linked list node
struct nudd {
    int index;
    struct nudd* next;
};

// Function to create and populate the circular linked list
struct nudd* createCircularLinkedList(int n) {
    struct nudd* head = NULL;
    struct nudd* current = NULL;

    for (int i = 1; i <= n; i++) {
        struct nudd* newNode = (struct nudd*)malloc(sizeof(struct nudd));
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
    struct nudd* head = createCircularLinkedList(n);
    struct nudd* current = head;
    struct nudd* prev = NULL;

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
