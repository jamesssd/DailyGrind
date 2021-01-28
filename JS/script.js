/*
What we need to change:
Day of Week - day
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

if(urlParams.has('day')){//Use querry string
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}else{//Use date object
    myDay = myDate.getDay();
}

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn = `
        <p>
            <img src="${coffee.pic}" alt=" ${coffee.alt}" id="coffee" />
            <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.desc}
        </p>
    `;

    return myReturn;

}
 

let showText = [
    "Anyone who has ever made anything of importance was disciplined. - Andrew Hendrixson",

    "Do not spend time beating on a wall, hoping to transform it into a door. - Coco Chanel",
    
    "Creativity is intelligence having fun. - Albert Einstein",
    
    "Optimism is the one quality more associated with success and happiness than any other. - Brian Tracy",
    
    "Always keep your eyes open. Keep watching. Because whatever you see can inspire you. - Grace Coddington",
    
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Henry David Thoreau",
    
    "If the plan does not work, change the plan, but never the goal.",
    
    "I destroy my enemies when I make them my friends. - Abraham Lincoln",
    
    "Do not live the same year 75 times and call it a life.- Robin Sharma",
    
    "You cannot save people, you can just love them.- Ana\ï s Nin",
    
    "It was not raining when Noah built the ark.- Howard Ruff",
   
    "Take your dreams seriously.",
    
    "There is no way to happiness. Happiness is the way. - Thich Nhat Hanh",
    
    "Holding onto anger is like drinking poison and expecting the other person to die.",
    
    "Champions keep playing until they get it right. - Billie Jean King",
    
    "You will succeed because most people are lazy. - Shahir Zag",
    
    "Genius is 1% inspiration, 99% perspiration. - Thomas Edison",
    
    "A comfort zone is a beautiful place, but nothing ever grows there.",
    
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    
    "Numbing the pain for a while will only make it worse when you finally feel it.- Albus Dumbledore",
    
    "Do it with passion, or not at all. - Rosa Nouchette Carey"
];

let randomQuote = Math.floor(Math.random() * (showText.length));

function text(){
       
    document.getElementById("quotes").innerHTML = showText[randomQuote];
}

switch(myDay){
    case 0:
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
            color: "red",
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
            pic: "Images/cold-brew.jpg",
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
            pic: "Images/frappaccino.jpg",
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
    
    
        
}

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

document.getElementById("quotes").innerHTML = showText[randomQuote];