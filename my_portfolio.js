window.onload = function() {
    console.log("Portfolio page loaded successfully.");
};
let form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let name =
            document.getElementById("name").value;
        let email =
            document.getElementById("email").value;
        let message =
            document.getElementById("message").value;
        if (name == "" ||
            email == "" ||
            message == "") {
            alert("Please fill in all the fields.");
        }
        else {
            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );
            form.reset();
        }
    });
}