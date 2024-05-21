

 document.querySelector("#submit").addEventListener("click", (e)=> {
    e.preventDefault();
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;

    if(username == "ritik" && password =="mbpvg2"){
        window.location.href = "dashboard.html";
    }
     else {
        alert("Invalid crediential");
        document.querySelector("#form").reset();
     }
 });

