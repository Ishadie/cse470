expenseBtn.addEventListener("click", function(){
    show(expenseEl);
    hide( [incomeEl, taxEl, allEl] );
    active( expenseBtn );
    inactive( [incomeBtn, taxBtn, allBtn] );
})

addExpense.addEventListener("click", function(){
    // IF ONE OF THE INPUTS IS EMPTY => EXIT
    if(!expenseTitle.value || !expenseAmount.value ) return;

    // SAVE THE ENTRY TO ENTRY_LIST
    let expense = {
        type : "expense",
        title : expenseTitle.value,
        amount : parseInt(expenseAmount.value)
    }
    ENTRY_LIST.push(expense);

    updateUI();
    clearInput( [expenseTitle, expenseAmount] )
})

expenseList.addEventListener("click", deleteOrEdit);