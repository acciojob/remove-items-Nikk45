function removeColor() {
    const selectElement = document.getElementById("colorSelect");
    const selectedIndex = selectElement.selectedIndex;

    // Remove the option at the selected index
    selectElement.remove(selectedIndex);
  }
