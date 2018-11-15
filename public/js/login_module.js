

function patient_login () {
    var gid = sessionStorage.getItem("gid");
    if(gid !='' && gid != null)
    {
        sessionStorage.setItem('patient_gid',gid);
        window.location.href="profile_patient.html";
    }
    else
        alert("Please sign in !");
}
function retailer_login () {
    var gid = sessionStorage.getItem("gid");
    if(gid)
    {
        $.get("http://13.229.113.41:3000/api/users/"+gid,function(res){

            if(res.isRetailer == true)
            {
                sessionStorage.setItem('retailer_gid',gid);
                window.location.href="profile_retailer.html";
            }
            else
                window.location.href="become_retailer.html";

        });
    }
    else
        alert("Please sign in !");
}
function doctor_login () {
    var gid = sessionStorage.getItem("gid");
    if(gid)
    {
        $.get("http://13.229.113.41:3000/api/users/"+gid,function(res){

            if(res.isDoctor == true)
            {
                sessionStorage.setItem('doctor_gid',gid);
                window.location.href="profile_doctor.html";
            }
            else
                window.location.href="become_doctor.html";

        });
    }
    else
        alert("Please sign in !");
}



function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    //console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    //console.log('Full Name: ' + profile.getName());
    //console.log('Given Name: ' + profile.getGivenName());
    //console.log('Family Name: ' + profile.getFamilyName());
    //console.log("Image URL: " + profile.getImageUrl());
    //console.log("Email: " + profile.getEmail());
    var user_id = profile.getId();
    var name = profile.getName();
    var imageUrl = profile.getImageUrl();
    var email = profile.getEmail();
    sessionStorage.setItem("gid",user_id);

    // The ID token you need to pass to your backend:
    //var id_token = googleUser.getAuthResponse().id_token;

    var user = {
        name : name,
        email : email,
        imageUrl : imageUrl,
        gid : user_id
    }
    $.get("http://13.229.113.41:3000/api/users/"+user_id,function(res){
        if(!res || res==null)
        {
            $.post("http://13.229.113.41:3000/api/users",user,function(res){
                if(res)
                {
                    //console.log(res);
                    console.log("user registered !");
                    //alert("you are registered !");
                }
                else
                {
                    alert("Request Failed!");
                }

            });
        }
    });
    
  }