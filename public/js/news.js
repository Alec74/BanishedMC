let allContent = document.querySelectorAll('.try');
const pageLeft = document.querySelector("#pageLeft");
const pageRight = document.querySelector("#pageRight");
let pageNum = document.querySelector("#pageNum");
let num = 1;
let pageNumContent = `Page ${num}`;
let content = document.querySelectorAll('#contentBody');
let modal = document.querySelectorAll(".modal-content");
let modalLink = document.querySelectorAll('#modal-link');
let mentions = document.querySelectorAll('.mention');

let p = 0;
let j = 9;

let n = -1;
mentions.forEach(el => {
    el.classList.add(`num${n += 1}`);
    // console.log(el)
})
// console.log(allContent[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild);


const renderCards = (p, j) => {
    //iterate through cards
    for (let k = 0; k < allContent.length; k++) {
        //get modal content
        let changeModal = modal[k].lastElementChild.firstElementChild;
        //if there is a mention
        if (allContent[k].firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.contains('mention')) {
            let a = allContent[k].firstElementChild.firstElementChild.firstElementChild.firstElementChild;
            let b = allContent[k].firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling;
            let c = allContent[k].firstElementChild.firstElementChild.firstElementChild.children;
            // console.log(c);
            let arrayA = [];
            let arrayB = [];

            //add all mentions id and usernames to an array
            for (let i = 0; i < c.length; i++) {
                if (c[i].classList.contains('name')) {
                    arrayA.push(c[i]);
                    // c[i].remove();
                }
                if (c[i].classList.contains('userID')) {
                    arrayB.push(c[i]);
                    // c[i].remove();
                }

            }
            //replace the summary and content with usernames instead of ids
            for (let j = 0; j < arrayA.length; j++) {
                let re = new RegExp(`<@!${arrayB[j].textContent}>`, 'g');
                c[c.length - 1].textContent = c[c.length - 1].textContent.replaceAll(re, arrayA[j].textContent)
                changeModal.textContent = changeModal.textContent.replaceAll(re, `@${arrayA[j].textContent}`);
            }
        }
        let c = allContent[k].firstElementChild.firstElementChild.firstElementChild.children;
        let arrayC = [];
        let type = [];
        let embedTitles = [];
        let embedDescriptions = [];
        let embedUrl = [];
        let thumbnailUrl = [];
        //iterate through body of card content and process the hidden elements for data
        for (let i = 0; i < c.length; i++) {
            if (c[i].classList.contains('img')) {
                arrayC.push(c[i]);
                c[i].remove();
            }
            if(c[i].classList.contains('type')) {
                type.push(c[i]);
                c[i].remove();
            }
            if(c[i].classList.contains('embedTitle')) {
                embedTitles.push(c[i]);
                c[i].remove();
            }
            if(c[i].classList.contains('embedDescriptions')) {
                embedDescriptions.push(c[i]);
                c[i].remove();
            }
            if(c[i].classList.contains('embedUrl')) {
                embedUrl.push(c[i]);
                c[i].remove();
            }
            if(c[i].classList.contains('thumbnailUrl')) {
                thumbnailUrl.push(c[i]);
                c[i].remove();
            }
        }
        //for as many images appear in messages, display them to modal
        for (let g = 0; g < arrayC.length; g++) {
            // console.log(arrayC[g].textContent)
            let img = document.createElement("img");
            let hold = document.createElement("div");
            hold.classList.add('card');
            img.src = arrayC[g].textContent;
            img.classList.add("img-fluid");
            img.classList.add("rounded");
            // img.classList.add("flex-start");
            hold.append(img);
            changeModal.append(hold);
        }
        
        //for as many embeds appear, process them and display them  to modal
        for (let g = 0; g < type.length; g++){
            let hold = document.createElement("div");
            hold.classList.add('card');
            hold.style = "background-color: #2c2f33;";
            let link = document.createElement("a");
            link.classList.add('card-link');
            let text = document.createElement('p');
            link.textContent = embedTitles[g].textContent;
            link.href = embedUrl[g].textContent;
            link.target = '_blank';
            link.style = 'color:blue; font-weight:bold;';
            text.textContent = embedDescriptions[g].textContent;
            hold.append(link);
            hold.append(text);
            if (thumbnailUrl[g]){
                let thumbnail = document.createElement('img');
                let body = document.createElement('div');
                body.classList.add('card-body');
                thumbnail.src = thumbnailUrl[g].textContent;
                thumbnail.classList.add('img-fluid');
                thumbnail.classList.add('img-rounded');
                thumbnail.style = "max-height:200px;"
                body.append(thumbnail);
                hold.append(body);
            }
            changeModal.append(hold);
        }
        // console.log(type)

        //show a specific content
        allContent[k].classList.remove('show');
        allContent[k].classList.add('hide');
    }
    for (let l = p; l < j; l++) {
        if (allContent[l]) {
            allContent[l].classList.add('show');
            allContent[l].classList.remove('hide');
        }
    }
};

n = -1;
// console.log(content)
content.forEach(el => {
    el.classList.add(`content${n += 1}`)
    // console.log(el.classList)
});
content.forEach(el => {
    let first = el.textContent.split(' ');
    first = first.slice(0, 5);
    let c = '';
    first.forEach(ele => {
        c += `${ele} `
    })
    el.textContent = c;
    // console.log(el)
})

for (let i = 0; i < modalLink.length; i++) {
    modalLink[i].classList.add(`link${i}`);
    modalLink[i].addEventListener('click', function () {
        n = -1;
        modal.forEach(el => {
            el.classList.add(`modal${n += 1}`);
            el.classList.add(`hide`);
        })
        // console.log(document.querySelector(`.modal${i}`));
        let body = document.querySelector(`.modal${i}`);
        // body.children[1].textContent = document.querySelector(`.content${i}`).textContent;
        // console.log(body.children)
        body.classList.remove('hide');
    })
    // console.log(modalLink[i].classList);
}

pageRight.addEventListener('click', function () {
    if (j < allContent.length) {
        renderCards(p += 9, j += 9)
        pageNumContent = `Page ${num += 1}`;
        pageNum.textContent = pageNumContent;
    }

})
pageLeft.addEventListener('click', function () {
    if (p > 0) {
        renderCards(p -= 9, j -= 9)
        pageNumContent = `Page ${num -= 1}`;
        pageNum.textContent = pageNumContent;
    }
})

renderCards(p, j);


let refreshData = async () => {
    console.log("data refreshing")
    const response = await fetch(`/api/message/discord`, {
        method: 'POST'
    });

}


// darkmode functionality
let bg = document.querySelector('.container');
let darkToggle = document.querySelector('.darkToggle');
let paginationContainer = document.querySelector('.card2');
let pageLinkBG = document.querySelectorAll('.page-link');
let darkIcon = document.querySelector('.darkIcon');
let card2BG = document.querySelector('.card2');
let footer = document.querySelector('.footer');
let modalContent = document.querySelectorAll('.modal-content');


$(document).ready(function () {
    // console.log('test')
    let dark = localStorage.getItem('dark');
    darkToggle.addEventListener('click', function () {
        // console.log('test')
        let dark = localStorage.getItem('dark');
        bg.classList.toggle('darkmodeBG');
        paginationContainer.classList.toggle('paginationBG');
        footer.classList.toggle('paginationBG');
        // for (let i = 0; i < pageLinkBG.length; i++) {
        //     pageLinkBG[i].classList.toggle('pageLinkBG');
        // }
        pageNum.classList.toggle('pageNumText');
        card2BG.classList.toggle('borderC');
        bg.classList.toggle('lightModeBG');
        paginationContainer.classList.toggle('paginationBGLight');
        for (let i = 0; i < pageLinkBG.length; i++) {
            pageLinkBG[i].classList.toggle('pageLinkBGLight');
            pageLinkBG[i].classList.toggle('pageLinkBG');
        }
        for (let i = 0; i < modalContent.length; i++){
            modalContent[i].classList.toggle('lightModeTxt');
            modalContent[i].classList.toggle('darkModeTxt');
        }
        if (darkIcon.classList.contains('fa-solid')) {
            darkIcon.classList.remove('fa-solid');
            darkIcon.classList.add('fa-regular');
        } else {
            darkIcon.classList.remove('fa-solid');
            darkIcon.classList.add('fa-solid');
        }

        // darkToggle.classList.add('light');
        if (dark === 'true') {
            localStorage.setItem('dark', false);
            // console.log(dark)
        } else {
            localStorage.setItem('dark', true)
        }
        // console.log(localStorage)
    })

    if (dark === 'true') {
        if (darkIcon.classList.contains('fa-solid')) {
            darkIcon.classList.remove('fa-solid');
            darkIcon.classList.add('fa-regular');
        } else {
            darkIcon.classList.remove('fa-solid');
            darkIcon.classList.add('fa-solid');
            bg.classList.toggle('lightModeBG');
            paginationContainer.classList.toggle('paginationBGLight');
            for (let i = 0; i < pageLinkBG.length; i++) {
                pageLinkBG[i].classList.toggle('pageLinkBGLight');
            }
            for (let i = 0; i < modalContent.length; i++){
                modalContent[i].classList.toggle('lightModeTxt');
            }
        }
        bg.classList.toggle('darkmodeBG');
        paginationContainer.classList.toggle('paginationBG');
        footer.classList.toggle('paginationBG');
        for (let i = 0; i < pageLinkBG.length; i++) {
            pageLinkBG[i].classList.toggle('pageLinkBG');
        }
        for (let i = 0; i < modalContent.length; i++){
            modalContent[i].classList.toggle('darkModeTxt');
        }
        pageNum.classList.toggle('pageNumText');
        card2BG.classList.toggle('borderC');
        bg.classList.toggle('lightModeBG');
        paginationContainer.classList.toggle('paginationBGLight');
        for (let i = 0; i < pageLinkBG.length; i++) {
            pageLinkBG[i].classList.toggle('pageLinkBGLight');
        }
        for (let i = 0; i < modalContent.length; i++){
            modalContent[i].classList.toggle('lightModeTxt');
        }
        // console.log('dark mode')
    } else {
        bg.classList.toggle('lightModeBG');
        paginationContainer.classList.toggle('paginationBGLight');
        for (let i = 0; i < pageLinkBG.length; i++) {
            pageLinkBG[i].classList.toggle('pageLinkBGLight');
        }
        for (let i = 0; i < modalContent.length; i++){
            modalContent[i].classList.toggle('lightModeTxt');
        }
        // console.log('light mode')
    }

})

setInterval(function(){
    refreshData();
}, 3600000);

