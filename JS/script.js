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


    myReturn =
    `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee" />
    <strong id= "coffeeHighlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong id= "coffeeHighlight">${coffee.name}</strong>,
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
            desc: `it's Caramel latte day!`
        };
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "Blue",
            name: "Cold Brew",
            pic: "Images/cold-bew.jpg",
            alt: "A pic of cold brew",
            day: "Wednesday",
            desc: `you need something stronger!`
        };
        break;
    
    case 4:
        today = "Thursday";
        coffee = {
            color: "Purple",
            name: "Frappaccino",
            pic: "Images/frappacino.jpg",
            alt: "A pic of a frappacino",
            day: "Thursday",
            desc: `spoil yourself! Thirsty Thursday`
        };
        break;

    case 5:
        today = "Friday";
        coffee = {
            color: "Green",
            name: "Mocha",
            pic: "Images/mocha.jpg",
            alt: "A pic of mocha",
            day: "Friday",
            desc: `its Fri-yay!`
        };
        break;

    case 6:
        today = "Saturday";
        coffee = {
            color: "Orange",
            name: "Pumpkin Spice Latte",
            pic: "Images/pumpkin-spice-latte.jpg",
            day: "Saturday",
            alt: "A pic of a Pumpkin Spice Latte",
            desc: `you can be basic at times!`
        };
        break;
    
    case 7:
        today = "Sunday";
        coffee = {
            color: "Brown",
            name: "Drip",
            pic: "Images/drip.jpg",
            day: "Sunday",
            alt: "A pic of drip Coffee",
            desc: `some days you just need drip!`
        };
        break;
        
}

console.log(coffee);

document.getElementById("coffee-output").innerhtml = coffeeTemplate(coffee);


document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

alert("Your link is working!");

document.getElementById("feature").style.backgroundColor = coffee.color;

alert("Hi, it's " + today);