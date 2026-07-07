class LargestElement {
    public static int largest(int[] arr) {
        // code here
        int n= arr.length;
        int largest= Integer.MIN_VALUE;
        boolean found = false ;
        for(int i=0;i<n;i++)
        {
            if(arr[i] > largest)
            {
                 largest= arr[i];
                 found = true;
            }
        }
          
        return largest;
    }
}
