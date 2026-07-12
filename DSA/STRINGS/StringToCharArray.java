public class StringToCharArray {

   public static void main(String[] args) {
     String x = "Developer Baljeet ";
     char[] y = x.toCharArray();
     System.out.println("after converting String to Char Array : ");
     for(char arr : y )
     {
       System.out.print(" " + arr);

     }
       System.out.println("");
    
     // another way 
    
     String[] z = x.split(" ");
     System.out.println("after covert String to String Array :");
     for(String str : z)
     System.out.println("   "+str);
     
   }
}