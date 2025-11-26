document.getElementById("cashout").style.display = "none";
document.getElementById('addMoney').style.display = "none";

// add money btn
document.getElementById('addMoneyBox').addEventListener("click",
    function () {
        handleToggle("addMoney", "block");
        handleToggle("cashout", "none");
        handleToggle("transactionHistory", "none");
        // handleToggle("getBonus", "none");
        // handleToggle("payBill", "none");
        // handleToggle("transferMoney", "none");
    }
)

// cash out btn
document.getElementById("cashOutBox").addEventListener("click",
    function () {
        handleToggle("addMoney", "none");
        handleToggle("cashout", "block");
        handleToggle("transactionHistory", "none");
        // handleToggle("getBonus", "none");
        // handleToggle("payBill", "none");
        // handleToggle("transferMoney", "none");
    }
)

// transaction history btn
document.getElementById("transactionHistoryBox").addEventListener("click",
    function(){
        handleToggle("addMoney", "none");
        handleToggle("cashout", "none");
        handleToggle("transactionHistory", "block");
        // handleToggle("getBonus", "none");
        // handleToggle("payBill", "none");
        // handleToggle("transferMoney", "none");
    }
)

// Transfer money btn
// document.getElementById("transferMoneyBox").addEventListener("click",
//     function(){
//         handleToggle("addMoney", "none");
//         handleToggle("cashout", "none");
//         handleToggle("transactionHistory", "none");
//         handleToggle("getBonus", "none");
//         handleToggle("payBill", "none");
//         handleToggle("transferMoney", "block");
//     }
// )

// // get bonus btn
// document.getElementById("getBonusBox").addEventListener("click",
//     function(){
//         handleToggle("addMoney", "none");
//         handleToggle("cashout", "none");
//         handleToggle("transactionHistory", "none");
//         handleToggle("getBonus", "block");
//         handleToggle("payBill", "none");
//         handleToggle("transferMoney", "none");
//     }
// )

// // pay bill btn
// document.getElementById("payBillBox").addEventListener("click",
//     function(){
//         handleToggle("addMoney", "none");
//         handleToggle("cashout", "none");
//         handleToggle("transactionHistory", "none");
//         handleToggle("getBonus", "none");
//         handleToggle("payBill", "block");
//         handleToggle("transferMoney", "none");
//     }
// )