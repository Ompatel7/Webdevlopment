const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Modal open function
const openModal = () => {
    console.log("modal is open");
    modal.classList.add('active');
    overlay.classList.add("overlayactive");

};

// Modal close function
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};