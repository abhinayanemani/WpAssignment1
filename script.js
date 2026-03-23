function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name === "" || email === "" || pass === "" || confirm === "") {
        alert("All fields are required");
        return false;
    }

    if (pass !== confirm) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful");
    return true;
}

function scrollToCourses() {
    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
}