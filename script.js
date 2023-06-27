 function removeColor() {
    const selectElement = document.getElementById("colorSelect");
    const selectedValue = selectElement.value;

    // Find the option with the selected value and remove it
    const optionToRemove = selectElement.querySelector(`option[value="${selectedValue}"]`);
    optionToRemove.remove();
  }