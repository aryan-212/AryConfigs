#include<stdio.h>
#include<stdlib.h>



struct nudd
{
    struct nudd *prev;
    char data;
    struct nudd *nx;
};



struct nudd *first = NULL;


void create(int a[],int n)
{
    int i;
    struct nudd *t,*last;
    first = (struct nudd *)malloc(sizeof(struct nudd));
    first->data = a[0];
    first->nx = NULL;
    first->prev = NULL;
    last = first;

    for(i=1;i<n;i++)
    {
        t=(struct nudd *)malloc(sizeof(struct nudd));
        t->data = a[i];
        t->nx = NULL;
        t->prev = last;
        last->nx = t;
        last=t;
    }
}

void dispp(struct nudd *p)
{
    while(p!=NULL)
    {
        printf("%c\t",p->data);
        p = p->nx;
    }
}

int palin(struct nudd *p,int n)
{
    struct nudd *q;
    q = p;
    while(q->nx!=NULL)
        q=q->nx;
    
    for(int i=0;i<(n/2);i++)
    {
        if(p->data==q->data)
        {
            p=p->nx;
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