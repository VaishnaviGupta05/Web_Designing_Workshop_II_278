public class Main {
    public static void main(String[] args) {

        // Create Savings Account object
        SavingsAccount s1 = new SavingsAccount("S101", "Rahul Sharma", 10000);

        // Create Current Account object
        CurrentAccount c1 = new CurrentAccount("C201", "Anita Verma", 15000);

        System.out.println("===== SAVINGS ACCOUNT =====");
        s1.displayAccount();
        s1.deposit(2000);
        s1.calculateInterest();
        s1.displayAccount();

        System.out.println("\n===== CURRENT ACCOUNT =====");
        c1.displayAccount();
        c1.deposit(5000);
        c1.calculateInterest();
        c1.displayAccount();
    }
}