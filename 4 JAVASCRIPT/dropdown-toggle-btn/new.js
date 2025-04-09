// function toggleDropdown() {
//     const dropdownContent = document.getElementById("dropdown-content");
//     if (dropdownContent.style.transform === "scaleY(1)") {
//       dropdownContent.style.transform = "scaleY(0)";
//       dropdownContent.style.visibility = "hidden";
//     } else {
//       dropdownContent.style.transform = "scaleY(1)";
//       dropdownContent.style.visibility = "visible";
//     }
//   }

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('expanded');
}
