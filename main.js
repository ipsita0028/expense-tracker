const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const transactionList = document.getElementById("transactionList");
const emptyMsg = document.getElementById("emptyMsg");
const clearBtn = document.getElementById("clearBtn");

const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const balanceEl = document.getElementById("balance");

let transactions = [];

addBtn.addEventListener("click", function () {
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeInput.value;

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and amount");
    return;
  }

  const transaction = {
    id: Date.now(),
    description: description,
    amount: amount,
    type: type,
  };

  transactions.push(transaction);

  descriptionInput.value = "";
  amountInput.value = "";

  renderTransactions();
  updateSummary();
  saveToLocalStorage();
});
