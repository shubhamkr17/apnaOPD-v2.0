var slot = ["1110000","1230000"];

function get_time_slot(slot)
{
    var timeSlot = {
        "monday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        },
        "tuesday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        },
        "wednesday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        },
        "thursday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        },
        "friday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        },
        "saturday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        },
        "sunday":{
            "morning":[0,0,0,0,0,0],
            "afternoon":[0,0,0,0,0,0],
            "evening":[0,0,0,0,0,0],
            "night":[0,0,0,0,0,0]
        }

    };
    for(i=0;i<slot.length;i++)
    {
        var str = slot[i];
        if([str[0]]=='1')
        {
            if(str[1]=='1')
            {
                timeSlot.monday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.monday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.monday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.monday.night[parseInt(str[2])-1]=1;
            }
        }
        else if([str[0]]=='2')
        {
            if(str[1]=='1')
            {
                timeSlot.tuesday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.tuesday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.tuesday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.tuesday.night[parseInt(str[2])-1]=1;
            }
        }
        else if([str[0]]=='3')
        {
            if(str[1]=='1')
            {
                timeSlot.wednesday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.wednesday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.wednesday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.wednesday.night[parseInt(str[2])-1]=1;
            }
        }
        else if([str[0]]=='4')
        {
            if(str[1]=='1')
            {
                timeSlot.thursday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.thursday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.thursday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.thursday.night[parseInt(str[2])-1]=1;
            }
        }
        else if([str[0]]=='5')
        {
            if(str[1]=='1')
            {
                timeSlot.friday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.friday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.friday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.friday.night[parseInt(str[2])-1]=1;
            }
        }
        else if([str[0]]=='6')
        {
            if(str[1]=='1')
            {
                timeSlot.saturday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.saturday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.saturday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.saturday.night[parseInt(str[2])-1]=1;
            }
        }
        else if([str[0]]=='7')
        {
            if(str[1]=='1')
            {
                timeSlot.sunday.morning[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='2')
            {
                timeSlot.sunday.afternoon[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='3')
            {
                timeSlot.sunday.evening[parseInt(str[2])-1]=1;
            }
            else if(str[1]=='4')
            {
                timeSlot.sunday.night[parseInt(str[2])-1]=1;
            }
        }
            
    }
console.log(timeSlot);

return timeSlot;
}