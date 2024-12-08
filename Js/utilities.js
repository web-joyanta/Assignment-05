// input Field By Value
function getInputFieldValueById(inputFieldId){
    const inputElement = document.getElementById(inputFieldId);
    const inputValueString = inputElement.value;
    const inputNumber = parseFloat(inputValueString);
    inputElement.value = '';
    return inputNumber;
}
// Text Field By Value
function getTextFieldValueById(TextFieldId){
    const textValueString = document.getElementById(TextFieldId).innerText;
    const textNumber = parseFloat(textValueString);
    return textNumber;
}