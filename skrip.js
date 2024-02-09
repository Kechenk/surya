// script.js

document.addEventListener("DOMContentLoaded", function () {
    fetchKontingenOptions();
  });
  
  function fetchNames() {
    var input = document.getElementById("name");
    var filterName = input.value.toUpperCase();
    var kontingenDropdown = document.getElementById("kontingen");
    var filterContingent = kontingenDropdown.value;
    var dropdown = document.getElementById("nameDropdown");
  
    // Clear existing dropdown items
    dropdown.innerHTML = "";
  
    // Fetch names from the server based on the input and contingent
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var names = JSON.parse(this.responseText);
  
        // Create dropdown items
        for (var i = 0; i < names.length; i++) {
          var item = document.createElement("div");
          item.className = "autocomplete-item";
          item.innerHTML = names[i];
          item.addEventListener("click", function () {
            input.value = this.innerHTML;
            document.getElementById("selectedName").value = this.innerHTML;
            dropdown.style.display = "none";
          });
          dropdown.appendChild(item);
        }
  
        // Show the dropdown
        dropdown.style.display = names.length > 0 ? "block" : "none";
        selectedIndex = -1; // Reset the selected index
        highlightSelected();
      }
    };
  
    xhr.open(
      "GET",
      "php/get_names.php?filter=" +
        encodeURIComponent(filterName) +
        "&contingent=" +
        encodeURIComponent(filterContingent),
      true
    );
    xhr.send();
  }
  
  function fetchKontingenOptions() {
    var kontingenDropdown = document.getElementById("kontingen");
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var options = JSON.parse(this.responseText);
  
        // Clear existing options
        kontingenDropdown.innerHTML = "";
  
        // Populate dropdown with new options
        for (var i = 0; i < options.length; i++) {
          var option = document.createElement("option");
          option.value = options[i];
          option.text = options[i];
          kontingenDropdown.add(option);
        }
      }
    };
  
    xhr.open("GET", "php/get_kontingen.php", true);
    xhr.send();
  }
  
  // ... (your existing functions)
  
  