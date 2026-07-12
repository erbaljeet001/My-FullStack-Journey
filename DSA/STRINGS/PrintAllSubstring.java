public class PrintAllSubstring {
  public static void allSubstring(String str)
  {
    int n = str.length();
    
    for (int i = 0; i < n; i++) {
      for(int j=i+1;j<=n;j++)
      {
        System.out.print(" " +str.substring(i, j));
      }
      System.out.println("");
    }

  }
  
  public static void main(String[] args) {
    String str = "gopi";
    allSubstring(str);
  }
  
}
