// 20 implementing transfers
btnTransfer.addEventListener("click", function(event){
    event.preventDefault();
    const transferAmount = Number(inputTransferAmount.value);
    console.log(transferAmount)
    const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
    if(receiverAcc && transferAmount > 0 && transferAmount <= currentAccount.balance && receiverAcc.userName !== currentAccount.userName){
        transferAmount !== 0 && currentAccount.movements.push(-1 * transferAmount);
        receiverAcc?.movements.push(transferAmount);
        displayMovements(currentAccount.movements);
        calcPrintBal(currentAccount.movements);
        displayBalance(currentAccount);
    }
    inputTransferAmount.value = inputTransferTo.value = "";
    inputTransferTo.blur();
    btnTransfer.blur();
    
});