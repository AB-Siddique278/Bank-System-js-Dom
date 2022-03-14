//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function (){
    //Deposite amount heandeling
    
    const depositInput = document.getElementById('deposit-input');

    const newdepositAmountText = depositInput.value;
    const newDepositeAmount = parseFloat(newdepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newdopositTotal = previousDepositAmount+ newDepositeAmount;
    depositTotal.innerText=newdopositTotal;


    //Balance Update

    const balanceTotal = document.getElementById('balanc-total');
    const balanctotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanctotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText=newBalanceTotal;

    
     

    depositInput.value = '';



});

document.getElementById('witdraw-button').addEventListener('click', function (){

    const witdrawInput = document.getElementById('witdraw-input');
    const witdrawAmountText = witdrawInput.value;
    const newWithdrawAmount = parseFloat(witdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawtext = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawtext);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText= newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balanc-total');
    const previousBalancetext= balanceTotal.innerText;
    const previoustotalbalance = parseFloat(previousBalancetext);
    const newBalancetotal = previoustotalbalance - newWithdrawAmount;
    
    balanceTotal.innerText = newBalancetotal;

    witdrawInput.value = ' ';

})