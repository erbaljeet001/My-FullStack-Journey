import java.util.Scanner;

public class IntToString {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number :");
    int n = sc.nextInt();
    String s = "50"; // Empty string
    System.out.println("after convert int to String : " + (n + s));

    // use built in keyword

    String s1 = Integer.toString(n);
    System.out.println("after use builtin keyword for converting Integer to String :  "+s1);
  
    
    


  }
  
}
