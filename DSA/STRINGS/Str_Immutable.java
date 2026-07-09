public class Str_Immutable {

  public static void Check_String(String str)
  {
    str = "Hello";
  }

  public static void main(String[] args) {
    String str = "Baljeet Kumar Yadav";
    System.out.println("Before Change :" + str);
    Check_String(str);
    System.out.println("After Change :"+str);

  }
  
}
