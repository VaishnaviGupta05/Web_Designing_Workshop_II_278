class CurrentAccount extends BankAccount {

    public CurrentAccount(String accNo, String name, double balance) {
        super(accNo, name, balance);
    }

    @Override
    public void calculateInterest() {
        System.out.println("Current Account has no interest.");
    }
}