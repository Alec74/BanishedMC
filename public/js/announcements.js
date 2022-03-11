//initiate variables used
let ul = document.getElementById("announcementsList");

let row = document.querySelector(".row");

let discordNews = document.querySelector("#discordNews");
let webNews = document.querySelector("#webNews");
let allNews = document.querySelector("#allNews");

let allLink = document.querySelector("#allLink");
let webLink = document.querySelector("#webLink");
let discordLink = document.querySelector("#discordLink");

const pageLeft = document.querySelector("#pageLeft");
const pageRight = document.querySelector("#pageRight");
let pageNum = document.querySelector("#pageNum");

let num = 1;
let i = 0;
let j = 9;



//temporary lists for testing
//TODO: Seed these arrays with data to use... likely backend/fetch
const discordNewsTitles = [
    "Lorem ipsum",
    "dolor sit amet,",
    "consectetur adipiscing",
    "elit, sed",
    "do eiusmod",
    "tempor incididunt",
    "ut labore et",
    "dolore magna",
    "aliqua. Ut",
    "enim ad",
    "minim veniam,",
    "quis nostrud",
    "exercitation ullamco",
    "laboris nisi",
    "ut aliquip",
    "ex ea commodo",
    "consequat. Duis"
];
const webNewsTitles = [
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "aliqua. Ut",
    "enim ad",
    "minim veniam,",
    "quis nostrud",
    "exercitation ullamco",
    "laboris nisi",
    "ut aliquip",
    "ex ea commodo"
];
const allNewsTitles = [
    "consequat. Duis",
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "voluptate velit",
    "esse cillum",
    "dolore eu",
    "fugiat nulla",
    "pariatur. Excepteur",
    "sint occaecat",
    "cupidatat non",
    "proident, sunt",
    "in culpa",
    "qui officia",
    "deserunt mollit",
    "anim id est laborum",
    "consequat. Duis",
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "voluptate velit",
    "esse cillum",
    "dolore eu",
    "fugiat nulla",
    "pariatur. Excepteur",
    "sint occaecat",
    "cupidatat non",
    "proident, sunt",
    "in culpa",
    "qui officia",
    "deserunt mollit",
    "anim id est laborum",
    "consequat. Duis",
    "aute irure",
    "dolor in",
    "reprehenderit in",
    "voluptate velit",
    "esse cillum",
    "dolore eu",
    "fugiat nulla",
    "pariatur. Excepteur",
    "sint occaecat",
    "cupidatat non",
    "proident, sunt",
    "in culpa",
    "qui officia",
    "deserunt mollit",
    "anim id est laborum"
];


//Function to add a single card with input text
//TODO make this a link to redirect to the news content (modal or diff page)
const addCard = (content) => {
    let column = document.createElement("div");
    column.classList.add("col-lg-4");
    column.classList.add("col-md-6");
    column.classList.add("col-sm-12");
    let card1 = document.createElement("div");
    card1.classList.add("card1");
    let card1Body = document.createElement("div");
    card1Body.classList.add("card1-body");
    card1Body.textContent = content;

    card1.append(card1Body);
    column.append(card1);
    row.append(column);
}


//function to addCards from an array of data
let loadNews = (list, i, j) => {
    deleteChild(row);
    for (i; i < j; i++){
        if (list[i]){
            addCard(list[i]);
        }
    }
}

//function to delete all inner html elements
function deleteChild(target) {
    var child = target.lastElementChild;
    while (child) {
      target.removeChild(child);
      child = target.lastElementChild;
    }
  }

//Make news buttons have event listeners and have a function to load specific content
discordNews.addEventListener("click", function () {
    event.preventDefault();
    pageNum.textContent = `Page ${num=1}`; //display initial page number of 1
    loadNews(discordNewsTitles, i=0, j=9); //set values of i and j for reusability as well as values in function
    clicked = 'discordNews';
    discordLink.classList.add("activePage"); //add class to differentiate current page from others
    webLink.classList.remove("activePage"); //remove other instances of class
    allLink.classList.remove("activePage");
});
webNews.addEventListener("click", function () {
    event.preventDefault();
    pageNum.textContent = `Page ${num=1}`;
    loadNews(webNewsTitles, i=0, j=9);
    clicked = 'webNews';
    webLink.classList.add("activePage");
    discordLink.classList.remove("activePage");
    allLink.classList.remove("activePage");
})
allNews.addEventListener("click", function () {
    event.preventDefault();
    pageNum.textContent = `Page ${num=1}`;
    loadNews(allNewsTitles, i=0, j=9);
    clicked = 'allNews';
    allLink.classList.add("activePage");
    discordLink.classList.remove("activePage");
    webLink.classList.remove("activePage");
})


//initiate variables for pagination and load first page view
let clicked = 'allNews';
loadNews(allNewsTitles, 0, 9); //on page load display discord news
allLink.classList.add("activePage");

//pagenumber text content change on clicks
num = 1;
pageNumContent = `Page ${num}`;

//pagination event listeners
// page right
pageRight.addEventListener("click", function (){
    event.preventDefault(); //stop page reload
    //Control flow to check which page is active and display results accordingly
    if (clicked === 'discordNews'){
        if (discordNewsTitles.length > j){
            loadNews(discordNewsTitles, i+=9, j+=9) //move iterable right by 9 and display the row
            pageNumContent = `Page ${num+=1}`;
            pageNum.textContent = pageNumContent; //set the page number and display to page
        }
    } else if (clicked === 'webNews'){
        if (webNewsTitles.length > j) {
            loadNews(webNewsTitles, i+=9, j+=9);
            pageNumContent = `Page ${num+=1}`;
            pageNum.textContent = pageNumContent;
        }
    } else if (clicked === 'allNews'){
        if (allNewsTitles.length > j){
            loadNews(allNewsTitles, i+=9, j+=9);
            pageNumContent = `Page ${num+=1}`;
            pageNum.textContent = pageNumContent;
        }
    }
})

//page left reversed above version
pageLeft.addEventListener("click", function () {
    event.preventDefault();
    if (clicked === 'discordNews'){
        if (i > 0){
            loadNews(discordNewsTitles, i-=9, j-=9); //move iterable left by 9 and display the row
            pageNumContent = `Page ${num-=1}`;
            pageNum.textContent = pageNumContent;
        }
    } else if (clicked === 'webNews'){
        if (i > 0){
            loadNews(webNewsTitles, i-=9, j-=9);
            pageNumContent = `Page ${num-=1}`;
            pageNum.textContent = pageNumContent;
        }
    } else if (clicked === 'allNews'){
        if (i > 0){
            loadNews(allNewsTitles, i-=9, j-=9);
            pageNumContent = `Page ${num-=1}`;
            pageNum.textContent = pageNumContent;
        }
    }
})
