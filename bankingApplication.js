// Question 1: Exploring Objects and Math in JavaScript

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner

function Account(accountNumber, balance, owner = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;

// Task 2: Implement methods within the Account object to deposit and withdraw funds

this.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
};

this.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  };

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate

this.calculateCompoundInterest = function(rate, periods) {
    if (rate > 0 && periods > 0) {
      let interest = this.balance * Math.pow((1 + rate), periods) - this.balance;
      console.log(`Compound Interest: $${interest.toFixed(2)}`);
      return interest;
    } else {
      console.log("Please provide a valid interest rate and number of periods.");
    }
  };
}

let myAccount = new Account(1234567, "John Smith", 4000);
myAccount.deposit(800);
myAccount.withdraw(300);
myAccount.calculateCompoundInterest(0.05, 5); // Calculating compound interest with 5% annual rate for 5 periods