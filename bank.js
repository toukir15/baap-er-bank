// deposit evenListener
document.getElementById('deposit__btn').addEventListener('click', function () {
    // get deposit input 
    const getDepositInput = document.getElementById('deposit__input');
    const getDepositString = getDepositInput.value;
    const depositAmount = parseFloat(getDepositString);

    // clear the deposit input 
    getDepositInput.value = "";

    if (isNaN(depositAmount)) {
        alert('Please enter valid input')
        return
    }

    // deposit total 
    const depositTotal = document.getElementById('deposit__total')
    const PreviousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(PreviousDepositTotalString);

    // new deposit total 
    const currentDepositAmount = previousDepositTotal + depositAmount;
    depositTotal.innerText = currentDepositAmount;

    // add deposit to balance 
    const balanceTotal = document.getElementById('balance__total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = currentBalanceTotal;

})

// withdraw eventListener 
document.getElementById('withdraw__btn').addEventListener('click', function () {
    // get withdraw input 
    const getWithdrawInput = document.getElementById('withdraw__input');
    const getWithdrawString = getWithdrawInput.value;
    const withdrawAmount = parseFloat(getWithdrawString);

    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw__total');
    const previousWithdrawString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);




    // withdraw balance 
    const balanceTotal = document.getElementById('balance__total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // clear withdraw input 
    getWithdrawInput.value = '';

    if (withdrawAmount > previousBalance) {
        alert('You do not have enough money')
        return;
    }
    // new withdraw total 
    const currentWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = currentWithdrawAmount;

    // update withdraw balance 
    const currentBalance = previousBalance - withdrawAmount;
    balanceTotal.innerText = currentBalance;

})