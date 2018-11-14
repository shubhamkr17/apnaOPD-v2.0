function select_time_slot(day,period,slot)
{
    var timeSlot = get_time_slot(slot);
    var x = timeSlot[day];
    return x[period];
}


function get_time_slot(slot)
{
    var timeSlot = {
        "monday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        },
        "tuesday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        },
        "wednesday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        },
        "thursday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        },
        "friday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        },
        "saturday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        },
        "sunday":{
            "morning":[],
            "afternoon":[],
            "evening":[],
            "night":[]
        }

    };
    for(i=0;i<slot.length;i++)
    {
        var str = slot[i];
        if([str[0]]=='1')
        {
            if(str[1]=='1')
            {
                timeSlot.monday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.monday.afternoon.push("12:00 PM");
                else
                    timeSlot.monday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.monday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.monday.night.push("12:00 AM");
                else
                    timeSlot.monday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
        else if([str[0]]=='2')
        {
            if(str[1]=='1')
            {
                timeSlot.tuesday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.tuesday.afternoon.push("12:00 PM");
                else
                    timeSlot.tuesday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.tuesday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.tuesday.night.push("12:00 AM");
                else
                    timeSlot.tuesday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
        else if([str[0]]=='3')
        {
            if(str[1]=='1')
            {
                timeSlot.wednesday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.wednesday.afternoon.push("12:00 PM");
                else
                    timeSlot.wednesday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.wednesday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.wednesday.night.push("12:00 AM");
                else
                    timeSlot.wednesday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
        else if([str[0]]=='4')
        {
            if(str[1]=='1')
            {
                timeSlot.thursday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.thursday.afternoon.push("12:00 PM");
                else
                    timeSlot.thursday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.thursday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.thursday.night.push("12:00 AM");
                else
                    timeSlot.thursday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
        else if([str[0]]=='5')
        {
            if(str[1]=='1')
            {
                timeSlot.friday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.friday.afternoon.push("12:00 PM");
                else
                    timeSlot.friday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.friday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.friday.night.push("12:00 AM");
                else
                    timeSlot.friday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
        else if([str[0]]=='6')
        {
            if(str[1]=='1')
            {
                timeSlot.saturday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.saturday.afternoon.push("12:00 PM");
                else
                    timeSlot.saturday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.saturday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.saturday.night.push("12:00 AM");
                else
                    timeSlot.saturday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
        else if([str[0]]=='7')
        {
            if(str[1]=='1')
            {
                timeSlot.sunday.morning.push(parseInt(str[2])+5+":00 AM");
            }
            else if(str[1]=='2')
            {
                if(str[2]=='1')
                    timeSlot.sunday.afternoon.push("12:00 PM");
                else
                    timeSlot.sunday.afternoon.push(parseInt(str[2])-1+":00 PM");
            }
            else if(str[1]=='3')
            {
                timeSlot.sunday.evening.push(parseInt(str[2])+5+":00 PM");
            }
            else if(str[1]=='4')
            {
                if(str[2]=='1')
                    timeSlot.sunday.night.push("12:00 AM");
                else
                    timeSlot.sunday.night.push(parseInt(str[2])-1+":00 AM");
            }
        }
            
    }
//console.log(timeSlot);

return timeSlot;
}





