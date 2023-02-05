#include<stdio.h>
void main()
{

//int a[20]={10,21,32,43,54};
int a[20];
//int a=55;
int i,b,c,d,e,n;
printf("Enter number of elements in the array:");
scanf("%d",&n);
for(i=0;i<n;i++)
{
printf("Enter the %d element",i);
scanf("%d",&a[i]);

}
for(i=0;i<n;i++);
{
printf("%d\n",a[i]);
b=a[i];
//b=a;
c=b/10;
d=b%10;
e=c+d;
//printf("%d\n",e);
}

}


