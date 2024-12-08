// Donate Item 01
document.getElementById("donate-button-01").addEventListener("click", function () {
  const inputDonate = getInputFieldValueById("input-donate-amount-01");
  const donateAmount = getTextFieldValueById("donate-amount-01");
  const balance = getTextFieldValueById("balance-amount");
  if (isNaN(inputDonate) || 0 >= inputDonate || balance < inputDonate) {
    alert("Invalid Donate Amount");
    return;
  }
  // new donate
  const newDonate = donateAmount + inputDonate;
  document.getElementById("donate-amount-01").innerText = newDonate;
  // main balance
  const newBalance = balance - inputDonate;
  document.getElementById("balance-amount").innerText = newBalance;
  // Show Modal
  donate_modal.showModal();
});
// Donate Item 02
document.getElementById("donate-button-02").addEventListener("click", function () {
  const inputDonate = getInputFieldValueById("input-donate-amount-02");
  const donateAmount = getTextFieldValueById("donate-amount-02");
  const balance = getTextFieldValueById("balance-amount");
  if (isNaN(inputDonate) || 0 >= inputDonate || balance < inputDonate) {
    alert("Invalid Donate Amount");
    return;
  }
  // new donate
  const newDonate = donateAmount + inputDonate;
  document.getElementById("donate-amount-02").innerText = newDonate;
  // main balance
  const newBalance = balance - inputDonate;
  document.getElementById("balance-amount").innerText = newBalance;
  // Show Modal
  donate_modal.showModal();
});
// Donate Item 03
document.getElementById("donate-button-03").addEventListener("click", function () {
  const inputDonate = getInputFieldValueById("input-donate-amount-03");
  const donateAmount = getTextFieldValueById("donate-amount-03");
  const balance = getTextFieldValueById("balance-amount");
  if (isNaN(inputDonate) || 0 >= inputDonate || balance < inputDonate) {
    alert("Invalid Donate Amount");
    return;
  }
  // new donate
  const newDonate = donateAmount + inputDonate;
  document.getElementById("donate-amount-03").innerText = newDonate;
  // main balance
  const newBalance = balance - inputDonate;
  document.getElementById("balance-amount").innerText = newBalance;
  // Show Modal
  donate_modal.showModal();
});
