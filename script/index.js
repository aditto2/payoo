// console.log('hello World!');

// alert('This is an alert.')

// step 1: get the ID using getElementById;
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('accountNumber').value;
    // console.log(accountNumber);
    const pinNumber = document.getElementById('pinNumber').value;
    const convertedPIN = parseInt(pinNumber);
    // console.log(typeof pinNumber);
    // console.log(accountNumber, pinNumber);
    // console.log(accountNumber.length);

    if (accountNumber.length === 11) {
        if (convertedPIN === 1234) {
            window.location.href = './main.html';
        } else {
            alert(`PIN isn't valid.`);
        }
    } else {
        alert("Need valid account number");
    }
})

