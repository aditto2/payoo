
function getInputValueByID(ID) {
    // console.log("Hello boss");
    // return "Hello Boss";
    const values = document.getElementById(ID).value;
    const convertedValue = parseFloat(values);
    return convertedValue;
}

function getInnerText(text) {
    const theText = document.getElementById(text).innerText;
    const convertToNum = parseFloat(theText);
    return convertToNum;
}

function setInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}