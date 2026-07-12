public class Concate {
  public static void main(String[] args) {
    String a = "Ram";
    String b = "shyam";
    a.concat(b);
    System.out.println(a); // it will not concate 

    String x = a.concat(b);
    System.out.println("after Concatenation : " + x);
   
    System.out.println("baljeet" + 10 + 20);
    System.out.println("baljeet" + (10 + 20));
   
    System.out.println(10 + 20 + "raghav");
    System.out.println(10 + "raghav" + "baljeet" + 20);

    String x1 = "rahul";

   x1 += " is a boy";
   System.out.println("after using plus for concatenation : " + x1);
  
   System.out.println('A' + 2); // Java converts the character 'A' to its ASCII/Unicode value (65) and performs numeric addition (65 + 2).
  
    
  }
  
}
