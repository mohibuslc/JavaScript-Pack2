const btn = document.getElementById('btnAction').addEventListener('click', function(){  
   
    const userEmail = document.getElementById("user-email");
    const email = userEmail.value;


    const userPassword = document.getElementById("user-password");
    const password = userPassword.value;
   

    if (email === "mail2mohib@gmail.com" && password === "12Allah@") {
        window.location.href = "bank.html";
    } else {
        alert("invalid user");
    }
});
