// Donate Item 01
document.getElementById("donate-button-01").addEventListener("click", function () {
  const inputDonate = getInputFieldValueById("input-donate-amount-01");
  const donateAmount = getTextFieldValueById("donate-amount-01");
  const balance = getTextFieldValueById("balance-amount");
  const historyTitle = getTextFieldToInnerTextById("donate-noakhali");
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
  // History details
  const dateTime = currentDataAndTime();
  const div = document.createElement("div");
  div.innerHTML = `<h4>${inputDonate} Taka is Donated for ${historyTitle}</h4>
  <p class = "bg-slate-50 p-2 rounded-lg mt-2">${dateTime}</p>`;
  div.classList.add("border-2", "border-slate-200", "p-8", "mt-4", "rounded-xl", "text-lg", "font-medium");
  document.getElementById("history-container").appendChild(div);
  // Show Modal
  donate_modal.showModal();
});

// Donate Item 02
document.getElementById("donate-button-02").addEventListener("click", function () {
  const inputDonate = getInputFieldValueById("input-donate-amount-02");
  const donateAmount = getTextFieldValueById("donate-amount-02");
  const balance = getTextFieldValueById("balance-amount");
  const historyTitle = getTextFieldToInnerTextById("donate-feni");
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
  // History details
  const dateTime = currentDataAndTime();
  const div = document.createElement("div");
  div.innerHTML = `<h4>${inputDonate} Taka is Donated for ${historyTitle}</h4>
  <p class = "bg-slate-50 p-2 rounded-lg mt-2">${dateTime}</p>`;
  div.classList.add("border-2", "border-slate-200", "p-8", "mt-4", "rounded-xl", "text-lg", "font-medium");
  document.getElementById("history-container").appendChild(div);
  // Show Modal
  donate_modal.showModal();
});

// Donate Item 03
document.getElementById("donate-button-03").addEventListener("click", function () {
  const inputDonate = getInputFieldValueById("input-donate-amount-03");
  const donateAmount = getTextFieldValueById("donate-amount-03");
  const balance = getTextFieldValueById("balance-amount");
  const historyTitle = getTextFieldToInnerTextById("donate-injured");
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
  // History details
  const dateTime = currentDataAndTime();
  const div = document.createElement("div");
  div.innerHTML = `<h4>${inputDonate} Taka is Donated for ${historyTitle}</h4>
  <p class = "bg-slate-50 p-2 rounded-lg mt-2">${dateTime}</p>`;
  div.classList.add("border-2", "border-slate-200", "p-8", "mt-4", "rounded-xl", "text-lg", "font-medium");
  document.getElementById("history-container").appendChild(div);
  // Show Modal
  donate_modal.showModal();
});
