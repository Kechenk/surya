// script.js

var selectedIndex = -1; // Variable to store the selected index

document.addEventListener("DOMContentLoaded", function () {
  fetchKontingenOptions();
});

function fetchKontingenOptions() {
  var kontingenDropdown = document.getElementById("kontingen");
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var options = JSON.parse(this.responseText);

      // Populate dropdown with new options
      for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        kontingenDropdown.add(option);
      }
    } else if (this.readyState == 4) {
      console.error("Error fetching contingents: " + this.status);
    }
  };

  // Assuming you have a PHP script to fetch contingents (get_kontingen.php)
  xhr.open("GET", "php/get_kontingen.php",
  true
  );
  xhr.send();
}

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
          // Handle the selection (you can redirect, etc.)
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

function submitForm() {
  showDetails();
  return false; // or false based on your form validation logic
}

function showDetails(){
  var selectedName = document.getElementById('selectedName').value;
  var detailsContainer = document.getElementById('detailesContainer');

  detailsContainer.innerHTML = `<h3>Details</h3>
                                <p>selectedName: {$selectedName}</p>`;
}

function handleKeyDown(event) {
  var dropdownItems = document.querySelectorAll('.autocomplete-item');
  if (event.key === "ArrowDown" && selectedIndex < dropdownItems.length - 1) {
    event.preventDefault(); // Prevent default arrow key behavior
    selectedIndex++;
    highlightSelected();
    scrollIntoView();
  } else if (event.key === "ArrowUp" && selectedIndex > 0) {
    event.preventDefault(); // Prevent default arrow key behavior
    selectedIndex--;
    highlightSelected();
    scrollIntoView();
  } else if (event.key === "Enter" && selectedIndex !== -1) {
    var selectedName = dropdownItems[selectedIndex].innerHTML;
    document.getElementById("name").value = selectedName;
    document.getElementById("selectedName").value = selectedName;
    document.getElementById("nameDropdown").style.display = "none";
  }
}

function highlightSelected() {
  var dropdownItems = document.querySelectorAll('.autocomplete-item');
  dropdownItems.forEach(function (item, index) {
    if (index === selectedIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function scrollIntoView() {
  var dropdownItems = document.querySelectorAll('.autocomplete-item');
  if (selectedIndex !== -1) {
    dropdownItems[selectedIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  }
}
