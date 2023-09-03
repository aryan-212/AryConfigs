#include<stdio.h>
#include<stdlib.h>



struct nudd
{
    struct nudd *prev;
    char data;
    struct nudd *next;
};



struct nudd *first = NULL;


void create(int a[],int n)
{
    int i;
    struct nudd *t,*last;
    first = (struct nudd *)malloc(sizeof(struct nudd));
    first->data = a[0];
    first->next = NULL;
    first->prev = NULL;
    last = first;

    for(i=1;i<n;i++)
    {
        t=(struct nudd *)malloc(sizeof(struct nudd));
        t->data = a[i];
        t->next = NULL;
        t->prev = last;
        last->next = t;
        last=t;
    }
}

void dispp(struct nudd *p)
{
    while(p!=NULL)
    {
        printf("%c\t",p->data);
        p = p->next;
    }
}

int palin(struct nudd *p,int n)
{
    struct nudd *q;
    q = p;
    while(q->next!=NULL)
        q=q->next;
    
    for(int i=0;i<(n/2);i++)
    {
        if(p->data==q->data)
        {
            p=p->next;
            q=q->prev;
            continue;
        }
        else
            return 0;
    }
    return 1;
}

int main()
{
    int n;
    char c;
    //printf("Enter the number of elements : ");
    scanf("%d",&n);

    getchar();

    int a[n];
    for(int i=0;i<n;i++)
    {
        scanf("%c",&c);
        a[i]=c;
        getchar();
    }
    create(a,n);
    //printf("\n");
    //dispp(first);

    printf("%d",palin(first,n));

    return 0;
}