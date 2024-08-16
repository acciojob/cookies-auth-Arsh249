//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for(let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to check if the user is logged in
function checkLogin() {
    const user = getCookie("username");
    if (user) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcomeMessage").style.display = "block";
        document.getElementById("user").textContent = user;
    }
}

// Function to handle login
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple authentication logic (for demo purposes)
    if (username === "user" && password === "pass") {
        setCookie("username", username, 7); // Store cookie for 7 days
        checkLogin();
    } else {
        alert("Invalid login credentials.");
    }
});

// Function to handle logout
document.getElementById("logout").addEventListener("click", function() {
    setCookie("username", "", -1); // Delete the cookie
    location.reload(); // Reload the page to show the login form
});

// Check if user is already logged in when the page loads
window.onload = checkLogin;
