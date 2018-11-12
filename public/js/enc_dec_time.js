var str = "1420004";
var day = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var span = ['','Morning','Afternoon','Evening','Night'];
var slot;
function get_time(str)
{
    slot = "";
    slot+=day[parseInt(str[0])] + ", ";
    slot+=span[parseInt(str[1])]+ ", ";

    if(parseInt(str[1])==1)
    {
        slot+= parseInt(str[2])+5+":00 AM,";
    }
    else
    if(parseInt(str[1])==3)
    {
        slot+= parseInt(str[2])+5+":00 PM,";
    }
    else
    if(parseInt(str[1])==2)
    {
        slot+= parseInt(str[2])-1+":00 PM,";
    }
    else
    if(parseInt(str[1])==4)
    {
        if(str[2]==1)
        {
            slot+= "12:00 AM,";
        }
        else{
            slot+= parseInt(str[2])-1+":00 AM,";
        }
    }


    slot+=" S.NO : "+parseInt(str[5]+str[6]);

    //console.log("slot",slot);
    return slot;
}
