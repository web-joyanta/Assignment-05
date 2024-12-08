// input Field By Value
function getInputFieldValueById(inputFieldId) {
  const inputElement = document.getElementById(inputFieldId);
  const inputValueString = inputElement.value;
  const inputNumber = parseFloat(inputValueString);
  inputElement.value = "";
  return inputNumber;
}
// Text Field By Value
function getTextFieldValueById(TextFieldId) {
  const textValueString = document.getElementById(TextFieldId).innerText;
  const textNumber = parseFloat(textValueString);
  return textNumber;
}
// get inner Text
function getTextFieldToInnerTextById(TextFieldId) {
  const text = document.getElementById(TextFieldId).innerText;
  return text;
}
// Section hidden class add & remove
function ShowSectionById(sectionId) {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}
// Button Active & Inactive
function setButtonHoverSwitching(activeButtonId, inactiveButtonId) {
  // Active button
  const activeButton = document.getElementById(activeButtonId);
  activeButton.classList.remove("border", "border-[#1111114D]");
  activeButton.classList.add("bg-[#B4F461]", "hover:bg-[#B1F130]", "mr-4");
  // Inactive button
  const inactiveButton = document.getElementById(inactiveButtonId);
  inactiveButton.classList.remove("bg-[#B4F461]", "hover:bg-[#B1F130]");
  inactiveButton.classList.add("border", "border-[#1111114D]");
}
// Current date & time
function currentDataAndTime() {
  let today = new Date();
  const currentDate = today.toDateString();
  const currentTime = today.toLocaleString();
  const dataTime = `Date: ${currentDate}, Time: ${currentTime}`;
  return dataTime;
}
