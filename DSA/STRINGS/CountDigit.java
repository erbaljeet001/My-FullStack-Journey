import java.util.Scanner;

public class CountDigit {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the Number :");
    double n = sc.nextDouble();
    
    String s = "" + n;
    System.out.println("the length :"+s.length());
  }
  
}
