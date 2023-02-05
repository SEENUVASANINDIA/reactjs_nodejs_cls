#include<stdio.h>
void main()
{
	int a[10],d[10],i,n,c,b;
	scanf("%d",&n);
	for(i=0;i<n;i++)
	scanf("%d",&a[i]);
	for(i=0;i<n;i++)
	{
	b=a[i]%10;
	c=a[i]/10;
	d[i]=b+c;
	}
	for(i=0;i<n;i++)
	{
	printf("%d\t",d[i]);
	
	
	} //printf("%d\n",a[i]);
}
	
