let allContent = document.querySelectorAll('.try');
const pageLeft = document.querySelector("#pageLeft");
const pageRight = document.querySelector("#pageRight");
let pageNum = document.querySelector("#pageNum");
let num = 1;
let pageNumContent = `Page ${num}`;
let content = document.querySelectorAll('#contentBody');
let modal = document.querySelectorAll(".modal-content");
let modalLink = document.querySelectorAll('#modal-link');

let p = 0;
let j = 9;

const renderCards = (p, j) => {
    for (let k = 0; k < allContent.length; k++) {
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

let n = -1;
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
        method: 'POST'});
    
}


setInterval(refreshData, 3600000);