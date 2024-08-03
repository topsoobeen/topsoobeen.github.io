document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("signUpForm");
    const loginForm = document.getElementById("loginForm");
    const messageDiv = document.getElementById("message");

    const users = [];

    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("signUpUsername").value;
        const password = document.getElementById("signUpPassword").value;

        if (users.some(user => user.username === username)) {
            messageDiv.textContent = "Username already exists!";
        } else {
            users.push({ username, password });
            messageDiv.textContent = "Sign up successful!";
            signUpForm.reset();
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            messageDiv.textContent = `Welcome, ${username}!`;
            loginForm.reset();
        } else {
            messageDiv.textContent = "Invalid username or password!";
        }
    });
});
