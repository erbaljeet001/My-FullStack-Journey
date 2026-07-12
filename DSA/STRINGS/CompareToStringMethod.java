public class CompareToStringMethod {

  public static int CompareToString(String x, String y)
  {
    int n1 = x.length();
    int n2 = y.length();
    int diff = 0;
    int minlen = n1 < n2 ? n1 : n2;

    for(int i=0;i< minlen;i++)
    {
      if (x.charAt(i) != y.charAt(i)) {
        diff = x.charAt(i) - y.charAt(i);
        return diff;
      }
    }
    if (n1 != n2)
    {
      return n1 - n2;
        
      }

    
    return 0;
  }
  public static void main(String[] args)
  {
      String x= "baljeet";
      String y= "balwant";
      // System.out.println(x.compareTo(y)); // difference print as negative
      // System.out.println(y.compareTo(x)); // difference print as positive
      int res = CompareToString(x, y);
      System.out.println(res);
}
  
}
