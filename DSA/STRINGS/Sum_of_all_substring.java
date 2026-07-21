public class Sum_of_all_substring
{
public static void SumString(String s)
  {
    int n = s.length();
    int sum = 0;
    for(int i=0;i<n;i++)
    {
      for (int j = i + 1; j < n + 1; j++) {
        String sub = s.substring(i, j);
        System.out.print(sub + " ");
        sum += Integer.parseInt(sub);
      }
      System.out.println();
    }
    System.out.println("the sum of All Substring is :"+sum);
    }
    public static void main(String[] args) {
      {
        String s = "1698";
        SumString(s);  
      }
    }
}