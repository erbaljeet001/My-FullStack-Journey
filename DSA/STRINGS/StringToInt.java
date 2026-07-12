import java.util.Scanner;

public class StringToInt {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the String number");
    String x = sc.nextLine();
    int z = Integer.parseInt(x);
    System.out.println("after convert String number to Integer : "+(z+10));

  }
  
}
