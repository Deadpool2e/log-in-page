function validateForm() {
    let str = document.getElementById("password").value;
    if(str.length<8)
    {
        alert("Password length must be atleast 8 characters");
        return false;
    }   
    var res; 
    if (str.match(/[a-z]/g) && str.match(
        /[A-Z]/g) && str.match(
        /[0-9]/g) && str.match(
        /[^a-zA-Z\d]/g) && str.length >= 8)
    res = "TRUE";
    else
    res = "FALSE";
    if(res="FALSE")
    {
        alert("Enter the correct password");
        return false;
    }
  }
 