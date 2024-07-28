document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting progamme... Program loaded...");

    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    if (loginForm) {
        console.log("Login form found");
    } else {
        console.error("Login form not found");
    }

    if (loginButton) {
        console.log("Login button found");
        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Login button clicked");

            // Access input fields using the elements property
            const username = loginForm.elements["username"].value;
            const password = loginForm.elements["password"].value;

            console.log("Input Username: ", username);
            console.log("Input Password: ", password);

            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            console.log("Stored Username: ", storedUsername);
            console.log("Stored Password: ", storedPassword);

            if (username === storedUsername && password === storedPassword) {
                alert("You have successfully logged in.");
                window.location.href = "homepage";
            }
            else {
                loginErrorMsg.style.opacity = 1;
            }
        });
    } else {
        console.error("Login button not found");
    }
});
