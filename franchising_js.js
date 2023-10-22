function validateForm(event) {
    var button = document.querySelector('.sub-search button');
    var name = document.getElementById("name").value;
    var phone = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
  
    var nameError = document.getElementById("nameError");
    var phoneError = document.getElementById("phoneError");
    var emailError = document.getElementById("emailError");
  
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
  
    if (name.trim() === "") {
      nameError.textContent = "Name is required";
      event.preventDefault();
    }
  
    if (phone.trim() === "") {
      phoneError.textContent = "Phone number is required";
      event.preventDefault();
    } else if (!/^\d{11}$/.test(phone)) {
      phoneError.textContent = "Invalid phone number format (11 digits required)";
      event.preventDefault();
    }
  
    if (email.trim() === "") {
      emailError.textContent = "Email is required";
      event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = "Invalid email address";
      event.preventDefault();
    }

    if (nameError.textContent === "" && phoneError.textContent === "" && emailError.textContent === "") {
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#staticBackdrop');
        event.preventDefault();
    }
  }
  