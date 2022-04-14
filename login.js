function check(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Admin" && password=="user")
    {
        alert("Login Successfull");
        return false;
    }
    else{
        alert(("Login Failed"))
    }
}