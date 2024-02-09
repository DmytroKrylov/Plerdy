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
    closeModal();
});


function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const agreement = document.getElementById('agreement').checked;
    const supportButton = document.getElementById('supportButton');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    const namePattern = /[A-Za-z ]+/;
    const patternPhone = /\d{2} - \d{3} - \d{4}/;

    const isValidName = namePattern.test(name);
    const isValidPhone = patternPhone.test(phone);

    if (name !== '' && isValidName && phone !== '' && isValidPhone && agreement) {
        supportButton.classList.remove('button-disabled')
    } else {
        supportButton.classList.add('button-disabled')
    }  
    
    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
}
