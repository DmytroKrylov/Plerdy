// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector("button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("modal-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Form submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
    // closeModal();
});



function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const agreement = document.getElementById('agreement').checked;
    const supportButton = document.getElementById('supportButton');

    // if (name === '' || phone === '' || !agreement) {
    //     return false
    // } 

    //     supportButton.classList.remove('button-disabled')

    // return;

    return name === '' || phone === '' || !agreement
        ? supportButton.classList.add('button-disabled')
        : supportButton.classList.remove('button-disabled')
}
