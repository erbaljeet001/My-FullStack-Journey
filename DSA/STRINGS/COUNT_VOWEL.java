package DSA.STRINGS;


public class COUNT_VOWEL{
        public static void Countvowel(String str)
        {
            char[] vowel={'a','i','o','u','e','A','E','I','U','O'};
            
            
            int count =0;
            for(int i=0;i<str.length();i++)
            {
                 char currentchar = str.charAt(i); 
            
            
            for(int j=0;j<vowel.length;j++)
            {
                 if(currentchar == vowel[j])
                 {
                     count++;
                     break;
                 }
            }
            }
            
          System.out.println("the total number of Vowel present in String :"+count);
        }
      
      public static void main(String[] args)
      {
          String str="Baljeet Kumar Yadav";
          Countvowel(str);
          
      }
}
