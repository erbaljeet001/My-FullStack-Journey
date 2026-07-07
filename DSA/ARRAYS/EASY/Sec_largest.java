public class Sec_largest {
    public int getSecondLargest(int[] arr) {
        int n= arr.length;
        int largest = Integer.MIN_VALUE;
        int Sec_largest = Integer.MIN_VALUE;
        for(int i=0;i<n;i++)
        {
             if(arr[i] > largest )
             {
                  largest= arr[i];
             }
        }
        
        for(int i=0;i<n;i++)
        {
             if(arr[i] > Sec_largest && arr[i]!= largest)
             {
                 Sec_largest= arr[i];
             }
        }
   if(Sec_largest == Integer.MIN_VALUE)
     return -1;
     
     return Sec_largest;
     
        
    }
    
} 

