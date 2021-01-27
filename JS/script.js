/*
Day of week - day
Coffee Name - name
Coffee Pic - pic
Alt tag - alt
Coffee Description - desc
Color for coffee - color
*/



let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if(urlParams.has('day')){ //use query string
    myDay= urlParams.get('day');
    myDay= parseInt(myDay);
}else{//use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";


    myReturn=`
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee" />
    <strong id= "coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>,
    ${coffee.desc}
    </p>
    `;
 
    return myReturn;

}

switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic: "Images/bubble-tea.jpg",
            alt: "A pic of bubble tea",
            day: "Monday",
            desc: `I love bubble tea!`
        };
        break;
    case 2:
        today = "Tuesday";
        coffee = {
            color: "yellow",
            name: "Caramel Latte",
            pic: "Images/caramel-latte.jpg",
            alt: "A pic of caramel-latte",
            day: "Tuesday",
            desc: `Great scott!, it's Caramel latte day!`
        };
        break;
    case 3:
        today = "Wenesday";
        coffee = {
            color: "brown",
            name: "Drip",
            pic: "Images/drip.jpg",
            alt: "A pic of drip Coffee",
            day: "Wednesday",
            desc: `Some days you just need the drip!`
        };
        break;
    
    case 4:
        today = "Thursday";
        coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic: "Images/bubble-tea.jpg",
            alt: "A pic of bubble tea",
            day: "Monday",
            desc: `Some days you just need the bubble tea!`
        };
        break;
    case 5:
        today = "Friday";
        coffee = {
            color: "yellow",
            name: "Caramel Latte",
            pic: "Images/caramel-latte.jpg",
            alt: "A pic of caramel-latte",
            desc: `Great scott!, it's Caramel latte day!`
        };
        break;
    case 6:
        today = "Saturday";
        coffee = {
            color: "brown",
            name: "Drip",
            pic: "Images/drip.jpg",
            alt: "A pic of drip Coffee",
            desc: `Some days you just need the drip!`
        };
        break;
    
    case 7:
        today = "Sunday";
        coffee = {
            color: "brown",
            name: "Drip",
            pic: "Images/drip.jpg",
            alt: "A pic of drip Coffee",
            desc: `Some days you just need the drip!`
        };
        break;
        
}

console.log(coffee);

document.getElementById("coffee-output").innerhtml = coffeeTemplate(coffee);

document.getElementById("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

alert("Hi, it's " + today);