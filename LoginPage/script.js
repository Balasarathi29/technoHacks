function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add your authentication logic here (e.g., check against a predefined username and password)
    if (username === "admin" && password === "admin123@") {
        document.getElementById("loginMessage").textContent = "Login successfully!";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password. Please try again.";
    }
}
function submit(){
    const newPassword = document.getElementById("newPassword").value;
    const reNewpassword = document.getElementById("reNewpassword").value;
    const changedPassword = newPassword;
    if(newPassword && reNewpassword &&newPassword === reNewpassword)
    {
        alert("Password changed Successfully");
    }    
    else {
        alert("password doesn't Match");
    }
}