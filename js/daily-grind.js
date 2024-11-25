/*
    daily-grind

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.

    The content must include:One unique image, with appropriate and matching content in the alt tag.  A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

    A unique color that supports the image and paragraph of contentThe unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    Here are the items we need for each coffee:

    name - Bubble Tea for example
    pic- An image of a bubble tea
    day - For example Wednesday
    alt - the data in the alt tag
    color- A color to match the coffee


*/



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 myDay = parseInt(myDay);//must change to integer for switch

//myDay = 3;//TEST ONLY  REMOVE THIS



switch(myDay){

     case 0:
         today = "Sunday";
     break;

     case 1:
        today = "Monday";

        coffee = {
            name: "Pumpkin Spice",
            pic: "images/pumpkin-spicelatte.jpg",
            day: "Monday",
            alt: "A pic of a Pumpkin spice",
            color: "orange",
            desc: `One of our best sellers!`
        };

    break;

     case 2:
         today = "Tuesday";
     break;

     case 3:
        today = "Wenesday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            day: "Wednesday",
            alt: "A pic of a Bubble Tea",
            color: "pink",
            desc: `I like me some Bubble Tea!`
        };

    break;
  
     default:
         today = "Something went wrong";

}

alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;


function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;


    return myReturn;

}
