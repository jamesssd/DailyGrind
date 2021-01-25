// Day of Week
// Coffe Name
// Coffee Pic
// Alt Tag
// Coffee Description
// Color of Cofee



let myDate = new Date();
let myDay = myDate.getDate();
let today = " ";
let coffee = " ";


switch(myDay){
    case 1:
        today = "Monday";

        coffee={
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a Bubble Tea",
            day: "Monday",
            desc: "I love Bubble Tea!" 
        };
    break;

    case 3:
        today = "Wednesday";

        coffee={
            color: "brown",
            name: "Drip",
            pic: "images/drip.png",
            alt: "A pic of a drip coffee",
            day: "Wednesday",
            desc: "Some days you just need the drip!" 
        };
    break;
}

alert("Hi it's " + today );