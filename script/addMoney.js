// alert('this is an alart');


// code that can reuseable by function;


// add money button;



document
    .getElementById("addMoneyBtn")
    .addEventListener("click",
        function (event) {
            event.preventDefault();
            // console.log("hello");
            // getInputValueByID();

            const amount = getInputValueByID("amount");
            const pin = getInputValueByID('pinNumber');
            const mainBalance = getInnerText("mainBalance");
            const account = document.getElementById('account').value;
            const allBank = document.getElementById("allBank").value;

            if(amount < 0){
                alert("Enter a valid amount");
                return;
            }

            if (account.length === 11) {
                if (pin === 1234) {
                    const sum = mainBalance + amount;
                    // document.getElementById("mainBalance").innerText = sum;
                    setInnerTextByIdAndValue("mainBalance", sum);


                    const transactionContainer = document.getElementById("transactionContainer");

                    // const p = document.createElement("p");
                    // p.innerText = `
                    // added ${amount} from this ${account} account
                    // `;

                    // // console.log(p);
                    // transactionContainer.appendChild(p);

                    const div = document.createElement("div");
                    div.classList.add("bg-red-400");
                    div.innerHTML = `
                    <h1 class = "text-yellow-300">Added Money from ${allBank}</h1>
                    <h3>${amount}</h3>
                    <p>Account number: ${account}</p>
                    `;

                    transactionContainer.appendChild(div);

                    
                } else {
                    console.log("PIN number is not valid");
                }
            } else {
                console.log("Account number is not valid");
            }

        }
    )



// document.getElementById('addMoneyBtn').addEventListener('click',
//     function (event) {
//         event.preventDefault();
//         const amount = document.getElementById('amount').value;
//         const convertedAmount = parseFloat(amount);
//         const pinNumber = document.getElementById('pinNumber').value;
//         const convertedPIN = parseInt(pinNumber);
//         const mainBalance = document.getElementById('mainBalance').innerText;
//         const convertedMainBalance = parseFloat(mainBalance);
//         console.log(typeof convertedMainBalance);

//         if (convertedAmount && pinNumber) {
//             if (convertedPIN === 1234) {
//                 const sum = convertedMainBalance + convertedAmount;
//                 document.getElementById("mainBalance").innerText = sum;
//             } else {
//                 alert("Your PIN is wrong");
//             }
//         } else {
//             alert("Fill up the form !");
//         }
//     })