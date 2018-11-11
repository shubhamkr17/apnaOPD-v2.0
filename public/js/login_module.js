var isRetailer = true;
var isDoctor = true;
function patient_login () {
    if(gid=isLoggedIn())
    {
        sessionStorage.setItem('patient_gid',"113519856592556213328");
        window.location.href="profile_patient.html";
    }
    else
        login();
}
function retailer_login () {
    if(gid=isLoggedIn())
    {
        
        if(isRetailer==true)
        {
            sessionStorage.setItem('retailer_gid',gid);
            window.location.href="profile_retailer.html";
        }
        else
        window.location.href="become_retailer.html";
    }
    else
        login();
}
function doctor_login () {
    if(gid=isLoggedIn())
    {
        if(isDoctor==true)
        {
            sessionStorage.setItem('doctor_gid',"113519856592513328");
            window.location.href="profile_doctor.html";
        }
        else
        window.location.href="become_doctor.html";
    }
    else
        login();
}



function isLoggedIn() {
    //sessionStorage.setItem('gid', '12345');
    //gid from google 
    var gid = "1";
    sessionStorage.setItem('user_image_url',"/files/prescriptions/1/index.jpeg");
    return gid;
}




function login()
{
    alert("Please log in first !");
    // google login
}