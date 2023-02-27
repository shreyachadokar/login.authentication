function validate(){
    let username= document.getElementById('username').
    value;

let password= document.getElementById('password').
    value;

    if (username== "admin@gmail.com" && password=="admin101")
    {
        alert("Login successful");
    }
    else{
        alert("Enter correct username or password ");
    }
}