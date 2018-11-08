var isRetailer = true;
var isDoctor = true;
function patient_login () {
    if(isLoggedIn())
    {
        sessionStorage.setItem('gid','123456');
        window.location.href="profile_patient.html";
    }
    else
        login();
}
function retailer_login () {
    if(isLoggedIn())
    {
        if(isRetailer==true)
            window.location.href="profile_retailer.html";
        else
        window.location.href="become_retailer.html";
    }
    else
        login();
}
function doctor_login () {
    if(isLoggedIn())
    {
        if(isDoctor==true)
            window.location.href="profile_doctor.html";
        else
        window.location.href="become_doctor.html";
    }
    else
        login();
}



function isLoggedIn() {
    sessionStorage.setItem('gid', '123456');
    return true;
}




function login()
{
    alert("Please log in first !");
    // google login
}