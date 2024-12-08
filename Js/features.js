document.getElementById("btn-donation").addEventListener("click", function () {
  ShowSectionById("donate-section");
  setButtonHoverSwitching("btn-donation", "btn-history");
});

document.getElementById("btn-history").addEventListener("click", function () {
  ShowSectionById("history-section");
  setButtonHoverSwitching("btn-history", "btn-donation");
});
