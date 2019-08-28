// Variable Declarations
const expenseReason = document.getElementById("expense-reason");
const expenseAmount = document.getElementById("expense-amount");
const clearButton = document.getElementById("cancel");
const confirmButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const totalExpenseOutput = document.getElementById("total-expense");
const alertController = document.querySelector("ion-alert-controller");

let totalExpense = 0;

// clear function for clear button.
const clear = () => {
    expenseReason.value = '';
    expenseAmount.value = '';
}

confirmButton.addEventListener("click", () => {
    const enteredReason = expenseReason.value;
    const enteredAmount = expenseAmount.value;

    // Validation for the Text Value
    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0) {
        // Alert on the invalid Input
        alertController.create({
            message: "Plese Enter Valid Input!",
            header: "Invalid Input",
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        })
        return;
    } else {
        const listItem = document.createElement("ion-item");
        listItem.textContent = enteredReason + ' :$' + enteredAmount;

        expenseList.appendChild(listItem);

        //Keep adding expense amount.
        totalExpense += +enteredAmount;
        totalExpenseOutput.textContent = totalExpense;

        // Calling Clear function after add expense.
        clear();
    }
})

clearButton.addEventListener("click", clear);