package DSA.STRINGS;
public class COUNT_VOWEL{
        public static void Countvowel(String str)
        {
            char[] vowel={'a','i','o','u','e','A','E','I','U','O'};
            
            
            int count =0;
            for(int i=0;i<str.length();i++)
            {
                 char ch = str.charAt(i); 
            
                 if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
                 {
                     count++;
                     
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

