
allBtn.addEventListener("click", function(){
    show(allEl);
    hide( [incomeEl,taxEl, expenseEl] );
    active( allBtn );
    inactive( [incomeBtn,taxBtn, expenseBtn] );
})


allList.addEventListener("click", deleteOrEdit);