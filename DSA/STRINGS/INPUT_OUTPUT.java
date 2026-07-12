

import java.util.*;

public class INPUT_OUTPUT {

    public static String getFullName(Scanner sc) {
        System.out.print("Enter the full name: ");
        return sc.nextLine();
    }

    public static String getFirstName(Scanner sc) {
        System.out.print("Enter the first name: ");
        return sc.next();
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String fullName = getFullName(sc);
        System.out.println("Full Name: " + fullName);

        String firstName = getFirstName(sc);
        System.out.println("First Name: " + firstName);

      
    }
}