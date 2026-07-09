

import java.util.*;

public class Palindrome_String {
  public static boolean find_Palindrome(String str)
  {
    int start = 0;
    int end = str.length()-1;
    while (start <= end) {
      if (str.charAt(start) != str.charAt(end)) 
        return false;
        start++;
        end--;
      

    }
    return true;

  }
   

  public static void main(String[] args)
  {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter the String to check Palindrome or not :");
      String str = sc.nextLine();
      boolean x = find_Palindrome(str);
      System.out.println("String is palindrome : "+x);
  }
  
}
