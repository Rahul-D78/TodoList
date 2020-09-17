//In this section we gonna use ejs for the template purpose
//for avoiding the extraa boilerpalte code 

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//prferer this page for more --> https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    // if(currentDay === 6 || currentDay === 0) {
    //     day = "weekend";

    //     //The below line basically means render a file called list and we gonna pass that that file to a variable
    //     //called kindofday and the value is "day".
    // }else{
    //     day = "weekday";
        
    // }

    switch (currentDay) {
        case 0:
            day = "sunday" 
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "tuseday" 
            break;
        case 3:
            day = "wednesday" 
            break;
        case 4:
            day = "thusday"
            break;
        case 5:
            day = "friday"
            break;
        case 6:
            day = "saturday"
            break;                   
        default:
            break;
    }
    //Compute every thing and then only parse over the result of the logic to your template file
    res.render("list", {kindOfDay: day})
})

app.listen(3000, (req, res) => {
    console.log(`server has started on port http://localhost:3000`);
})