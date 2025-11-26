// alert("hello");

document.getElementById("cashOutBtn").addEventListener("click",
    function (event) {
        event.preventDefault();
        // const pin = document.getElementById("cashOutPin").value;
        // const convertedPIN = parseInt(pin);
        // // console.log(convertedPIN)
        // const amount = document.getElementById("cashOutAmount").value;
        // const convertedAmount = parseFloat(amount);
        // const mainBalance = document.getElementById("mainBalance").innerText;
        // const convertedMainBalance = parseFloat(mainBalance);

        const account = document.getElementById("account").value;
        const agentNumber = document.getElementById("agentNumber").value;
        const amount = getInputValueByID("cashOutAmount");
        const pin = getInputValueByID("cashOutPin");
        const mainBalance = getInnerText("mainBalance");

        if(amount > mainBalance){
            alert("Please enter a valid amount");
            return;
        }

        if (agentNumber.length === 11) {

            if (pin === 1234) {
                const subtract = mainBalance - amount;
                setInnerTextByIdAndValue("mainBalance", subtract);

                const transactionContainer = document.getElementById("transactionContainer");
                const p = document.createElement("p");
                p.innerText = `Cashout ${amount} from this ${account} account`
                transactionContainer.appendChild(p);

            } else {
                alert("Enter a valid PIN number");
            }
        }else{
            alert("Your account number is not valid");
        }
    }
)