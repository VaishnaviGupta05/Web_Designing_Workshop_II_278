class SavingsAccount extends BankAccount {

    public SavingsAccount(String accNo, String name, double balance) {
        super(accNo, name, balance);
    }

    @Override
    public void calculateInterest() {
        double interest = getBalance() * 0.05; // 5% interest
        System.out.println("Savings Account Interest: " + interest);
    }
}