#include <stdio.h>
#include <stdlib.h>

// Define a structure for the linked list node
struct nudd {
    int ind;
    struct nudd* next;
};

// Function to create and populate the circular linked list
struct nudd* createCircularLinkedList(int n) {
    struct nudd* hed = NULL;
    struct nudd* curr = NULL;

    for (int i = 1; i <= n; i++) {
        struct nudd* newNode = (struct nudd*)malloc(sizeof(struct nudd));
        newNode->ind = i;
        newNode->next = NULL;

        if (hed == NULL) {
            hed = newNode;
            curr = newNode;
        } else {
            curr->next = newNode;
            curr = newNode;
        }
    }

    // Make the linked list circular
    curr->next = hed;

    return hed;
}

// Function to simulate the elimination process
int josephus(int n, int k) {
    struct nudd* hed = createCircularLinkedList(n);
    struct nudd* curr = hed;
    struct nudd* prev = NULL;

    while (n > 1) {
        // Find the k-th person to eliminate
        for (int i = 1; i < k; i++) {
            prev = curr;
            curr = curr->next;
        }

        // Eliminate the k-th person
        prev->next = curr->next;
        free(curr);
        curr = prev->next;
        n--;
    }

    // The last person remaining is the answer
    int lastPersonIndex = curr->ind;

    // Free the memory for the remaining node
    free(curr);

    return lastPersonIndex;
}

int main() {
    int n, k;
    scanf("%d %d", &n, &k);

    int lastPersonIndex = josephus(n, k);
    printf("%d\n", lastPersonIndex);

    return 0;
}
