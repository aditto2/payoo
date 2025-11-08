// alert('this is an alart');

document.getElementById('addMoney').addEventListener('click',
    function (event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);
        const pinNumber = document.getElementById('pinNumber').value;
        const convertedPIN = parseInt(pinNumber);
        const mainBalance = document.getElementById('mainBalance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        console.log(typeof convertedMainBalance);

        if (convertedAmount && pinNumber) {
            if (convertedPIN === 1234) {
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById("mainBalance").innerText = sum;
            } else {
                alert("Your PIN is wrong");
            }
        } else {
            alert("Fill up the form !");
        }
    })